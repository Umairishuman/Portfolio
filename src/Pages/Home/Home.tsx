import styles from "./Home.module.css";
import LargeNameHeading from "./LargeNameHeading";
import Background from "../../components/Background/Background";
import AboutMe from "./AboutMe";
const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <Background imageUrl="/assets/background-image.jpg" />
            <LargeNameHeading text="Umair" />
            <AboutMe />

        </div>
    );
};

export default Home;
