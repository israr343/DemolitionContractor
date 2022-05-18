import React, { Component } from 'react';

class Header extends Component {
    render(){
        return(
          <div>
           
           <header id="header" class="header-one">
  <div class="navbar-dark p-0">
    <div class="container">
      <div class="logo-area">
          <div class="row align-items-center">
            <div class="logo col-lg-3 text-center text-lg-left mb-3 mb-md-5 mb-lg-0">
                <a class="d-block" href="index.html">
                  <h3 class="text-white">Demolition Contractor</h3>
                </a>
            </div>
  
            <div class="col-lg-9 header-right">
                <ul class="top-info-box">
                  <li>
                    <div class="info-box">
                      <div class="info-box-content">
                          <p class="info-box-title text-white">Call Us</p>
                          <p class="info-box-subtitle"><a href="tel:(00974) 55490613"  class="text-white">55490613</a></p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="info-box">
                      <div class="info-box-content">
                          <p class="info-box-title text-white">Email Us</p>
                          <p class="info-box-subtitle text-white"><a href="mailto:contractordemolition@gmail.com" class="text-white">contractordemolition@gmail.com</a></p>
                      </div>
                    </div>
                  </li>
                  <li class="header-get-a-quote">
                    <a class="btn btn-success"  href="https://api.whatsapp.com/send?phone=+97455490613&text=%20%20" target="_blank">
                    <i
                      class="fab fa-whatsapp"></i>
                     WhatsApp</a>
                  </li>
                </ul>
            </div>
          </div>
  
      </div>
    </div>
  </div>

  {/* <div class="site-navigation">
    <div class="container">
        <div class="row">
          <div class="col-lg-12">
              <nav class="navbar navbar-expand-lg navbar-dark p-0">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div id="navbar-collapse" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav mr-auto">
                      <li class="nav-item dropdown active">
                          <a href="#home-section" class="nav-link dropdown-toggle" data-toggle="dropdown">Home </a>
                      </li>

                      <li class="nav-item dropdown">
                          <a href="home" class="nav-link dropdown-toggle" data-toggle="dropdown">About </a>
                      </li>
              
                      <li class="nav-item dropdown">
                          <a href="home" class="nav-link dropdown-toggle" data-toggle="dropdown">Teams </a>
                      </li>
              
                      <li class="nav-item dropdown">
                          <a href="home" class="nav-link dropdown-toggle" data-toggle="dropdown">Services </a>
                      </li>
              
                      <li class="nav-item dropdown">
                          <a href="home" class="nav-link dropdown-toggle" data-toggle="dropdown">Projects</a>
                          
                      </li>
                    </ul>
                </div>
              </nav>
          </div>
          
        </div>
        <div class="nav-search">
          <a href="tel:(00974) 55490613"><b>+974-55490613</b> <span id=""><i class="fa fa-phone"></i></span></a>
        </div>
        

    </div>
    

  </div> */}
  
          </header>
            </div>
        )
    }
}

export default Header;