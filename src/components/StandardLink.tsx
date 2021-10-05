import "../styles/StandardLink.scss";

interface StandardLinkInterface {
    href: string;
    text: string;
}

export default function StandardLink(props: StandardLinkInterface) {
    const { href, text } = props;

    return (
        <a className="standard-link" href={href}>
            {text}{" "}
            <span className="standard-link__icon">
                <span className="standard-link__icon-line standard-link__icon-line--first" />
                <span className="standard-link__icon-line standard-link__icon-line--second" />
            </span>
        </a>
    );
}
