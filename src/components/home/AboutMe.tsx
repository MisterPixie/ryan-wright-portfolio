export const AboutMe = () => {
    return (
        <div className="aboutMe">
            <div className="container">
                <div className="columns is-mobile is-centered is-vcentered">
                    <div className="column">
                        <div className="content">
                            <div className="title">
                                <p className="text-gradient-chill">About Me</p>
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
                    <div className="column is-narrow">
                        <figure className="image">
                            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHu8EJ5ZXRaRw/profile-displayphoto-shrink_200_200/0/1648233521215?e=1657756800&v=beta&t=rydDf2llJUzIhmg7f7qKcZNEYblM3OCwCKSotAtFlYc"/>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;