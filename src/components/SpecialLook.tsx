import SectionTitle from "./SectionTitle";
import HorizontalCard from "./HorizontalCard";
import specialFirstImage from "../assets/special-first.jpg";
import specialSecondImage from "../assets/special-second.jpg";
import specialThirdImage from "../assets/special-third.jpg";
import "../styles/SpecialLook.scss";

export default function SpecialLook() {
    const horizontalCards = [
        {
            id: 1,
            imageSrc: specialFirstImage,
            title: "Fighting For A Future, Ready For What Destiny Brings",
            description: "Maecenas Convallis Dictum Efficitur",
        },
        {
            id: 2,
            imageSrc: specialSecondImage,
            title: "Circle Of Trust, Begining Of A New Era Is Here",
            description: "Integer Ipsum Nulla Fringilla Sed",
        },
        {
            id: 3,
            imageSrc: specialThirdImage,
            title: "Fate Of A Warrior, Fighting Against Impossible Odds",
            description: "Pellentesque Habitant Morbi Tristique",
        },
    ];

    return (
        <section className="special-look">
            <div className="special-look__title">
                <SectionTitle title="Path of a warrior" description="Moving forward no matter what happens" />
            </div>
            <div className="special-look__cards-container">
                {horizontalCards.map((data) => {
                    // Show card info only for first card in large screens
                    return (
                        <a className="special-look__card" href="/#" key={data.id}>
                            <HorizontalCard
                                imageSrc={data.imageSrc}
                                title={data.title}
                                description={data.description}
                                hideInfoOnLarge={!(data.id === 1)}
                            />
                        </a>
                    );
                })}
            </div>
        </section>
    );
}
