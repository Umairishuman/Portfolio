import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
    text: string;
}
const SectionHeading = ({ text }: SectionHeadingProps) => {
    return <h1 className={styles.heading}>{text}</h1>;
};

export default SectionHeading;
