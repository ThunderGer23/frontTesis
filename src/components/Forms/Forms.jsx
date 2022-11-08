import {Boton} from '../Boton/Boton'
import { Enlace } from '../Enlace/Enlace'
import { Inpt } from '../Inpt/Inpt';

export const Forms =()=>{
    return (
        <>
        <div>
            <form action="" className="bt-4">
                <Inpt cNameDiv="input-group mb-4" cNameSpan="input-group-text" IdSpan="basic-addon1" cNameI="fa-regular fa-user" Stle={{color:'white'}} ITyp="text" cNameInput="form-control" PHolder="usuario:" Ar_Lbl="Username" Ar_Desc="basic-addon1"/>

                <Inpt cNameDiv="input-group mb-4" cNameSpan="input-group-text" IdSpan="basic-addon2" cNameI="fa-regular fa-at" Stle={{color:'white'}} ITyp="email" cNameInput="form-control" PHolder="email:" Ar_Lbl="Username" Ar_Desc="basic-addon2"/>
            </form>
        </div>
        <Boton texto="Siguiente"/>
        <Enlace cName="text-center pt-1 mb-1" texto="Registrarse"/>
        <Enlace cName="d-flex align-items-center justify-content-center" texto="¿Olvido su contraseña?"/>
    </>
    );
};