import "./style/MyBookSection.css"

import orFlower from "../../assets/mybook/orange-flower.webp"
import sarah1 from "../../assets/mybook/sarah-1.webp"
import startfish from "../../assets/mybook/star.webp"
import sarah2 from "../../assets/mybook/sarah-2.webp"
import home from "../../assets/mybook/home.webp"
import desk from "../../assets/mybook/desktop.webp"
import book from "../../assets/mybook/book.jpg"
import yeFlower from "../../assets/mybook/yellow-flower.webp"
import typewritter from "../../assets/mybook/typewritter.webp"
import pkFlower from "../../assets/mybook/pink-flower.webp"
import shadow from "../../assets/mybook/shadow.svg"
import butterfly from "../../assets/mybook/butterfly.png"
import books from "../../assets/mybook/books.webp"

export const MyBookSection = () => {
    return (
        <section id="mybook">
            <div className="images">
            <img src={shadow} alt="orange shadow" className="shadow"/>
            <h2>My
                <b>Book</b>
            </h2>

            <img src={orFlower} alt="orange flower" className="orange-flower"/>
            <img src={sarah1} alt="sarah" className="sarah-1"/>
            <img src={home} alt="home" className="home"/>
            <img src={startfish} alt="starfish" className="starfish"/>
            <img src={sarah2} alt="sarah" className="sarah-2"/>
            <img src={desk} alt="desktop" className="desk"/>
            <img src={book} alt="book" className="book"/>
            <img src={yeFlower} alt="yellor flower" className="yellow-flower"/>
            <img src={pkFlower} alt="pink flower" className="pink-flower"/>
            <img src={butterfly} alt="butterfly" className="butterfly"/>
            <img src={typewritter} alt="typewritter" className="typewritter"/>


            </div>
            <div className="text">
                <p>
                <h3>About My Book</h3>
                I’m excited to share that my first book will soon be available for purchase in Mexico, Colombia, and Spain. For readers in Spain, it will be available in major bookstores like Corte Inglés, FNAC, Casa del Libro, as well as online on platforms like Amazon and the Editorial Valparaiso’s website.
                </p>

                <p>
                This book is a collection of biographical poetry— Most of the poems were written throughout the years. It reflects my journey over the past four years, exploring my teenage struggles, search for love, tough love and painful experiences, including sex**l 4buse, and most importantly how I’ve worked through them.
                </p>

                <img src={books} alt="books" className="books"/>
                <p>
                I’m scared to share this with the world and now a days f*cked up society. I mean, being vulnerable in front of an audience and people who do know me, terrifies me. But this book is my denuncia, my statement, and I want to help other young women who’ve experienced the same pain and never knew where to reach out. If my words can bring comfort or strength to even one person, it will all be worth it.
                </p>
            </div>
        </section>
    )
}