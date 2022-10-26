export const Imagenes = (props) =>{
    return(
        <>
            <li>
                <img className="img-fluid" width="140" src={props.direction} alt="" />
            </li>
        </>
    );
}