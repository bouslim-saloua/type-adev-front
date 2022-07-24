import React,{Component} from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

class Postuler extends React.Component{
render(){
    return(

<div>
    


     <NavBar/>
  

<section className="single-page-header">
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<h2>POSTULER POUR UNE MANIFESTATION, STAGE OU UNE MISSION</h2>
				<ol className="breadcrumb header-bradcrumb">
				  <li><Link to="/">Acceuil</Link></li>
				  <li className="active">Postuler</li>
				</ol>
			</div>
		</div>
	</div>
</section>

 
<section className="contact-us" id="contact">
	<div className="container">
		<div className="row">
			
			
			<div className="col-12">
			<div className="title text-center" >
				<h2>Postuler</h2>
				
				<div className="border"></div>
			</div>
			</div>
            </div>
            </div>
            </section>

<section className="apply-now" id="apply">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 align-self-center">
          <div className="row">
            <div className="col-lg-12">
              <div className="card" >
              {/*<h3></h3>*/ }  
                <div className="card-header">
                POSTULER POUR UNE MANIFESTATION SCIENTIFIQUE
  </div>
                <p>Etant un enseignant chercheur ou un doctorant, l'université Cady Ayyad vous présente la possibilité de bénificier d'un soutien pour une manifestation scientifique.</p>
                <div className="main-button-red">
                  <Link to="/manifestation"> <button type="button" className="btn btn-outline-primary btn-lg">Postuler maintenant!</button></Link>
              </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">POSTULER POUR UNE MISSION OU UN STAGE</div>
                <p>Etant un enseignant chercheur ou un doctorant, l'université Cady Ayyad vous présente la possibilité de bénificier d'un soutien pour une mission ou un stage!</p>
                <div className="main-button-yellow">
                 <Link to="/mission"><button type="button" className="btn btn-outline-primary btn-lg">Postuler Maintenant!</button></Link> 
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="accordions is-first-expanded">
            <article className="accordion">
                <div className="accordion-head">
                    <span>About Edu Meeting HTML Template</span>
                    <span className="icon">
                        <i className="icon fa fa-chevron-right"></i>
                    </span>
                </div>
                <div className="accordion-body">
                    <div className="content">
                        <p>If you want to get the latest collection of HTML CSS templates for your websites, you may visit <a rel="nofollow" href="https://www.toocss.com/" target="_blank">Too CSS website</a>. If you need a working contact form script, please visit <a href="https://templatemo.com/contact" target="_parent">our contact page</a> for more info.</p>
                    </div>
                </div>
            </article>
            <article className="accordion">
                <div className="accordion-head">
                    <span>HTML CSS Bootstrap Layout</span>
                    <span className="icon">
                        <i className="icon fa fa-chevron-right"></i>
                    </span>
                </div>
                <div className="accordion-body">
                    <div className="content">
                        <p>Etiam posuere metus orci, vel consectetur elit imperdiet eu. Cras ipsum magna, maximus at semper sit amet, eleifend eget neque. Nunc facilisis quam purus, sed vulputate augue interdum vitae. Aliquam a elit massa.<br/><br/>
                        Nulla malesuada elit lacus, ac ultricies massa varius sed. Etiam eu metus eget nibh consequat aliquet. Proin fringilla, quam at euismod porttitor, odio odio tempus ligula, ut feugiat ex erat nec mauris. Donec viverra velit eget lectus sollicitudin tincidunt.</p>
                    </div>
                </div>
            </article>
            <article className="accordion">
                <div className="accordion-head">
                    <span>Please tell your friends</span>
                    <span className="icon">
                        <i className="icon fa fa-chevron-right"></i>
                    </span>
                </div>
                <div className="accordion-body">
                    <div className="content">
                        <p>Ut vehicula mauris est, sed sodales justo rhoncus eu. Morbi porttitor quam velit, at ullamcorper justo suscipit sit amet. Quisque at suscipit mi, non efficitur velit.<br/><br/>
                        Cras et tortor semper, placerat eros sit amet, porta est. Mauris porttitor sapien et quam volutpat luctus. Nullam sodales ipsum ac neque ultricies varius.</p>
                    </div>
                </div>
            </article>
            <article className="accordion last-accordion">
                <div className="accordion-head">
                    <span>Share this to your colleagues</span>
                    <span className="icon">
                        <i className="icon fa fa-chevron-right"></i>
                    </span>
                </div>
                <div className="accordion-body">
                    <div className="content">
                        <p>Maecenas suscipit enim libero, vel lobortis justo condimentum id. Interdum et malesuada fames ac ante ipsum primis in faucibus.<br/><br/>
                        Sed eleifend metus sit amet magna tristique, posuere laoreet arcu semper. Nulla pellentesque ut tortor sit amet maximus. In eu libero ullamcorper, semper nisi quis, convallis nisi.</p>
                    </div>
                </div>
            </article>
        </div>
        </div>
      </div>
    </div>
  </section>
<Footer/>
</div>

    );
}
}

export default Postuler;