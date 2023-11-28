export const NavAnchors = ({ name, url }) => {

    return (
        <a href={`#${url}`} className="nav-anchor">{name}</a>
    )

}