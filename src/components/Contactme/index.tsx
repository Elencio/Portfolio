import "./Contactme.css"


function ContactMe() {
    return (
        <section className="contact-container">
            <h5>ContactMe</h5>
            <div className="contact-form-content">
                <form action="https://formsubmit.co/elenciocalado@gmail.com" method="POST">
                    <div className="name-container">
                        <input type="text" name="Firstname" placeholder="firstname" />
                        <input type="text" name="Lastname" placeholder="Lastname" />
                    </div>
                    <input type="text" name="email" placeholder="enter your email" />
                    <textarea name="message" id="" placeholder="Message" rows={3}></textarea>
                    <button>Send</button>
                </form>
            </div>

        </section>
    )
}

export default ContactMe