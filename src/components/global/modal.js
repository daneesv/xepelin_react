import React, { Component, Fragment } from "react";
import CloseImg from "./../../assets/close-2.svg";

class Modal extends Component{

    closeModal(event){
        document.getElementById("modal-overlay").classList.remove("modal-overlay-show");
        document.getElementById("modal-overlay").classList.add("modal-overlay-hide");
        document.getElementById("modal-window").classList.remove("modal-window-show");
        document.getElementById("modal-window").classList.add("modal-window-hide");
        setTimeout(()=>{
            document.getElementById("modal").style.display="none";
            document.getElementById("modal-overlay").style.display="none";
        },300);
    }

    render(){
        return(
            <Fragment>
                <div id="modal-overlay" className="modal-overlay"></div>
                <div id="modal">
                    <div className="modal-block">
                        <div id="modal-window" className="modal-window">
                            <div className="form-title">Inicia tu solicitud</div>
                            <div className="form-text">Anticipa el cobro de tus facturas de forma rápida y segura. Accede al financiamiento con una solicitud 100% digital.</div>
                            <div className="form-grid">
                                <div><input type="text" className="form-box" placeholder="Nombre:" /></div>
                                <div><input type="text" className="form-box" placeholder="Apellido:" /></div>
                                <div><input type="text" className="form-box" placeholder="Número de teléfono:" /></div>
                                <div><input type="text" className="form-box" placeholder="Correo corporativo:" /></div>
                                <div><input type="text" className="form-box" placeholder="Nombre de la empresa:" /></div>
                                <div><input type="text" className="form-box" placeholder="RUT de la empresa:" /></div>
                            </div>
                            <input type="button" className="form-submit" value="Solicitar" onClick={this.closeModal} />
                            <div className="form-note">Tu privacidad es importante para nosotros. Consulta nuestro <strong>Aviso de Privacidad</strong> para conocer el compromiso de <strong>Xepelin</strong> con tus datos.</div>
                            <div className="modal-close" onClick={this.closeModal}><img alt="Cerrar" src={CloseImg} /></div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

}

export default Modal;