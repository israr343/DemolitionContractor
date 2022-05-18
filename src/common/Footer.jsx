import React, { Component } from 'react';

class Footer extends Component {
    render(){
        return(
            <div>
                <footer id="footer" class="footer bg-overlay">
    <div class="footer-main">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-4 col-md-6 footer-widget footer-about">
            <h3 class="widget-title">About Us</h3>
            <h4 class="text-primary">Building Demolition</h4>
            {/* <img loading="lazy" width="200px" class="footer-logo" src="images/footer-logo.png" alt="Constra" /> */}
            <p>We demolish different kinds of buildings, villas, houses, resthouses, pumps, Schools,
            Hospitals and all kinds of Government and private Building</p>
            <div class="footer-social">
              <ul>
                <li><a href="" aria-label="Facebook"><i
                      class="fab fa-facebook-f"></i></a></li>
                <li><a href="" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                </li>
                <li><a href="" aria-label="Instagram"><i
                      class="fab fa-instagram"></i></a></li>
                <li><a  href="https://api.whatsapp.com/send?phone=+97455490613&text=%20%2020%" aria-label="Github"><i class="fab fa-whatsapp"></i></a></li>
              </ul>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 footer-widget mt-5 mt-md-0">
            <h3 class="widget-title">Working Hours</h3>
            <div class="working-hours">
              We work 7 days a week, every day excluding major holidays. Contact us if you have an emergency, with our
              Hotline and Contact form.
              <br/><br /> Monday - Friday: <span class="text-right">08:00 - 16:00 </span>
              <br /> Saturday: <span class="text-right">08:00 - 15:00</span>
              <br /> Sunday and holidays: <span class="text-right">09:00 - 12:00</span>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-5 mt-lg-0 footer-widget">
            <h3 class="widget-title">Services</h3>
            <ul class="list-arrow">
              <li><a href="">Building Demolition</a></li>
              <li><a href="">Villas Demolition</a></li>
              <li><a href="">Duilding Waste disposal</a></li>
              <li><a href="">resthouses Demolition</a></li>
              <li><a href="">Demolish Homes</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

        <div id="back-to-top" data-spy="affix" data-offset-top="10" class="back-to-top position-fixed">
          <button class="btn btn-primary" title="Back to Top">
            <i class="fa fa-angle-double-up"></i>
          </button>
        </div>
  </footer>
            </div>
        )
    }
}

export default Footer;