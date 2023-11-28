import { useState } from "react"
import { Light, Dark } from "../../assets/DarkModeSVG"
export const DarkModeButton = () => {

    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        document.documentElement.classList.toggle('dark')
    }

    const Icon = darkMode ? Light : Dark

    return (
        <button key="darkModeButton" onClick={toggleDarkMode} className="dm-button">{Icon()}</button>
    )

}