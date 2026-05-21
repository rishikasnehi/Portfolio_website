import React from 'react'

import styles from "./About.module.css"
import { getImageUrl } from '../../utils'

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img
                    src={getImageUrl("about/aboutImage.png")}
                    alt="Me sitting with a laptop"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
                        <div className={styles.aboutItemText} >
                            <h3>Full-Stack Developer</h3>
                            <p>
                                I build responsive React front ends and Spring Boot backends with clean APIs and efficient data flows.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Software Engineer</h3>
                            <p>
                                I use Java, Python, C++, and databases to create scalable applications and professional engineering solutions.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="UI Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Problem Solver</h3>
                            <p>
                                I have solved 1000+ coding problems and sharpened my skills through LeetCode, HackerRank, and hackathon challenges.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}
