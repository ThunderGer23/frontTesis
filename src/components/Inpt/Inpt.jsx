export const Inpt = (props) => {
    return (
        <>
        <div className={props.cNameDiv}>
            <span className={props.cNameSpan} id={props.IdSpan}>
                <i className={props.cNameI} style={props.Stle}></i>
            </span>
            <input type={props.ITyp} className={props.cNameInput} placeholder={props.PHolder} aria-label={props.Ar_Lbl} aria-describedby={props.Ar_Desc}/>
        </div>
        </>
    )
}