import CoverImage from "./CoverImage";
import limitedFirstImage from "../assets/limited-first.jpg";
import limitedSecondImage from "../assets/limited-second.jpg";
import limitedThirdImage from "../assets/limited-third.jpg";
import limitedFourthImage from "../assets/limited-fourth.jpg";
import limitedFifthImage from "../assets/limited-fifth.jpg";
import "../styles/LimitedEdition.scss";

export default function LimitedEdition() {
    const wallpaperImages = [
        { id: 1, imageSrc: limitedFirstImage },
        { id: 2, imageSrc: limitedSecondImage },
        { id: 3, imageSrc: limitedThirdImage },
        { id: 4, imageSrc: limitedFourthImage },
        { id: 5, imageSrc: limitedFifthImage },
    ];

    return (
        <section className="limited-edition">
            <div className="limited-edition__title-container">
                <h1 className="limited-edition__primary-title">
                    The phoenix <br className="limited-edition__title-break" />
                    on the frozen forest
                </h1>

                <p className="limited-edition__secondary-title">
                    Donec Libero Ante, Tempus In Leo Id, Porttitor Pellentesque Nisl. Mauris Urna Eros, Lacinia Iaculis Facilisis Id,
                    Tincidunt Eu Leo. Porttitor Purus Eleifend In.
                </p>
            </div>

            <div className="limited-edition__wallapers-container">
                {wallpaperImages.map((data) => {
                    return (
                        <a className="limited-edition__wallpaper" href="/#" key={data.id}>
                            <CoverImage src={data.imageSrc} alt={`limited edition wallpaper ${data.id}`} />
                        </a>
                    );
                })}
            </div>
        </section>
    );
}
