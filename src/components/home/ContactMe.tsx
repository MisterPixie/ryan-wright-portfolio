export const ContactMe = () => {

    return (

        <section className="contactMe">
            <div className="container">
                <div className="columns is-mobile is-centered is-vcentered">
                    <div className="column is-half">
                        <div className="content">
                            <p className="has-text-centered">Looking for someone to complete a project for you?</p>
                            <form>
                                <div className="field">
                                    <label className="label">Project Subject</label>
                                    <div className="control">
                                        <input className="input" type="text" placeholder="What's your 'secret' project name?"/>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Project Description</label>
                                    <div className="control">
                                        <textarea className="textarea" placeholder="Give me a description of the project & whats your requirements"/>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <button className="button is-link">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ContactMe;