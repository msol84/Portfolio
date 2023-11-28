import { anchorsInfo } from "../../js/data/navAnchors"
import { NavAnchors } from "./NavAnchors"
import { DarkModeButton } from "./DarkModeButton"
import '../../styles/Nav/navMenu.css'
export const NavMenu = () => {

    const anchrosCreator = anchorsInfo.map((anchor) => (
        <li key={`listItem${anchor.name}`}>
            <NavAnchors key={anchor.url} name={anchor.name} url={anchor.url} />
        </li>
    ))

    return (

        <nav>
            <menu>
                {anchrosCreator}
                <DarkModeButton />
            </menu>
        </nav>
    )

}