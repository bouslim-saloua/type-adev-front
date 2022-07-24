import React from "react";

class Footer extends React.Component{
    render(){
        return(
<footer id="footer" className="bg-one">
  <div className="top-footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-3 col-md-3 col-lg-3">
          <h3>about</h3>
          <p>Integer posuere erat a ante venenati dapibus posuere velit aliquet. Fusce dapibus, tellus cursus commodo, tortor mauris sed posuere.</p>
        </div>
        

        <div className="col-sm-3 col-md-3 col-lg-3">
          <ul>
            <li><h3>Our Services</h3></li>
            <li><a>Graphic Design</a></li>
            <li><a>Web Design</a></li>
            <li><a>Web Development</a></li>
          </ul>
        </div>
        

        <div className="col-sm-3 col-md-3 col-lg-3">
          <ul>
            <li><h3>Quick Links</h3></li>
            <li><a href="">Partners</a></li>
            <li><a href="">About</a></li>
            <li><a href="">FAQ’s</a></li>
            <li><a href="">Badges</a></li>
          </ul>
        </div>
       

        <div className="col-sm-3 col-md-3 col-lg-3">
          <ul>
            <li><h3>Connect with us Socially</h3></li>
            <li><a href="">Facebook</a></li>
            <li><a href="">Twitter</a></li>
            <li><a href="">Youtube</a></li>
            <li><a href="">Pinterest</a></li>
          </ul>
        </div>
       

      </div>
    </div> 
  </div>
  <div className="footer-bottom">
    <h5>Copyright 2016. All rights reserved.</h5>
    
  </div>
</footer> 


   
       
        );
    }
}

export default Footer;