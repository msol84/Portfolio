import { ProyectCard } from "./proyectCard/ProyectCard"
import { proyectsCardInfo } from "../../js/data/proyectsCardInfo"
import '../../styles/Main/proyectCard/proyectGrid.css'
export const Proyects = () => {

    const cardContructor = proyectsCardInfo.map((proyect) => (
        <ProyectCard key={proyect.id} proyectName={proyect.name} proyectDescription={proyect.description} details={proyect.details} />
    ))

    return (

        <section id="projects">
            <header>
                <h2>Mis Proyectos</h2>
            </header>
            <article id="pr-grid">
                {cardContructor}
            </article>
        </section>

    )

}