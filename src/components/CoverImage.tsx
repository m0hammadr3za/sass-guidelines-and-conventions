import "../styles/CoverImage.scss";

interface CoverImageInterface {
    src: string;
    alt: string;
}

export default function CoverImage({ src, alt }: CoverImageInterface) {
    return (
        <div className="cover-image">
            <img src={src} alt={alt} />
        </div>
    );
}
