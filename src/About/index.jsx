import styles from './About.module.css'

import me from './assets/me.webp'

const About = () => {
    return (
        <section className={styles.about} id="about">
            <h2>About</h2>
            <div className={styles.aboutContent}>
                <div className={styles.imgContainer}>
                    <img src={me} alt="Victor's picture" />
                </div>
                <div className={styles.aboutTxtContainer}>
                    <div className={styles.aboutTxt}>
                        <p>
                            My name is Victor Freire Oliveira and I am a creative Software Engineer from Maceió, AL - Brazil. My focus is frontend development, which means I build digital products that users see and interact with. Since I found out how fun coding can be, I started developing my skills and working on different personal projects and doing freelance services.
                        </p>
                        <br />
                        <p>
                            My experience started back in high school, learning HTML and CSS for fun, creating my own websites about whatever subject I enjoyed (old HotDog and Dreamweaver). The following years I kept developing skills in different areas, including Graphic Design and digital art. Nowadays, I make use of all those skills to bring solution to people through technology, keeping curious and thirsty for learning new things and sharing my ideas.
                        </p>
                        <br />
                        <p>
                            For further information and updates, visit my <a href="https://www.linkedin.com/in/victor-fo/" target='_blank' rel="noreferrer">LinkedIn profile</a>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About