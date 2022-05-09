import React from "react";
import "../sass/layout/_footer.scss";


export const Footer = () => { 
    const getCurrentYear = () => {
        return new Date().getFullYear();
    }
    
    return (    
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    <strong>Ryan Wrights Portfolio</strong> made with <a href="https://reactjs.org/">ReactJS</a> And <a href="https://bulma.io/">Bluma</a>.
                    All source code can be found <a href="https://github.com/MisterPixie">here</a> - Copyright 2022-{getCurrentYear()}
                </p>
            </div>
        </footer>
    )
}


export default Footer