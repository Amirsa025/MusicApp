import './App.css';
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Experiance from "./Components/Experiance/Experiance";
import Search from "./Components/Search/Search";
import Download from "./download/download";
import Footer from "./Footer/Footer";

function App() {
    return (
        <h1 className="App  text-gray-50 overflow-hidden">
            <Header/>
            <Hero/>
            <Experiance/>
            <Search/>
            <Download/>
            <Footer/>
        </h1>
    );
}

export default App;
