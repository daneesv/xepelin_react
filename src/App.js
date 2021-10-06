import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/global/header";
import Footer from "./components/global/footer";
import Home from "./components/home/home";
import Solutions from "./components/solutions/solutions";
import About from "./components/about/about";
import Resources from "./components/resources/resources";
import Jobs from "./components/jobs/jobs";
import Start from "./components/start/start";
import Testimonials from "./components/testimonials/testimonials";
import News from "./components/news/news";
import Blog from "./components/blog/blog";
import Direct from "./components/solutions/direct";
import Pronto from "./components/solutions/pronto";
import Credit from "./components/solutions/credit";
import Confirming from "./components/solutions/confirming";
import Modal from "./components/global/modal";
import ScrollToTop from "./components/global/scrolltotop";
import "./style.css";

class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <ScrollToTop>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/soluciones" component={Solutions} />
                        <Route path="/sobre-nosotros" component={About} />
                        <Route path="/recursos" component={Resources} />
                        <Route path="/job-board" component={Jobs} />
                        <Route path="/empezar" component={Start} />
                        <Route path="/testimonios" component={Testimonials} />
                        <Route path="/noticias" component={News} />
                        <Route path="/blog" component={Blog} />
                        <Route path="/soluciones/financiamiento-directo" component={Direct} />
                        <Route path="/soluciones/pronto-pago" component={Pronto} />
                        <Route path="/soluciones/credito-de-capital" component={Credit} />
                        <Route path="/soluciones/confirming" component={Confirming} />
                    </Switch>
                    <Footer />
                    <Modal />
                </ScrollToTop>
            </BrowserRouter>
        )
    }
}

window.addEventListener("load",function(){

    //Global variables
    var mobileDisplay;
    var modalDisplay;
    
    //Detect touch (mouse hover event)
    var isTouch=false;
    var isTouchTimer;
    var touchClass="";

    //Touch events on Safari
    document.addEventListener("touchstart",function(){},true);

    //Detect touch input
    document.addEventListener("touchstart",function(event){
        clearTimeout(isTouchTimer);
        isTouch=true;
        if(touchClass!=="touch"){
            touchClass="touch";
            document.body.className="touch";
        }
        isTouchTimer=setTimeout(function(){isTouch=false},2000);
    },false);

    //Detect all inputs (touch, mouse, trackpad)
    document.addEventListener("mouseover",function(event){
        if(!isTouch && touchClass==="touch"){
            isTouch=false;
            touchClass="";
            document.body.className="";
        }
    },false);

    //Service worker
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("sw.js",{
            scope:"."
        }).then(function(registration){
            //Registration was successful
        },function(err){
            //Registration failed
        });
    }

},false);

export default App;