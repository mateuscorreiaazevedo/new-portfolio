'use client'

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { Input, PrimaryButton, Section } from '@/main/ui'
import { setNotification } from '@/modules/core'
import { authService } from '@/modules/auth'
import { useRouter } from 'next/navigation'
import { Spinner } from '@/components'
import Link from 'next/link'
import React from 'react'

export default function Login() {
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
      router.refresh()
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
        <Link
          href="/"
          className="mb-4 rounded-full bg-zinc-800 px-4 py-2 font-alt transition-colors hover:bg-zinc-950"
        >
          Ir para Home
        </Link>
        <form
          onSubmit={methods.handleSubmit(handleLogin)}
          className="h-fit w-full max-w-xl space-y-2 rounded-lg border border-zinc-600/60 bg-zinc-800/60 px-8 py-4 backdrop-blur-sm"
        >
          <h1 className="w-full text-center font-alt text-lg uppercase">
            Página de Login - Bem-vindo Mateus!
          </h1>
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
