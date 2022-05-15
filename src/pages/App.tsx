import AboutMe from "../components/home/AboutMe";
import ContactMe from "../components/home/ContactMe";
import Skills from "../components/home/Skills";

export const App = () => {
    return (
        <div className="app">
            <AboutMe/>
            <Skills/>
            <ContactMe/>
        </div>
    )
}

export default App;