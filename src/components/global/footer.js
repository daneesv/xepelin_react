import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Social from "./social";
import Logo from "./logo";

class Footer extends Component{
    render(){
        return(
            <div id="footer">
                <div className="footer-content">
                    <div className="footer-grid">
                        <div className="footer-column-1">
                            <Logo section="footer" />
                            <div className="footer-description">Soñamos con un mercado en donde no existan barreras de entradas para el financiamiento de las pymes en Latinoamérica. </div>
                        </div>
                        <div className="footer-column-2">
                            <div className="footer-column-3">
                                <div className="footer-column-4">
                                    <div className="footer-title">Soluciones</div>
                                    <NavLink to="/soluciones/financiamiento-directo" className="footer-link" activeClassName="footer-link-on">Financiamiento directo</NavLink><br/>
                                    <NavLink to="/soluciones/pronto-pago" className="footer-link" activeClassName="footer-link-on">Pronto pago</NavLink><br/>
                                    <NavLink to="/soluciones/credito-de-capital" className="footer-link" activeClassName="footer-link-on">Crédito de capital</NavLink><br/>
                                    <NavLink to="/soluciones/confirming" className="footer-link" activeClassName="footer-link-on">Confirming</NavLink>
                                </div>
                                <div className="footer-column-4">
                                    <div className="footer-title">Explorar</div>
                                    <NavLink to="/sobre-nosotros" className="footer-link" activeClassName="footer-link-on">Sobre nosotros</NavLink><br/>
                                    <NavLink to="/testimonios" className="footer-link" activeClassName="footer-link-on">Testimonios</NavLink><br/>
                                    <NavLink to="/noticias" className="footer-link" activeClassName="footer-link-on">Noticias</NavLink><br/>
                                    <NavLink to="/blog" className="footer-link" activeClassName="footer-link-on">Blog</NavLink>
                                </div>
                            </div>
                            <div className="footer-column-5">
                                <div className="footer-title">Síguenos</div>
                                <Social section="footer" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-content footer-content-copy">
                    <div className="footer-copy">
                        <div className="footer-divisor"></div>
                        <div className="footer-copy-text"><strong>© 2021 Xepelin</strong> Con amor para las pymes</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;