import { SkillForm } from '@/modules/skills'
import Link from 'next/link'
import React from 'react'

export default function Skill() {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center gap-10">
      <div className="flex w-full max-w-3xl animate-section-2 items-center justify-between">
        <h1 className="font-alt text-4xl first-letter:text-primary">
          Adicionar Skill
        </h1>
        <Link
          href="/admin"
          className="rounded-full bg-violet-500 px-4 py-2 text-left font-alt text-white transition-all hover:bg-violet-600"
        >
          Ir para dashboard
        </Link>
      </div>
      <SkillForm />
    </section>
  )
}
