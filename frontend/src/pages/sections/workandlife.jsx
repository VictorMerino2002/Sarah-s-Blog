import "./style/WorkAndLifeSection.css"
import pink from "../../assets/workandlife/pink.svg"
import green from "../../assets/workandlife/green.svg"
import cloud from "../../assets/workandlife/cloud.svg"
import bear from "../../assets/workandlife/bear.webp"
import coffe from "../../assets/workandlife/coffe.webp"
import images from "../../assets/workandlife/images.png"
import clip from "../../assets/workandlife/clip.webp"
import flower1 from "../../assets/workandlife/flower-1.webp"
import flower2 from "../../assets/workandlife/flower-2.webp"

export const WorkAndLifeSection = () => {
    return (
        <section id="workandlife">
            <div className="main">
                <h2>
                    <span>Work </span>
                    <b>&</b>
                    <span> Life</span>
                </h2>

                <img src={coffe} alt="coffe" className="coffe"/>

                <div className="tourism">
                    <img src={green} alt="green" className="green"/>
                    <button>TOURISM</button>
                </div>

                <div className="journal">
                    <button>JOURNAL</button>
                    <img src={cloud} alt="" className="cloud"/>
                    <img src={bear} alt="bear" className="bear"/>
                </div>

                <div className="text">
                    <img src={pink} alt="pink" className="pink"/>
                    <p>This is where I’ll be
                    spilling the tea on
                    my personal life,
                    work adventures,
                    and all things in
                    between. Whether
                    it’s travel stories, or
                    just random
                    moments or
                    thoughts. Stay
                    tuned!</p>
                </div>
            </div>

            <div className="images">
                <img src={images} alt="" className="multiples"/>
                <img src={clip} alt="clip" className="clip"/>
                <img src={flower1} alt="flower" className="flower-1"/>
                <img src={flower2} alt="flower" className="flower-2"/>
            </div>
        </section>
    )
} 