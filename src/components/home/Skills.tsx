export const Languages = () => {
    return (
        <section className="languages">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <div className="header">
                            <p className="my-title text-gradient-chill">Skills</p>
                            <p className="description">I'm constantly learning new frameworks & languages, so here is some of my skills.</p>
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-4">
                        <div className="lang-container">
                            <p className="my-title">Languages</p>
                            <div className="tags is-right">
                                <span className="tag"><img src="/images/csharp.svg"/>C#</span>
                                <span className="tag"><img src="/images/vb.svg"/>Visual Basic</span>
                                <span className="tag"><img src="/images/sql.svg"/>SQL</span>
                                <span className="tag"><img src="/images/javascript.svg"/>JavaScript</span>
                                <span className="tag"><img src="/images/swift.svg"/>Switft</span>
                                <span className="tag"><img src="/images/php.svg"/>PHP</span>
                                <span className="tag"><img src="/images/python.svg"/>Python</span>
                            </div>
                        </div>
                    </div>
                    <div className="column is-4">
                        <div className="frameworks-container">
                            <p className="my-title">Frameworks</p>
                            <div className="tags is-right">
                                <span className="tag"><img src="/images/net.svg"/>.NET Framework</span>
                                <span className="tag"><img src="/images/net core.svg"/>.NET Core</span>
                                <span className="tag"><img src="/images/reactjs.svg"/>ReactJS</span>
                                <span className="tag"><img src="/images/react native.svg"/>React Native</span>
                                <span className="tag"><img src="/images/jquery.svg"/>JQuery</span>
                                <span className="tag"><img src="/images/winforms.svg"/>Win Forms</span>
                            </div>
                        </div>
                    </div>
                    <div className="column is-4">
                        <div className="software-container">
                            <p className="my-title">Software</p>
                            <div className="tags is-right">
                                <span className="tag"><img src="/images/csharp.svg"/>Visual Studio</span>
                                <span className="tag"><img src="/images/MySQL Workspace.svg"/>MySQL Workspace</span>
                                <span className="tag"><img src="/images/pgadmin.svg"/>pgAdmin</span>
                                <span className="tag"><img src="/images/csharp.svg"/>Studio Code</span>
                                <span className="tag"><img src="/images/sublime text.svg"/>Sublime Text</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Languages