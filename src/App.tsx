import { useRef } from 'react'

import { Calendar } from './Calendar'

import logo from '../logo.png'
import me from '../me.jpeg'
import './App.scss'

export function App() {
  const calendarRef = useRef<HTMLSpanElement>(null)

  const handleClick = () =>
    calendarRef.current?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="app">
      <img src={logo} className="logo" />
      <div className="section introduction">
        <img src={me} />
        <div>
          <span className="title">
            I help e-commerce businesses and entrepreneurs with strategy,
            content creation & digital organisation.
          </span>
          <span>
            Stop wasting time not knowing what to post and discover new ways to
            keep your feed active with a strategy in place.
          </span>
          <span>
            Get in touch today to allow me to take care of your social media
            content plan so you can spend more of your valuable time managing
            and expanding your business.
          </span>
          <button onClick={handleClick}>Contact me now!</button>
        </div>
      </div>
      <div className="section dark philosophy">
        <span className="title">My philosophy</span>
        <span>
          I help you empower your business by developing an effective content
          strategy, craft valuable content that nurtures meaningful connections,
          and expand your audience while building a community.
        </span>
      </div>
      <div className="section packages">
        <span className="title">Packages</span>
        <div className="service">
          <span className="header">
            <h3 className="highlight">Strategy</h3>
            £100
          </span>
          <span>
            A one-off content strategy session to discuss your goals, ideal
            audience and what content will make the biggest impact for you. We
            will review your digital organisation and how you can create a
            feasible plan for content creation, editing, scheduling & analysis.
          </span>
          <ul>
            <strong>Includes</strong>
            <li>
              Notion template containing a summary of the results of the
              strategy session and extra information to help you in your content
              creation (workflows, content system, content calendar with ideas
              and season-specific ideas etc.).
            </li>
            <li>
              30 Canva Instagram Templates Pack ready to edit and use (free
              Canva account required).
            </li>
          </ul>
        </div>

        <span className="service">
          <span className="header">
            <h3 className="highlight">Strategy & Content</h3>
            from £600/month*
          </span>
          <span>
            A managed service where we will initially meet for a session to
            outline the goals and develop a strategy. I will create and schedule
            content for you, continually analyse the performance and we will
            collaborate to find the best approach.
          </span>
          <ul>
            <strong>Includes</strong>
            <li>
              Content calendar with 12 feed post ideas - these will require some
              contributions from you (images, videos, photos, caption notes
              etc.) to create high-quality, effective & authentic content.
            </li>
            <li>
              12 strategic pieces of content with captions, keywords, hashtags
              etc. edited according to your individual brand guidelines.
            </li>
            <li>
              Provided to you ready to post or schedule using a scheduling tool.
            </li>
            <span>
              *Minimum of 2 months commitment. Does not include photography,
              video or platform management.
            </span>
          </ul>
          Should you require a customized solution that aligns with your
          specific business requirements, kindly reach out to me, and I will
          gladly explore ways in which I can assist you.
        </span>
      </div>
      <div className="section dark about-me">
        <span className="title">About Me</span>
        <p>
          "Throughout my professional journey in different corporate positions
          and industries, I have acquired a diverse set of skills. Alongside my
          experience as a team assistant, sales assistant, and software
          engineer, I have pursued a Management & Marketing degree and completed
          courses in Graphic Design as well as The Fundamentals of Digital
          Marketing. I believe in the beauty of simplicity, that organisation is
          very important in your business, and having a robust content creation
          process and systems to support your growth. I am excited to support
          you in your mission of creating your unique story."
        </p>
      </div>
      <div className="section">
        <Calendar ref={calendarRef} />
      </div>
      All Rights Reserved
    </div>
  )
}
