import styles from "./LargeNameHeading.module.css";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
interface LargeNameHeadingProps {
    text: string;
}

function LargeNameHeading({ text }: LargeNameHeadingProps) {
    const [displayText, setDisplayText] = useState("");
    const [showSubtext, setShowSubtext] = useState(false);
    const [displaySubtext, setDisplaySubtext] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const heading = `Hi, I am ${text}`;
        let i = 0;
        const headingInterval = setInterval(() => {
            if (i < heading.length) {
                setDisplayText(heading.substring(0, i + 1));
                i++;
            } else if (i === heading.length) {
                setDisplaySubtext(true);
                i++; 
            } else {
                clearInterval(headingInterval);
                setTimeout(() => setShowSubtext(true), 300); 
            }
        }, 100);

        return () => {
            clearInterval(headingInterval);
        };
    }, [text]);

    return (
        <motion.div
            ref={containerRef}
            className={styles.container}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className={styles.heading}>{displayText}</h1>
            {displaySubtext && (
                <h2
                    className={`${styles.subheading} ${
                        showSubtext ? styles.visible : ""
                    }`}
                >
                    A passionate Full Stack Developer & aspiring AI/ML
                    innovator.
                </h2>
            )}
        </motion.div>
    );
}

export default LargeNameHeading;
