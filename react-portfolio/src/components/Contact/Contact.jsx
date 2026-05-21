import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css"

export const Contact = () => {
    return <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out for internships, collaborations, or software projects.</p>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                    <a href="mailto:snehirishika@gmail.com">snehirishika@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon" />
                    <a href="https://www.linkedin.com/in/rishikasnehi/">linkedin.com/rishikasnehi</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
                    <a href="https://github.com/rishikasnehi">github.com/rishikasnehi</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/leetcodeIcon.svg")} alt="LeetCode Icon" />
                    <a href="https://leetcode.com/rsnehi">leetcode.com/rsnehi</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/hackerrankIcon.svg")} alt="HackerRank Icon" />
                    <a href="https://www.hackerrank.com/profile/rishika200422">hackerrank.com/rishika200422</a>
                </li>
            </ul></div>
    </footer>

}