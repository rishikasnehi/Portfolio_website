import React from 'react'
import { getImageUrl } from '../../utils'

export const Hero = () => {
  return (
    <section>
        <div>
            <h1>Hi, I'm Hika</h1>
            <p>I'm a full-stack developer with academic experience usign React and NodeJS. Reach out if you'd like to learn more about me or my work.</p>
            <a href='mailto:snehirishika@gmail.com'>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me"/>
    </section>
  )
}