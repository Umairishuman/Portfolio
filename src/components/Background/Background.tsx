import styles from "./Background.module.css";

interface BackgroundProps {
    imageUrl: string;
}

const Background = ({ imageUrl }: BackgroundProps) => {
    return (
        <div
            style={{ backgroundImage: `url(${imageUrl})` }}
            className={styles.background}
            aria-hidden="true"
        ></div>
    );
};

export default Background;
