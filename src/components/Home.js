import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import UserService from "../services/user.service";
class Home extends React.Component{
/*	constructor(props) {
		super(props);
		this.state = {
		  content: ""
		};
	  }
	  componentDidMount() {
		UserService.getPublicContent().then(
		  response => {
			this.setState({
			  content: response.data
			});
		  },
		  error => {
			this.setState({
			  content:
				(error.response && error.response.data) ||
				error.message ||
				error.toString()
			});
		  }
		);
	  }*/
	
  render(){
    return(
<div>
{/*<h3>{this.state.content}</h3>*/}
<NavBar/>

 <section class="hero-area">
 	<div class="container">
 		<div class="row">
 			<div class="col-md-12">
 				<div class="block">
 					<h1 class="wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".3s">SOUTIEN TYPE A <br/> MOBILITÉ DES CHERCHEURS</h1>
 					<p class="wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".5s">UCA:  Vous présente un soutien de type A reservé aux Enseignants Chercheurs et aux Doctorants
 					</p>
 					<ul class="list-inline wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".7s">
 						<li class="list-inline-item">
 							
							 <Link to="/postuler"><button type="button" class="btn btn-primary btn-lg">Postuler</button></Link>
 						</li>
 						<li class="list-inline-item">
 							
							 <button type="button" class="btn btn-outline-light btn-lg">Plus d'informations</button>
 						</li>
 					</ul>
 				</div>
 			</div>
 		</div>
 	</div>
 </section>


	
<section class="about" id="about">
	<div class="container">
		<div class="row">
		
			
			<div class="title text-center"  >
				<h2>About Us</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa placeat voluptas tempore recusandae quasi nesciunt in, facilis animi. Sint, possimus?</p>
				<div class="border"></div>
			</div>
			

			<div class="col-md-6">
				<img src="./assets/images/about-us.jpg" class="img-fluid" alt=""/>
			</div>
			<div class="col-md-6">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a tempor eros. Pellentesque elementum nulla sed justo tempor posuere sit amet sit amet ligula. Curabitur felis nibh, imperdiet eu erat non, luctus cursus lectus. Donec maximus diam leo, sed fringilla nisl auctor eget. Donec dictum neque est, ac faucibus ex blandit a.</p>
				<p>Curabitur felis nibh, imperdiet eu erat non, luctus cursus lectus. Donec maximus diam leo, sed fringilla nisl auctor eget. Donec dictum neque est, ac faucibus ex blandit a</p>
				<h4>Lorem ipsum dolor sit.</h4>
				<ul class="feature-list">
					<li> <i class="tf-ion-android-checkmark-circle"></i> Web Development</li>
					<li> <i class="tf-ion-android-checkmark-circle"></i> Application Development</li>
					<li> <i class="tf-ion-android-checkmark-circle"></i> Website Design</li>
					<li> <i class="tf-ion-android-checkmark-circle"></i> UI/UX Design</li>
					<li> <i class="tf-ion-android-checkmark-circle"></i> SEO Service</li>
				</ul>
				<a href="#" class="btn btn-main mt-20">Learn More</a>
			</div>
		</div> 		
	</div>   	
</section>   
	
<section class="call-to-action-2 section">
	<div class="container">
		<div class="row">
			<div class="col-md-12 text-center">
				<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a tempor eros. Pellentesque elementum nulla sed justo tempor posuere sit amet sit amet ligula.</h2>
			</div>
		</div> 		
	</div>   	
</section>   
	

<section class="services" id="services">
	<div class="container">
		<div class="row no-gutters">
			
			<div class="col-12">
				<div class="title text-center">
					<h2>Our Services</h2>
					<p>Vestibulum nisl tortor, consectetur quis imperdiet bibendum, laoreet sed arcu. Sed condimentum iaculis ex,
						in faucibus lorem accumsan non. Donec mattis tincidunt metus. Morbi sed tortor a risus luctus dignissim.</p>
					<div class="border"></div>
				</div>
			</div>
			

			<div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
				<div class="service-block p-4 color-bg text-center">
					<div class="service-icon text-center">
						<i class="tf-ion-ios-copy-outline"></i>
					</div>
					<h3>WordPress Theme</h3>
					<p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam
						iaculis arcu at mauris dapibus consectetur.</p>
				</div>
			</div>
			

			<div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
				<div class="service-block p-4 text-center">
					<div class="service-icon text-center">
						<i class="tf-ion-ios-alarm-outline"></i>
					</div>
					<h3>Responsive Design</h3>
					<p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam
						iaculis arcu at mauris dapibus consectetur.</p>
				</div>
			</div>
			

			<div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
				<div class="service-block p-4 color-bg text-center">
					<div class="service-icon text-center">
						<i class="tf-ion-ios-book-outline"></i>
					</div>
					<h3>Media &amp; Advertisement</h3>
					<p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam
						iaculis arcu at mauris dapibus consectetur.</p>
				</div>
			</div>
			

			<div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
				<div class="service-block p-4  text-center">
					<div class="service-icon text-center">
						<i class="tf-ion-ios-briefcase-outline"></i>
					</div>
					<h3>Graphic Design</h3>
					<p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam
						iaculis arcu at mauris dapibus consectetur.</p>
				</div>
			</div>
			


			<div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
				<div class="service-block p-4 color-bg text-center">
					<div class="service-icon text-center">
						<i class="tf-ion-ios-crop"></i>
					</div>
					<h3>Apps Development</h3>
					<p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam
						iaculis arcu at mauris dapibus consectetur.</p>
				</div>
			</div>
			

			<div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
				<div class="service-block p-4 text-center">
					<div class="service-icon text-center">
						<i class="tf-ion-ios-home-outline"></i>
					</div>
					<h3>Networking</h3>
					<p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam
						iaculis arcu at mauris dapibus consectetur.</p>
				</div>
			</div>
			
		</div> 
	</div> 
</section>
	
<section class="call-to-action section">
	<div class="container">
		<div class="row">
			<div class="col-md-12 text-center">
				<h2>Let's Create Something Together</h2>
				<p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicudin bibendum auctor, <br/> nisi elit consequat ipsum, nesagittis sem nid elit. Duis sed odio sitain elit.</p>
				<a href="" class="btn btn-main">Contact Us</a>
			</div>
		</div> 		
	</div>   	
</section>   
	

<section class="team-skills section-sm" id="skills">
	<div class="container">
		<div class="row">

			
			<div class="col-12">
				<div class="title text-center">
					<h2>Our Skills</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus fugiat, vel veniam, eos et
						delectus eveniet molestiae. Esse, voluptas ratione.</p>
					<div class="border"></div>
				</div>
			</div>
		

			<div class="col-md-5">
				<div class="team-skills-content">
					<h2>Simple To Start</h2>
					<p>Vestibulum nisl tortor, consectetur quis imperdiet bium, letcu. Sedndime ntumiaculis ex, in
						faucibus lorem accumsan non. Donec mattis tin unt metuorbi sed tort Igor aman luctus dignissim.
						Vestibulum nisl tortor, consectetur quis imperdiet bium, letcu. Sedndime ntumiaculis ex, in
						faucibus lorem accumsan non.</p>
					<a href="" class="btn btn-main mt-20">Contact Us</a>
				</div>
			</div>
			<div class="col-md-6 col-md-offset-1">
				<div class="progress-block">
					<ul>
						<li>
							<span>Photoshop</span>
							<div class="progress">
								<div class="progress-bar" style={{width: "90%"}}>
								</div>
							</div>
						</li>
						<li>
							<span>Web Application</span>
							<div class="progress">
								<div class="progress-bar" style={{width: "85%"}}>
								</div>
							</div>
						</li>
						<li>
							<span>Andriod Application</span>
							<div class="progress">
								<div class="progress-bar" style={{width:"92%"}}>
								</div>
							</div>
						</li>
						<li>
							<span>IOS Development</span>
							<div class="progress">
								<div class="progress-bar" style={{width: "78%"}}>
								</div>
							</div>
						</li>
					</ul>

				</div>
			</div>
		</div> 
		<div class="row">
			<div class="col-md-12">
				<div id="clients-slider" class="clients-logo-slider">
					<img src="./assets/images/client-logo/logo1.png" alt=""/>
					<img src="./assets/images/client-logo/logo-2.png" alt=""/>
					<img src="./assets/images/client-logo/logo-3.png" alt=""/>
					<img src="./assets/images/client-logo/logo-4.png" alt=""/>
					<img src="./assets/images/client-logo/logo-5.png" alt=""/>
					<img src="./assets/images/client-logo/logo1.png" alt=""/>
					<img src="./assets/images/client-logo/logo-2.png" alt=""/>
					<img src="./assets/images/client-logo/logo-3.png" alt=""/>
					<img src="./assets/images/client-logo/logo-4.png" alt=""/>
					<img src="./assets/images/client-logo/logo-5.png" alt=""/>
				</div>

			</div>
		</div>
	</div> 
</section> 
	
		
		<section  class="counter-wrapper section-sm" >
			<div class="container">
				<div class="row">
					<div class="col-md-12 text-center">
						<div class="title">
							<h2>Award-Winning Agency</h2>
							<p>Vestibulum nisl tortor, consectetur quis imperdiet bibendum, laoreet sed arcu. Sed condimentum iaculis ex, in faucibus lorem accumsan non. Donec mattis tincidunt metus. Morbi sed tortor a risus luctus dignissim.</p>
						</div>
					</div>
				
					<div class="col-md-3 col-sm-6 col-xs-6 text-center " >
						<div class="counters-item">
							<i class="tf-ion-ios-alarm-outline"></i>
							<div>
							    <span class="counter" data-count="150">0</span>
							</div>
							<h3>Happy Clients</h3>
						</div>
					</div>
					

					<div class="col-md-3 col-sm-6 col-xs-6 text-center " >
						<div class="counters-item">
							<i class="tf-ion-ios-analytics-outline"></i>
							<div>
							    <span class="counter" data-count="130">0</span>
							</div>
							<h3>Projects completed</h3>
						</div>
					</div>
					

					<div class="col-md-3 col-sm-6 col-xs-6 text-center "  >
						<div class="counters-item">
							<i class="tf-ion-ios-compose-outline"></i>
							<div>
							    <span class="counter" data-count="99">0</span>
							</div>
				            <h3>Positive feedback</h3>
							
						</div>
					</div>
					

					<div class="col-md-3 col-sm-6 col-xs-6 text-center ">
						<div class="counters-item kill-border">
							<i class="tf-ion-ios-bolt-outline"></i>
							<div>
							    <span class="counter" data-count="250">0</span>
							</div>
							<h3>Cups of Coffee</h3>
						</div>
					</div>
					
				</div> 		
			</div>   	
		</section>   


<section class="portfolio section-sm" id="portfolio">
	<div class="container-fluid">
		<div class="row ">
			<div class="col-lg-12">

				
				<div class="title text-center">
					<h2>Our Works</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, veritatis. Lorem ipsum dolor sit amet,
						consectetur adipisicing elit. Minima, vitae? </p>
					<div class="border"></div>
				</div>
				

				<div class="portfolio-filter">
					<button type="button" data-filter="all">All</button>
					<button type="button" data-filter="photography">Photography</button>
					<button type="button" data-filter="ios">IOS App</button>
					<button type="button" data-filter="development">Development</button>
					<button type="button" data-filter="design">Design</button>
				</div>

				<div class="row filtr-container">
					<div class="col-md-3 col-sm-6 col-xs-6 filtr-item " data-category="mix, design">
						<div class="portfolio-block">
							<img class="img-fluid" src="./assets/images/portfolio/portfolio-1.jpg" alt=""/>
							<div class="caption">
								<a class="search-icon" href="./assets/images/portfolio/portfolio-1.jpg" data-lightbox="image-1">
									<i class="tf-ion-ios-search-strong"></i>
								</a>
								<h4><a href="">AirBnB Postcard</a></h4>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-sm-6 col-xs-6 filtr-item " data-category="mix, design, ios">
						<div class="portfolio-block">
							<img class="img-fluid" src="./assets/images/portfolio/portfolio-2.jpg" alt=""/>
							<div class="caption">
								<a class="search-icon" href="./assets/images/portfolio/portfolio-2.jpg" data-lightbox="image-1">
									<i class="tf-ion-ios-search-strong"></i>
								</a>
								<h4><a href="">AirBnB Postcard</a></h4>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-sm-6 col-xs-6 filtr-item " data-category="mix, photography, development">
						<div class="portfolio-block">
							<img class="img-fluid" src="./assets/images/portfolio/portfolio-3.jpg" alt=""/>
							<div class="caption">
								<a class="search-icon" href="./assets/images/portfolio/portfolio-3.jpg" data-lightbox="image-1">
									<i class="tf-ion-ios-search-strong"></i>
								</a>
								<h4><a href="">AirBnB Postcard</a></h4>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-sm-6 col-xs-6 filtr-item " data-category="mix, photography, ios">
						<div class="portfolio-block">
							<img class="img-fluid" src="./assets/images/portfolio/portfolio-4.jpg" alt=""/>
							<div class="caption">
								<a class="search-icon" href="./assets/images/portfolio/portfolio-4.jpg" data-lightbox="image-1">
									<i class="tf-ion-ios-search-strong"></i>
								</a>
								<h4><a href="">AirBnB Postcard</a></h4>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-sm-6 col-xs-6 filtr-item " data-category="mix, design">
						<div class="portfolio-block">
							<img class="img-fluid" src="./assets/images/portfolio/portfolio-5.jpg" alt=""/>
							<div class="caption">
								<a class="search-icon" href="./assets/images/portfolio/portfolio-5.jpg" data-lightbox="image-1">
									<i class="tf-ion-ios-search-strong"></i>
								</a>
								<h4><a href="">AirBnB Postcard</a></h4>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-sm-6 col-xs-6 filtr-item " data-category="mix, design, development">
						<div class="portfolio-block">
							<img class="img-fluid" src="./assets/images/portfolio/portfolio-6.jpg" alt=""/>
							<div class="caption">
								<a class="search-icon" href="./assets/images/portfolio/portfolio-6.jpg" data-lightbox="image-1">
									<i class="tf-ion-ios-search-strong"></i>
								</a>
								<h4><a href="">AirBnB Postcard</a></h4>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-sm-6 col-xs-6 filtr-item " data-category="mix, photography">
						<div class="portfolio-block">
							<img class="img-fluid" src="./assets/images/portfolio/portfolio-7.jpg" alt=""/>
							<div class="caption">
								<a class="search-icon" href="./assets/images/portfolio/portfolio-7.jpg" data-lightbox="image-1">
									<i class="tf-ion-ios-search-strong"></i>
								</a>
								<h4><a href="">AirBnB Postcard</a></h4>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-sm-6 col-xs-6 filtr-item " data-category="mix, design, development">
						<div class="portfolio-block">
							<img class="img-fluid" src="./assets/images/portfolio/portfolio-1.jpg" alt=""/>
							<div class="caption">
								<a class="search-icon" href="./assets/images/portfolio/portfolio-1.jpg" data-lightbox="image-1">
									<i class="tf-ion-ios-search-strong"></i>
								</a>
								<h4><a href="">AirBnB Postcard</a></h4>
							</div>
						</div>
					</div>
				</div>
			</div> 
		</div>
	</div> 
</section> 
	
<section class="team" id="team">
	<div class="container">
		<div class="row">

			
			<div class="col-12">
				<div class="title text-center ">
					<h2>Our Team</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quasi tempora obcaecati, quis
						similique quos.</p>
					<div class="border"></div>
				</div>
			</div>
			

			<div class="col-md-4 col-sm-6 ">
				<div class="team-member text-center">
					<div class="member-photo">
						
						<img class="img-fluid" src="./assets/images/team/member-1.jpg" alt="Meghna"/>
						
						<div class="mask">
							<ul class="clearfix">
								<li><a href="#"><i class="tf-ion-social-facebook"></i></a></li>
								<li><a href="#"><i class="tf-ion-social-twitter"></i></a></li>
								<li><a href="#"><i class="tf-ion-social-google-outline"></i></a></li>
								<li><a href="#"><i class="tf-ion-social-dribbble"></i></a></li>
							</ul>
						</div>
						
					</div>

				
					<div class="member-content">
						<h3>Michael Jonson</h3>
						<span>Head Of Marketing</span>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus ullam, culpa odio.</p>
					</div>
					

				</div>
			</div>
			
			

			<div class="col-md-4 col-sm-6 ">
				<div class="team-member text-center">
					<div class="member-photo">
						
						<img class="img-fluid" src="./assets/images/team/member-2.jpg" alt="Meghna"/>
						

						<div class="mask">
							<ul class="clearfix">
								<li><a href="#"><i class="tf-ion-social-facebook"></i></a></li>
								<li><a href="#"><i class="tf-ion-social-twitter"></i></a></li>
								<li><a href="#"><i class="tf-ion-social-google-outline"></i></a></li>
								<li><a href="#"><i class="tf-ion-social-dribbble"></i></a></li>
							</ul>
						</div>
						
					</div>

					
					<div class="member-content">
						<h3>Carrick Mollenkamp</h3>
						<span>Web Developer</span>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus ullam, culpa odio.</p>
					</div>
					
				</div>
			</div>
			
			<div class="col-md-4 col-sm-6 ">
				<div class="team-member text-center">
					<div class="member-photo">
						
						<img class="img-fluid" src="./assets/images/team/member-3.jpg" alt="Meghna"/>
						

						<div class="mask">
							<ul class="clearfix">
								<li><a href="#"><i class="tf-ion-social-facebook"></i></a></li>
								<li><a href="#"><i class="tf-ion-social-twitter"></i></a></li>
								<li><a href="#"><i class="tf-ion-social-google-outline"></i></a></li>
								<li><a href="#"><i class="tf-ion-social-dribbble"></i></a></li>
							</ul>
						</div>
						
					</div>

					
					<div class="member-content">
						<h3>David Gauthier</h3>
						<span>Head Of Management</span>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus ullam, culpa odio.</p>
					</div>
					

				</div>
			</div>
			
		</div> 
	</div> 
</section> 
	
<section class="pricing-table " id="pricing">
	<div class="container">
		<div class="row">

			
			<div class="col-12">
				<div class="title title-white text-center ">
					<h2>Our Greatest Plans</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium soluta deserunt eaque, est, quia hic
						odit sed incidunt officiis quidem.</p>
					<div class="border"></div>
				</div>
			</div>
			
			<div class="col-md-4 col-sm-6 col-xs-12">
				<div class="pricing-item">

					
					<div class="price-title">
						<h3>Basic</h3>
						<strong class="value">$19</strong>
						<p>Perfect for single freelancers who work by themselves</p>
					</div>
					
					<ul>
						<li><i class="tf-ion-ios-arrow-forward"></i> 1GB Disk Space</li>
						<li><i class="tf-ion-ios-arrow-forward"></i> 10 Email Account</li>
						<li><i class="tf-ion-ios-arrow-forward"></i> Script Installer</li>
						<li><i class="tf-ion-ios-arrow-forward"></i> 1 GB Storage</li>
						<li><i class="tf-ion-ios-arrow-forward"></i> 2 GB Bandwidth</li>
						<li><i class="tf-ion-ios-arrow-forward"></i> 24/7 Tech Support</li>
					</ul>
					
					<a class="btn btn-main" href="#">Signup</a>
					

				</div>
			</div>
			
			<div class="col-md-4 col-sm-6 col-xs-12  ">
				<div class="pricing-item">

				
					<div class="price-title">
						<h3>Standard</h3>
						<strong class="value">$39</strong>
						<p>Suitable for small businesses with up to 5 employees</p>
					</div>
					
					<ul>
						<li><i class="tf-ion-ios-arrow-forward"></i> 1GB Disk Space</li>
						<li><i class="tf-ion-ios-arrow-forward"></i> 50 Email Account</li>
						<li><i class="tf-ion-ios-arrow-forward"></i> Script Installer</li>
						<li><i class="tf-ion-ios-arrow-forward"></i> 1 GB Storage</li>
						<li><i class="tf-ion-ios-arrow-forward"></i> 10 GB Bandwidth</li>
						<li><i class="tf-ion-ios-arrow-forward"></i> 24/7 Tech Support</li>
					</ul>
					
					<a class="btn btn-main" href="#">Signup</a>
					

				</div>
			</div>
			

			<div class="col-md-4 col-sm-6 col-xs-12 ">
				<div class="pricing-item">

					
					<div class="price-title">
						<h3>Enterprise</h3>
						<strong class="value">$59</strong>
						<p>Great for large businesses with more than 5 employees</p>
					</div>
					
					<ul>
						<li><i class="tf-ion-ios-arrow-forward"></i> Unlimited Disk Space</li>
						<li><i class="tf-ion-ios-arrow-forward"></i> Unlimited Email Account</li>
						<li><i class="tf-ion-ios-arrow-forward"></i> Script Installer</li>
						<li><i class="tf-ion-ios-arrow-forward"></i> Unlimited Storage</li>
						<li><i class="tf-ion-ios-arrow-forward"></i> Unlimited Bandwidth</li>
						<li><i class="tf-ion-ios-arrow-forward"></i> 24/7 Tech Support</li>
					</ul>
					

					
					<a class="btn btn-main" href="#">Signup</a>
					

				</div>
			</div>
			


		</div> 
	</div> 
</section> 

		
	<section class="testimonial section" id="testimonial">
		<div class="container">
			<div class="row">				
				<div class="col-lg-12">
					
					<div class="testimonial-slider">
						
						<div class="item text-center">
							<i class="tf-ion-chatbubbles"></i>
							
							<div class="client-details">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nulla, soluta dolorum. Eos earum, magni asperiores, unde corporis labore, enim, voluptatum officiis voluptates alias natus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, quia?</p>
							</div>
							
							<div class="client-thumb">
								<img src="./assets/images/client-logo/clients-1.jpg" class="img-fluid" alt=""/>
							</div>
							<div class="client-meta">
								<h3>William Martin</h3>
								<span>CEO , Company Name</span>
							</div>
							
						</div>
						

						<div class="item text-center">
							<i class="tf-ion-chatbubbles"></i>
							
							<div class="client-details">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nulla, soluta dolorum. Eos earum, magni asperiores, unde corporis labore, enim, voluptatum officiis voluptates alias natus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, quia?</p>
							</div>
							
							<div class="client-thumb">
								<img src="./assets/images/client-logo/clients-2.jpg" class="img-fluid" alt=""/>
							</div>
							<div class="client-meta">
								<h3>Emma Harrison</h3>
								<span>CEO , Company Name</span>
							</div>
							
						</div>
						
					
						
						<div class="item text-center">
							<i class="tf-ion-chatbubbles"></i>
							<div class="client-details">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nulla, soluta dolorum. Eos earum, magni asperiores, unde corporis labore, enim, voluptatum officiis voluptates alias natus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, quia?</p>
							</div>
							
							<div class="client-thumb">
								<img src="./assets/images/client-logo/clients-3.jpg" class="img-fluid" alt="" />
							</div>
							<div class="client-meta">
								<h3>Alexander Lucas</h3>
								<span>CEO , Company Name</span>
							</div>
							
						</div>
						
					</div>
				</div> 		
			</div>	   
		</div>       
	</section>    


<section class="blog" id="blog">
	<div class="container">
		<div class="row">

			
			<div class="col-12">
				<div class="title text-center ">
					<h2> Latest <span class="color">Posts</span></h2>
					<div class="border"></div>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus facere accusamus, reprehenderit libero
						inventore nam.</p>
				</div>
			</div>
			
			<article class="col-md-4 col-sm-6 col-xs-12 clearfix ">
				<div class="post-item">
					<div class="media-wrapper">
						<img src="./assets/images/blog/post-1.jpg" alt="amazing caves coverimage" class="img-fluid" />
					</div>

					<div class="content">
						<h3><a href="single-post.html">Reasons to Smile</a></h3>
						<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
							moon officia aute, non skateboard dolor brunch.</p>
						<a class="btn btn-main" href="single-post.html">Read more</a>
					</div>
				</div>
			</article>
			

			<article class="col-md-4 col-sm-6 col-xs-12 ">
				<div class="post-item">
					<div class="media-wrapper">
						<img src="./assets/images/blog/post-2.jpg" alt="amazing caves coverimage" class="img-fluid" />
					</div>

					<div class="content">
						<h3><a href="single-post.html">A Few Moments</a></h3>
						<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
							moon officia aute, non skateboard dolor brunch.</p>
						<a class="btn btn-main" href="single-post.html">Read more</a>
					</div>
				</div>
			</article>
			

			<article class="col-md-4 col-sm-6 col-xs-12 ">
				<div class="post-item">
					<div class="media-wrapper">
						<img src="./assets/images/blog/post-3.jpg" alt="amazing caves coverimage" class="img-fluid"/>
					</div>

					<div class="content">
						<h3><a href="single-post.html">Hints for Life</a></h3>
						<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
							moon officia aute, non skateboard dolor brunch.</p>
						<a class="btn btn-main" href="single-post.html">Read more</a>
					</div>
				</div>
			</article>
			
		</div> 
	</div>
</section> 
<section class="contact-us" id="contact">
	<div class="container">
		<div class="row">
			
			
			<div class="col-12">
			<div class="title text-center" >
				<h2>Get In Touch</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate facilis eveniet maiores ab maxime nam ut numquam molestiae quaerat incidunt?</p>
				<div class="border"></div>
			</div>
			</div>
			
			<div class="contact-details col-md-6 " >
				<h3>Contact Details</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, vero, provident, eum eligendi blanditiis ex explicabo vitae nostrum facilis asperiores dolorem illo officiis ratione vel fugiat dicta laboriosam labore adipisci.</p>
				<ul class="contact-short-info" >
					<li>
						<i class="tf-ion-ios-home"></i>
						<span>Khaja Road, Bayzid, Chittagong, Bangladesh</span>
					</li>
					<li>
						<i class="tf-ion-android-phone-portrait"></i>
						<span>Phone: +880-31-000-000</span>
					</li>
					<li>
						<i class="tf-ion-android-globe"></i>
						<span>Fax: +880-31-000-000</span>
					</li>
					<li>
						<i class="tf-ion-android-mail"></i>
						<span>Email: hello@meghna.com</span>
					</li>
				</ul>
				
				<div class="social-icon">
					<ul>
						<li><a href="#"><i class="tf-ion-social-facebook"></i></a></li>
						<li><a href="#"><i class="tf-ion-social-twitter"></i></a></li>
						<li><a href="#"><i class="tf-ion-social-dribbble-outline"></i></a></li>
						<li><a href="#"><i class="tf-ion-social-linkedin-outline"></i></a></li>
					</ul>
				</div>
				
			</div>
			
			<div class="contact-form col-md-6 " >
				<form id="contact-form" method="post" role="form">
					<div class="form-group">
						<input type="text" placeholder="Your Name" class="form-control" name="name" id="name"/>
					</div>
					
					<div class="form-group">
						<input type="email" placeholder="Your Email" class="form-control" name="email" id="email"/>
					</div>
					
					<div class="form-group">
						<input type="text" placeholder="Subject" class="form-control" name="subject" id="subject" />
					</div>
					
					<div class="form-group">
						<textarea rows="6" placeholder="Message" class="form-control" name="message" id="message"></textarea>	
					</div>
					
					<div id="success" class="success">
						Thank you. The Mailman is on His Way :)
					</div>
					
					<div id="error" class="error">
						Sorry, don't know what happened. Try later :(
					</div>
					<div id="cf-submit">
						<input type="submit" id="contact-submit" class="btn btn-transparent" value="Submit"/>
					</div>						
					
				</form>
			</div>
		
		</div> 
	</div> 
</section> 



<Footer/>

</div>

    );
    
  }
}
export default Home;