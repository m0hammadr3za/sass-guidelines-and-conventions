import CoverImage from "./CoverImage";
import "../styles/PrimaryCard.scss";

interface PrimaryCardInterface {
    imageSrc: string;
    title: string;
    description: string;
}

export default function PrimaryCard(props: PrimaryCardInterface) {
    const { imageSrc, title, description } = props;

    return (
        <div className="primary-card">
            <div className="primary-card__image">
                <CoverImage src={imageSrc} alt={title} />
            </div>
            <div className="primary-card__shade" />
            <div className="primary-card__info">
                <h1 className="primary-card__title">{title}</h1>
                <p className="primary-card__description">{description}</p>
            </div>
        </div>
    );
}
