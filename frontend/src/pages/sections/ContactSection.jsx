import sarah1 from "../../assets/contact/sarah1.jpeg"
import feet from "../../assets/contact/feet.jpeg"
import flower from "../../assets/contact/flower.png"
import disc from "../../assets/contact/disc.jpeg"
import flowers from "../../assets/contact/flowers.jpg"
import phone from "../../assets/contact/phone.png"
import plant from "../../assets/contact/plant.jpg"
import frame from "../../assets/contact/frame.webp"
import star from "../../assets/contact/star.webp"
import planets from "../../assets/contact/planets.webp"
import bear from "../../assets/contact/bear.png"
import flowersBlue from "../../assets/contact/flowers-blue.webp"

import "./style/ContactSection.css"

export const ContactSection = () => {
    return (
        <section id="contact">
            <header>
                <h2>Online <b>Contact</b></h2>
                <img src={star} alt="starfih" className="star"/>
            </header>

            <div className="images-1">
                <img src={sarah1} alt="sarah" className="sarah-1"/>
                <img src={feet} alt="feet" className="feet"/>
                <img src={flower} alt="flower" className="flower"/>
                <img src={disc} alt="discs" className="disc"/>
                <img src={flowers} alt="flowers" className="flowers"/>
                <img src={plant} alt="plant" className="plant"/>
                <img src={phone} alt="phone" className="phone"/>
            </div>

            <div className="sec-2">
                <img src={frame} alt="frame" className="frame"/>
                <p>If you’d like to get in touch whether it’s to chat, collaborate, or discuss potential work opportunities- I’d love to hear from you! - You can reach me via email or connect with me on LinkedIn. I truly respect your privacy, so rest assured, all personal information will be kept confidential.<br/><br/>Additionally, you can find other ways to contact me and stay updated with my work through my Instagram.</p>

                <div className="links">
                    <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=sarahromssil@gmail.com
">sarahromssil@gmail.com</a>
                    <a target="_blank" href="www.linkedin.com/in/sarahromsil">Linkdn</a>
                    <a target="_blank" href="https://www.instagram.com/sarahromsil/">Instagram</a>
                    <a target="_blank" href="https://www.vinted.es/member/252530350-romsilblog">Vinted</a>
                    <a target="_blank" href="https://pin.it/3GH3jzDZZ">Pinterest</a>
                    <img src={planets} alt="planets" className="planets"/>
                </div>
            </div>

            <div className="sec-3">
                <h3>DONATIONS &lt;3</h3>
                <p>Also, if you’ve enjoyed my words and feel like supporting the blog, I have a donation option available. Any contribution—big or small—is deeply appreciated and will go directly toward keeping this space running, funding book presentations, and helping with university expenses. Your generosity helps me continue creating, learning, and sharing.</p>
                <img src={bear} alt="bear" className="bear"/>
                <img src={flowersBlue} alt="flowers" className="flowers-blue"/>
            </div>
        </section>
    )
}