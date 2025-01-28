import "./style/AboutMeSection.css"
import { Link } from "react-router-dom"
import sarah0 from "../../assets/aboutme/sarah0.jpg"
import sarah1 from "../../assets/aboutme/sarah1.jpg"
import sarah2 from "../../assets/aboutme/sarah2.jpg"
import sarah3 from "../../assets/aboutme/sarah3.jpg"
import sarah4 from "../../assets/aboutme/sarah4.jpg"
import sarah5 from "../../assets/aboutme/sarah5.jpg"
import sarah6 from "../../assets/aboutme/sarah6.webp"
import frog from "../../assets/aboutme/frog.webp"
import shell from "../../assets/aboutme/shell.webp"
import flower1 from "../../assets/aboutme/flower-1.webp"
import skyfall from "../../assets/aboutme/skyfall.webp"
import redThing from "../../assets/aboutme/red-thing.webp"
import flower2 from "../../assets/aboutme/flower-2.png"
import feet from "../../assets/aboutme/feet.webp"
import flower3 from "../../assets/aboutme/flower-3.webp"
import sarah7 from "../../assets/aboutme/sarah7.jpg"
import shell2 from "../../assets/aboutme/shell-2.webp"
import shell3 from "../../assets/aboutme/shell-3.webp"


export const AboutMeSection = () => {
    return (
        <section id="aboutme">

            <h2>About me</h2>
            <div className="img-container">
                <img className="sarah-bg" src={sarah0} alt="sarah" />
                <img className="sarah-main" src={sarah1} alt="sarah" />
                <img className="sarah-sec-2" src={sarah2} alt="sarah" />
                <img className="sarah-sec-3" src={sarah3} alt="sarah" />
                <img className="sarah-sec-4" src={sarah4} alt="sarah" />
                <img className="sarah-sec-5" src={sarah5} alt="sarah" />
                <img className="sarah-sec-6" src={sarah6} alt="sarah" />
                <img className="frog" src={frog} alt="frog" />
                <img className="shell" src={shell} alt="shell" />
                <img className="flower-1" src={flower1} alt="flower" />
                <img className="skyfall" src={skyfall} alt="skyfall" />
                <img className="red-thing" src={redThing} alt="a red thing" />
                <img className="flower-2" src={flower2} alt="flower" />
            </div>


            <div>
                <div className="img-container-2">
                    <Link className="Button main" style={{textAlign: "center", textDecoration: "none", color: "#000"}} to={"/subscribe"}>Subscribe</Link>
                    <img className="shell-2" src={shell2} alt="shell" />
                    <img className="feet" src={feet} alt="feet" />
                    <img className="sarah-sec-7" src={sarah7} alt="sarah" />
                    <img className="flower-3" src={flower3} alt="flower" />
                    <img className="shell-3" src={shell3} alt="shell" />
                </div>

                <div className="text">
                    <p>
                    Hi there! I’m Sarah, a young mind living in Barcelona. If I had to sum myself up, I’d say I’m a mix of restless energy, a dash of chaos, and an unshakable drive to live life on my own terms. At the heart of it all, though, I’m just someone who values honesty. Books and music are my safe haven, the place I go when the world feels too loud or too quiet. They’re where I fuel my curious, daydreaming, hard-working soul. I’m fiercely independent but, truth be told, a hopeless romantic at heart—always drawn to the idea of meaningful, real connections.
                    </p>

                    <p>
                    This blog is my little corner of the universe and my start of the unimaginable dream of being a writer. This blog is a place not only to write, but to breathe, and escape. Here, you’ll find a bit of everything: musings on life, moments of poetry, collages, my book, and whatever else sparks my creativity. But more than anything, my goal is to connect—with readers, with other creative minds, and maybe even helping them to be seen with my writings. So, welcome! I hope this space feels like home to you too. 
                    </p>
                </div>
            </div>

        </section>
    )
}