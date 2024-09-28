import { forwardRef } from 'react'
import { InlineWidget } from 'react-calendly'

const calendlyUrl = 'https://calendly.com/alexandrafina/discoverycall'

export const Calendar = forwardRef<HTMLSpanElement>(
  function Calendar(_props, ref) {
    return (
      <span ref={ref} className="calender">
        <InlineWidget styles={{ display: 'contents' }} url={calendlyUrl} />
      </span>
    )
  }
)
