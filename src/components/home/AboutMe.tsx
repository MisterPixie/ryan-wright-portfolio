export const AboutMe = () => {
    return (
        <div className="aboutMe">
            <div className="container">
                <div className="columns v-centered centered">
                    <div className="column is-narrow">
                        <figure className="image is-128x128">
                            <img src="https://bulma.io/images/placeholders/256x256.png"/>
                        </figure>
                    </div>
                    <div className="column">
                        <div className="content is-desktop is-vcentered">
                            <div className="title">
                                <h5>About Me</h5>
                            </div>
                            <div className="description">
                                <p>
                                    My life as a programmer began at the young age of 14 when I learned programming fundamentals which unlocked a massive world of unlimited possibilities.
                                    <br/>
                                    After I finished school, I was a sole trader learning lots of different skills such as multilanguage programming, networking, back-end/front-end development & volunteer management.
                                    <br/><br/>
                                    To this current day, I work as a Software Developer for Track a Parcel, developing logistics software that will change the world. I'm also a Cub Scout Leader because I believe in volunteering & helping people learn key life skills.
                                    I'm Currently Learning React, React Native, Swift in my spare time
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;