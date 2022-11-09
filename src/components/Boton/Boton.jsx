export const Boton = (props) =>{
    return(
        <>
        <div className={props.cName}>
            <button className={props.cNameButton} type={props.Tpe}>
                <i className={props.cNameI}></i>
                {props.texto}
            </button>
        </div>
        </>
    )
}

export const BotonPass = (props) =>{
    return (
        <>
        <div className={props.cName}>
            <button className={props.cNameButton} type={props.Tpe} data-bs-toggle={props.DatB_Toggle} data-bs-target={props.DatB_Target}>
                <i className={props.cNameI}></i>
                {props.texto}
            </button>
        </div>
        </>
    )
}