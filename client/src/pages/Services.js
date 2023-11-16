import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Paymentsection from "./smallsection/Paymentsection";
import Servicesection from "./smallsection/Servicesection";
import { Link } from "react-router-dom";

function Services(){
    return(
        <>
            <Navbar />
            <div class="hero overlay inner-page">
                <img src="assets/images/blob.svg" alt="" class="img-fluid blob" />
                <div class="container">
                    <div class="row align-items-center justify-content-center text-center pt-5">
                        <div class="col-lg-6">
                            <h1 class="heading text-white mb-3">Our Services</h1>
                        </div>
                    </div>
                </div>
	        </div>

            <Servicesection />



            <div class="section sec-cta overlay" style={{backgroundImage: 'url(assets/images/img-3.jpg)'}}>
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-lg-5" data-aos-delay="0">
                            <h2 class="heading">Wanna Talk To Us?</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                        </div>
                        <div class="col-lg-5 text-end" data-aos-delay="100">
                            {/* <a href="#" class="btn btn-outline-white-reverse">Contact us</a> */}
                            <Link className="btn btn-outline-white-reverse" to="/contact">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>




            <Paymentsection />
            <Footer />

            {/* <Helmet>
                <script src="assets/js/bootstrap.bundle.min.js"></script>
                <script src="assets/js/tiny-slider.js"></script>

                <script src="assets/js/flatpickr.min.js"></script>


                <script src="assets/js/aos.js"></script>
                <script src="assets/js/glightbox.min.js"></script>
                <script src="assets/js/navbar.js"></script>
                <script src="assets/js/custom.js"></script>
	        </Helmet> */}
        </>
    )
}

export default  Services;