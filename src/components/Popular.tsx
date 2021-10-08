import SectionTitle from "./SectionTitle";
import StandardCard from "./StandardCard";
import popularFirstImage from "../assets/popular-first.jpg";
import popularSecondImage from "../assets/popular-second.jpg";
import popularThirdImage from "../assets/popular-third.jpg";
import popularFrouthImage from "../assets/popular-fourth.jpg";
import "../styles/Popular.scss";

export default function Popular() {
    // Mock data
    const standardCards = [
        {
            id: 1,
            imageSrc: popularFirstImage,
            title: "Lost Past",
            description: "Praesent Nunc Est",
        },
        {
            id: 2,
            imageSrc: popularSecondImage,
            title: "Old Revenge",
            description: "Lacinia A Blandit Ut",
        },
        {
            id: 3,
            imageSrc: popularThirdImage,
            title: "Another Clash",
            description: "Amet Ligula Imperdiet",
        },
        {
            id: 4,
            imageSrc: popularFrouthImage,
            title: "New Warrior",
            description: "Facilisis Ante Non Blandit",
        },
    ];

    return (
        <section className="popular">
            <div className="popular__title">
                <SectionTitle title="Something domestic" description="Excitement replaced fear until the final moment" />
            </div>
            <div className="popular__cards-container">
                {standardCards.map((data) => {
                    return (
                        <a className="popular__card" href="/#" key={data.id}>
                            <StandardCard imageSrc={data.imageSrc} title={data.title} description={data.description} />
                        </a>
                    );
                })}
            </div>
        </section>
    );
}
