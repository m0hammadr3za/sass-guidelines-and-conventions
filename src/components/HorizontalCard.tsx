import CoverImage from "./CoverImage";
import CardInfo from "./CardInfo";
import "../styles/HorizontalCard.scss";

interface HorizontalCardInterface {
    imageSrc: string;
    title: string;
    description: string;
    hideInfoOnLarge: boolean;
}

export default function HorizontalCard(props: HorizontalCardInterface) {
    const { imageSrc, title, description, hideInfoOnLarge } = props;

    return (
        <div className="horizontal-card">
            <div className="horizontal-card__image">
                <CoverImage src={imageSrc} alt={title} />
            </div>
            <div className={`horizontal-card__info ${hideInfoOnLarge ? "horizontal-card__info--hide-on-large" : ""}`}>
                <CardInfo title={title} description={description} />
            </div>
        </div>
    );
}
