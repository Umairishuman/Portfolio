import styles from "./AboutMe.module.css";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { motion } from "framer-motion";
const AboutMe = () => {
    return (
        <motion.div
            className={styles.AboutMe}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1 }}
        >
            <SectionHeading text="About Me" />
            <div className={styles.summary}>
                <p>
                    I am a passionate Full Stack Developer with a keen interest
                    in AI/ML technologies. I love building innovative solutions
                    that make a difference.
                </p>
                <p>
                    In my free time, I enjoy exploring new technologies,
                    contributing to open source projects, and sharing knowledge
                    with the community.
                </p>
                <p>
                    Feel free to connect with me on social media or check out my
                    projects on GitHub!
                </p>
            </div>
            <div className={styles.links}>
                <a href="">Contact Me</a>
                <a href="">View Resume</a>
                <a href="">Hire Me</a>
            </div>
        </motion.div>
    );
};

export default AboutMe;
