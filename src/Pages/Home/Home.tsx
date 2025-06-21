import styles from "./Home.module.css";
import Background from "../../components/Background/Background";
const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <Background imageUrl="/assets/background-image.jpg" />
            <div style={{ position: "relative", zIndex: 1 }}>
                <h1>Welcome to My Site</h1>
                <p>Content goes here...</p>
            </div>
        </div>
    );
};

export default Home;
