export const Imagen = (props) => {
    return(
        <>
        <div className={props.cName}>
            <img className="logo" src={props.direction} alt="" style={{width:'7rem'}}/>
        </div>
        </>
    );
}