import portada from "../../assets/portada.webp"
import daisy from "../../assets/daisy.webp"
import { Button } from "../../components/Button"
import "./style/FrontPage.css"

export const FrontPage = () => {
    return (
        <section id="home">
            <div className="section-1">
                <h1>Sarah Román</h1>
                <div className="daisy-container">
                    <img className="daisy" src={daisy} alt="Margarita" />
                </div>
            </div>

            <div className="section-2">
                <img className="front-page" src={portada} alt="Portada Sarah Román" />
            </div>

            <div className="section-3">
                <div>
                    <p>Comfort and style come together in our collection. Find clothes that not only make you look good, but also feel good</p>
                    <Button variant={"black"}>BUY NOW</Button>
                </div>
            </div>
        </section>
    )
}