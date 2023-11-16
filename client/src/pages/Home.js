import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Paymentsection from "./smallsection/Paymentsection";
import Servicesection from "./smallsection/Servicesection";
import { Outlet, Link } from "react-router-dom";
import Popup from "./Popmodal.js";

function Home(){

	// const [popup, setPopup] = useState(false);

	// const openpopup = () => {
	// 	setPopup(true);
	// }

	// const closepopup = () => {
	// 	setPopup(false)
	// }

    return(
        <>
		<Navbar />
	<div className="hero overlay">
		<img src="assets/images/blob.svg" alt="" className="img-fluid blob" />
		<div className="container">
			<div className="row align-items-center justify-content-between pt-5">
				<div className="col-lg-6 text-center text-lg-start pe-lg-5">
					<h1 className="heading text-white mb-3" >Smart banking for financial freedom.</h1>
					<p className="text-white mb-5"  data-aos-delay="100">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
					<div className="align-items-center mb-5 mm"  data-aos-delay="200">
						{/* <a href="contact.html" className="btn btn-outline-white-reverse me-4">Contact us</a> */}
						<Link className="btn btn-outline-white-reverse me-4" to="/contact">Contact Us</Link>
						<a href="https://www.youtube.com/watch?v=Mb1zrW_zra4" className="text-white glightbox">Watch the video</a>
					</div>
				</div>
				<div className="col-lg-6" data-aos-delay="300">
					<div className="img-wrap">
						<img src="assets/images/img-1.jpg" alt="Image" className="img-fluid rounded" />
					</div>
				</div>
			</div>
		</div>
	</div>

	


	<Paymentsection />

	<div className="section sec-features">
		<div className="container">
			<div className="row g-5">
				<div className="col-12 col-sm-6 col-md-6 col-lg-4" data-aos-delay="0">
					<div className="feature d-flex">
						<span className="bi-bag-check-fill"></span>
						<div>
							<h3>Build financial</h3>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
						</div>
					</div>
				</div>
				<div className="col-12 col-sm-6 col-md-6 col-lg-4" data-aos-delay="100">
					<div className="feature d-flex">
						<span className="bi-wallet-fill"></span>
						<div>
							<h3>Invest for the future</h3>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
						</div>
					</div>
				</div>
				<div className="col-12 col-sm-6 col-md-6 col-lg-4" data-aos-delay="200">
					<div className="feature d-flex">
						<span className="bi-pie-chart-fill"></span>
						<div>
							<h3>Responsible banking</h3>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div className="section">
		<div className="container">
			<div className="row">
				<div className="col-lg-7 order-lg-2 mb-4 mb-lg-0">
					<img src="assets/images/img-1.jpg" alt="Image" className="img-fluid" />
				</div>
				<div className="col-lg-5 pe-lg-5">
					<div className="mb-5">
						<h2 className="text-black h4">Straight-forward way of financing</h2>
					</div>
					<div className="d-flex mb-3 service-alt">
						<div>
							<span className="bi-wallet-fill me-4"></span>
						</div>
						<div>
							<h3>Build financial</h3>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
						</div>
					</div>

					<div className="d-flex mb-3 service-alt">
						<div>
							<span className="bi-pie-chart-fill me-4"></span>
						</div>
						<div>
							<h3>Invest for the future</h3>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
						</div>
					</div>

					<div className="d-flex mb-3 service-alt">
						<div>
							<span className="bi-bag-check-fill me-4"></span>
						</div>
						<div>
							<h3>Responsible banking</h3>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>


	<Servicesection />


	<div className="section sec-cta overlay" style={{backgroundImage: 'url(assets/images/img-3.jpg)'}}>
		<div className="container">
			<div className="row justify-content-between align-items-center">
				<div className="col-lg-5" data-aos-delay="0">
					<h2 className="heading">Wanna Talk To Us?</h2>
					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
				</div>
				<div className="col-lg-5 text-end" data-aos-delay="100">
					<Link className="btn btn-outline-white-reverse" to="/contact">Contact Us</Link>
				</div>
			</div>
		</div>
	</div>


	<div className="section sec-news">
		<div className="container">
			<div className="row mb-5">
				<div className="col-lg-7">
					<h2 className="heading text-primary">Latest News</h2>
				</div>
			</div>

			<div className="row">
				
				<div className="col-lg-4">
					<div className="card post-entry">
						<a href="single.html"><img src="assets/images/img-1.jpg" className="card-img-top" alt="Image" /></a>
						<div className="card-body">
							<div><span className="text-uppercase font-weight-bold date">Jan 20, 2021</span></div>
							<h5 className="card-title"><a href="single.html">Behind the word mountains</a></h5>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
							<p className="mt-5 mb-0">
								<button class="btn btn-primary">Read more</button>
							</p>
							
						</div>
							
					</div>
				</div>

				<div className="col-lg-4">
					<div className="card post-entry">
						<a href="single.html"><img src="assets/images/img-2.jpg" className="card-img-top" alt="Image" /></a>
						<div className="card-body">
							<div><span className="text-uppercase font-weight-bold date">Jan 20, 2021</span></div>
							<h5 className="card-title"><a href="single.html">Behind the word mountains</a></h5>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
							<p className="mt-5 mb-0">
							
								<button class="btn btn-primary">Read more</button>
								
								</p>
								
						</div>
					</div>
				</div>

				<div className="col-lg-4">
					<div className="card post-entry">
						<a href="single.html"><img src="assets/images/img-3.jpg" className="card-img-top" alt="Image" /></a>
						<div className="card-body">
							<div><span className="text-uppercase font-weight-bold date">Jan 20, 2021</span></div>
							<h5 className="card-title"><a href="single.html">Behind the word mountains</a></h5>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
							<p className="mt-5 mb-0">
								<button class="btn btn-primary">Read more</button>
								
								</p>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
	
		<Footer />
        </>
    )
}

export default  Home;