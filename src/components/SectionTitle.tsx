import "../styles/SectionTitle.scss";

interface SectionTitleInterface {
    title: string;
    description: string;
}

export default function SectionTitle(props: SectionTitleInterface) {
    const { title, description } = props;

    return (
        <div className="section-title">
            <h1 className="section-title__primary">{title}</h1>
            <p className="section-title__secondary">{description}</p>
        </div>
    );
}
