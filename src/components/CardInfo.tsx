import "../styles/CardInfo.scss";

interface CardInfoInterface {
    title: string;
    description: string;
}

export default function CardInfo(props: CardInfoInterface) {
    const { title, description } = props;

    return (
        <div className="card-info">
            <h1 className="card-info__title">{title}</h1>
            <p className="card-info__description">{description}</p>
        </div>
    );
}
