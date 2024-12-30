export function Logo({img, title }) {
    return (
        <a className="navbar-brand" href="/">
            <img src={img} alt={title} className="logo" />
        </a>
    );
}