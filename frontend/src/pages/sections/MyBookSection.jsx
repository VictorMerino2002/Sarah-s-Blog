import { Button } from "../../components/Button"
import "./style/MyBookPage.css"

export const MyBookSection = () => {
    return (
        <section id="mybook">
            <h2>My Book</h2>
            <div className="text">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, architecto. Maiores, nihil rerum. Perspiciatis non voluptates nobis totam. Corporis commodi veritatis molestias illo numquam cumque, officiis illum animi? Velit, consequuntur.</p>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, architecto. Maiores, nihil rerum. Perspiciatis non voluptates nobis totam. Corporis commodi veritatis molestias illo numquam cumque, officiis illum animi? Velit, consequuntur.</p>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, architecto. Maiores, nihil rerum. Perspiciatis non voluptates nobis totam. Corporis commodi veritatis molestias illo numquam cumque, officiis illum animi? Velit, consequuntur.</p>
            </div>

            <div className="book">
                <img src="" alt="" className="book-img"/>
                <Button variant={"main"}>Buy</Button>
            </div>
        </section>
    )
}