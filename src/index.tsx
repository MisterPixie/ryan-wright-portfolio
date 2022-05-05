import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import App from "./pages/App";

//Style imports
import "bulma/css/bulma.css";
import "./sass/pages/_home.scss";
import "./sass/layout/_grid.scss";

//Comps imports
import Projects from './pages/projects/Projects';
import Navbar from './components/Navbar';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/projects" element={<Projects/>}/>
        </Routes>
    </Router>
);