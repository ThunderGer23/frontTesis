export const CardBody = (props) => {
    return(
        <>
        <div className={props.cName}>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
        </>
    );
}