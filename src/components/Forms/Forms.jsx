export const Forms =()=>{
    return (
        <>
        <form action="" className="bt-4">
            <div className="input-group mb-4">
                <span className="input-group-text" id="basic-addon1">
                <i className="fa-regular fa-user" style={{color:'white'}}></i>
                </span>
                <input type="text" className="form-control" placeholder="usuario:" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-4">
                <span className="input-group-text" id="basic-addon2">
                    <i className="fa-regular fa-at" style={{color:'white'}}></i>
                </span>
                <input type="email" className="form-control" placeholder="email:" aria-label="Username" aria-describedby="basic-addon2"/>
            </div>
        </form>
    </>
    );
};