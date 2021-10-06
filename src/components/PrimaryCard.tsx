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
            <img className="primary-card__image" src={imageSrc} alt="title" />
            <div className="primary-card__shade" />
            <div className="primary-card__info">
                <h1 className="primary-card__title">{title}</h1>
                <p className="primary-card__description">{description}</p>
            </div>
        </div>
    );
}
