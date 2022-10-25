export const Boton = (props) =>{
    return(
        <>
        <button className="btn btn-light" type="button">
            <i className="fa fa-right-to-bracket orange"></i>
            {props.texto}
        </button>
        </>
    )
}