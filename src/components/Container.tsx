import "../styles/Container.scss";

export default function Container(props: any) {
    return <div className="container">{props.children}</div>;
}
