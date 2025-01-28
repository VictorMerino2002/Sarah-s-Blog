import "./style/FrontPage.css"
import plant from "../../assets/planta.webp"
import disc from "../../assets/disco.webp"
import flower from "../../assets/flor.webp"
import sarah from "../../assets/portada.webp"
import dog from "../../assets/perro.webp"
import pinterest from "../../assets/pinterest.png"
import coffee from "../../assets/cafe.png"
import { Link } from "react-router-dom"

export const FrontSection = () => {
    return (
        <section id="home">
            <img src={plant} alt="planta" className="plant" />

            <h1>
                <span>A Creative</span>
                Sarah
                <span>Thoughhul mind</span>
                Román
            </h1>
            <div className="img-container">
                <img src={sarah} alt="sarah" className="sarah"/>
                <img src={dog} alt="dog" className="dog"/>
                <img src={pinterest} alt="pinterest" className="pinterest"/>
                <img src={coffee} alt="cafe" className="coffee"/>
            </div>

            <div className="text">
                <p>Welcome to my blog! I’m Sarah, a 20-year-old diving into everything life has to offer—music, books, travels, studies, work and the ups and downs along the way. Here, I’ll share my personal experiences and insights, hoping to connect with those on similar paths or just curious about a fresh perspective. Whether you’re here for inspiration, advice, or just a relatable read, I’m excited to have you on this journey with me. Let’s grow and learn together!</p>
            </div>

            <img src={disc} alt="disco vinillo" className="disc" />
            <span className="line"></span>

            <div className="flower-subscribe">
                <Link className="Button main" style={{textAlign: "center", textDecoration: "none", color: "#000"}} to={"/subscribe"}>Subscribe</Link>
                <img src={flower} alt="flor rosa" className="flower"/>
            </div>
        </section>
    )
}