import PrimaryCard from "./PrimaryCard";
import StandardLink from "./StandardLink";
import firstIntroImage from "../assets/intro-first.jpg";
import secondIntroImage from "../assets/intro-second.jpg";
import "../styles/Intro.scss";

export default function Intro() {
    const primaryCards = [
        {
            id: 1,
            imageSrc: firstIntroImage,
            title: "The Wall Of Flowers",
            description: "Mattis Magna Purus",
        },
        {
            id: 2,
            imageSrc: secondIntroImage,
            title: "The Nameless kingdom",
            description: "Lectus Eget Libero",
        },
    ];

    return (
        <div className="intro">
            <div className="intro__info">
                <div className="intro__info-text">
                    <h1 className="intro__title">
                        Focus On What's Right In Front <br className="intro__title-break" />
                        Of You
                    </h1>
                    <p className="intro__description">That's the only thing that matters</p>
                </div>
                <div className="intro__link">
                    <StandardLink href="/#" text="Show Me More" />
                </div>
            </div>
            <div className="intro__cards-container">
                {primaryCards.map((data) => {
                    return (
                        <a className="intro__card" href="/#" key={data.id}>
                            <PrimaryCard imageSrc={data.imageSrc} title={data.title} description={data.description} />
                        </a>
                    );
                })}
            </div>
        </div>
    );
}
