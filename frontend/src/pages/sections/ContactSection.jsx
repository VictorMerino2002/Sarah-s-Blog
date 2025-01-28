import images1 from "../../assets/contact/images-1.png"
import images2 from "../../assets/contact/images-2.png"
import frame from "../../assets/contact/frame.webp"
import star from "../../assets/contact/star.webp"

import "./style/ContactSection.css"

export const ContactSection = () => {
    return (
        <section id="contact">
            <header>
                <h2>Online <b>Contact</b></h2>
                <img src={star} alt="starfih" className="star"/>
            </header>

            <img src={images1} alt="images" className="images-1"/>

            <div className="sec-2">
                <img src={frame} alt="frame" className="frame"/>
                <p>If you’d like to get in touch whether it’s to chat, collaborate, or discuss potential work opportunities- I’d love to hear from you! - You can reach me via email or connect with me on LinkedIn. I truly respect your privacy, so rest assured, all personal information will be kept confidential.<br/><br/>Additionally, you can find other ways to contact me and stay updated with my work through my Instagram.</p>

                <div className="links">
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sarahromssil@gmail.com
">sarahromssil@gmail.com</a>
                    <a href="">Linkdn</a>
                    <a href="https://www.instagram.com/sarahromsil/">Instagram</a>
                    <a href="">Vinted</a>
                </div>
            </div>

            <div className="sec-3">
                <h3>DONATIONS &lt;3</h3>
                <p>Also, if you’ve enjoyed my words and feel like supporting the blog, I have a donation option available. Any contribution—big or small—is deeply appreciated and will go directly toward keeping this space running, funding book presentations, and helping with university expenses. Your generosity helps me continue creating, learning, and sharing.</p>
                <img src={images2} alt="images" className="images-2"/>
            </div>
        </section>
    )
}