import PrimaryCard from "./PrimaryCard";
import StandardLink from "./StandardLink";
import "../styles/Intro.scss";

export default function Intro() {
    const primaryCards = [
        {
            id: 1,
            imageSrc: "",
            title: "The Wall Of Flowers",
            description: "Mattis Magna Purus",
        },
        {
            id: 2,
            imageSrc: "",
            title: "The Nameless kingdom",
            description: "Lectus Eget Libero",
        },
    ];

    return (
        <div className="intro">
            <div className="intro__info">
                <div>
                    <h1 className="intro__title">Focus On What's Right In Front Of You</h1>
                    <p className="intro__desciption">That's the only thing that matters</p>
                </div>
                <div className="intro__link">
                    <StandardLink href="/#" text="Show Me More" />
                </div>
            </div>
            <div className="intro__cards">
                {primaryCards.map((data) => {
                    return <PrimaryCard key={data.id} imageSrc={data.imageSrc} title={data.title} description={data.description} />;
                })}
            </div>
        </div>
    );
}
