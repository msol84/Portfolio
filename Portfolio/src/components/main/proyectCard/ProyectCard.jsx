import '../../../styles/Main/proyectCard/proyectCard.css'
export const ProyectCard = ({ proyectName, proyectDescription, details }) => {

    return (

        <figure className='prc-figure'>
            <img src="" alt="" />
            <div>
                <h3>{proyectName}</h3>
                <p>{proyectDescription}</p>
                <summary>
                    <details>{details}</details>
                </summary>
            </div>
        </figure>

    )

}