'use client'

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { Input, PrimaryButton, Section } from '@/main/ui'
import React from 'react'
import { setNotification } from '@/modules/core'
import { useRouter } from 'next/navigation'
import { authService } from '@/modules/auth'
import { Spinner } from '@/components'

export default function Login () {
  const [loading, setLoading] = React.useState(false)
  const methods = useForm<Login>()
  const router = useRouter()

  const {
    formState: { errors }
  } = methods

  const handleLogin: SubmitHandler<Login> = async formLogin => {
    setLoading(true)

    try {
      const message = await authService.login(formLogin)
      setNotification(message!, 'success')
      router.push('/admin')
    } catch (error) {
      setNotification((error as any).message)
      methods.resetField('password')
    } finally {
      setLoading(false)
    }
  }

  const allErrors = errors.email || errors.password

  return (
    <FormProvider {...methods}>
      <Section col>
        <form
          onSubmit={methods.handleSubmit(handleLogin)}
          className="w-full px-8 py-4 max-w-xl space-y-2 bg-zinc-800/60 rounded-lg h-fit border border-zinc-600/60 backdrop-blur-sm"
        >
          <h1 className="text-lg font-alt uppercase w-full text-center">Página de Login - Bem-vindo Mateus!</h1>
          <Input field="email" placeholder="Meu E-mail" />
          <Input type="password" field="password" placeholder="Minha senha" />
          <PrimaryButton type="submit" disabled={loading} errors={allErrors}>
            {!loading ? 'Entrar' : <Spinner />}
          </PrimaryButton>
        </form>
      </Section>
    </FormProvider>
  )
}