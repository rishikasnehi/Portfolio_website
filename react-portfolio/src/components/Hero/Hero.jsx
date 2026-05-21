import React from 'react'

import styles from "./Hero.module.css"
import { getImageUrl } from '../../utils'

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Rishika Snehi</h1>
                <p className={styles.description}>Information Science undergraduate at Bangalore Institute of Technology. Full-stack developer passionate about building scalable and user-friendly applications. I enjoy working with React, Spring Boot, Python, and AI-powered solutions while continuously improving my problem-solving and development skills.</p>
                <a href='https://drive.google.com/file/d/1xNtQp-hkmQx_BQgYsd-gCLcnL9Qfbnhv/view?usp=sharing' target="_blank" rel="noopener noreferrer" className={styles.contactBtn}>View Resume</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}