import AboutMe from "../components/home/AboutMe";
import ContactMe from "../components/home/ContactMe";
import Languages from "../components/home/Languages";

export const App = () => {
    return (
        <div className="app">
            <AboutMe/>
            <Languages/>
            <ContactMe/>
        </div>
    )
}

export default App;