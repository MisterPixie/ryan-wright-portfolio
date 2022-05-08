export const AboutMe = () => {
    return (
        <div className="aboutMe">
            <div className="container">
                <div className="columns">
                    <div className="column is-narrow">
                        <figure className="image is-128x128">
                            <img src="https://bulma.io/images/placeholders/256x256.png"/>
                        </figure>
                    </div>
                    <div className="column">
                        <div className="title">
                            <p>About Me:</p>
                        </div>
                        <div className="description">
                            <p>Blah Blah</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;