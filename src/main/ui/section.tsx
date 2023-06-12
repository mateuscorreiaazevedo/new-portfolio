import React from 'react'

type Props = {
  children: React.ReactNode
  col?: boolean
  animation?: 'section-1' | 'seciont-2' | 'section-3'
}

export default function Section ({ children, col, animation }: Props) {
  let animate = ''

  switch (animation) {
    case 'section-1':
      animate = 'animate-section-1'
      break
    case 'seciont-2':
      animate = 'animate-section-2'
      break
    case 'section-3':
      animate = 'animate-section-3'
      break
    default:
      animate = 'animate-none'
  }

  return (
    <section className={`${col ? 'flex-col' : 'flex-row'} ${animate} container h-screen w-full flex items-center justify-center`}>
      {children}
    </section>
  )
}