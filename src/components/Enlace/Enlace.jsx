export const Enlace = (props) =>{
    return (
        <>
            <div className={props.cName}>
                <p><a className="">{props.texto}</a></p>
            </div>
        </>
    );
}

export const EnlaceH = (props) =>{
    return (
        <>
            <div className={props.cName}>
                <h3><a href={props.hrf}>{props.texto}</a></h3>
            </div>
        </>
    );
}