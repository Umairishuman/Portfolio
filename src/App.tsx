// import styles from "./App.module.css";
import Home from "./Pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
function App() {
    let navBarItems = ["Home", "Projects", "About", "Services", "Contact"];
    return (
        <>  
            <NavBar items={navBarItems} />
            <Home />
        </>
    );
}

export default App;
