import "../styles/StandardCard.scss";
import CardInfo from "./CardInfo";

interface StandardCardInterface {
    imageSrc: string;
    title: string;
    description: string;
}

export default function StandardCard(props: StandardCardInterface) {
    const { imageSrc, title, description } = props;

    return (
        <div className="standard-card">
            <img className="standard-card__image" src={imageSrc} alt={title} />
            <div className="standard-card__info">
                <CardInfo title={title} description={description} />
            </div>
        </div>
    );
}
