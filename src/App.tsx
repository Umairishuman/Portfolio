// import styles from "./App.module.css";
import Home from "./Pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
function App() {
    let navBarItems = ["Home", "Projects", "Contact"];
    return (
        <>  
            <NavBar items={navBarItems} />
            <Home />
        </>
    );
}

export default App;
