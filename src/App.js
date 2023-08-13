import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Second from "./components/Second";
import Third from "./components/Third";

function App() {
    return (
        <>
            <div className="">
                <Navbar />
                <Hero />
                <Second />
                <Third />
            </div>
        </>
    );
}

export default App;
