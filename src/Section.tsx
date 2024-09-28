import clsx from 'clsx'
import { ReactNode } from 'react'

import './Section.scss'

interface SectionProps {
  dark?: boolean
  children: ReactNode
}

export function Section({ dark = false, children }: SectionProps) {
  // return <div className={`section flex-col ${dark && 'dark'}`}>{children}</div>
  return <div className={clsx('section flex-col', { dark })}>{children}</div>
}
