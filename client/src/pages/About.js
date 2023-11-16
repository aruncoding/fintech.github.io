import React from "react";
import Footer from "./Footer";
import Paymentsection from "./smallsection/Paymentsection";

function About(){
    return(
        <>
            <div class="hero overlay inner-page">
		<img src="assets/images/blob.svg" alt="" class="img-fluid blob" />
		<div class="container">
			<div class="row align-items-center justify-content-center text-center pt-5">
				<div class="col-lg-6">
					<h1 class="heading text-white mb-3">About Us</h1>
				</div>
			</div>
		</div>
	</div>

	<div class="section sec-halfs py-0">
		<div class="half-content d-lg-flex align-items-stretch">
			<div class="img" style={{backgroundImage: 'url(assets/images/img-1.jpg)'}} data-aos-delay="100">
				
			</div>
			<div class="text">
				<h2 class="heading text-primary mb-3">We are trusted by more than 5,000 clients</h2>
				<p class="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
				<p><a href="#" class="btn btn-outline-primary py-2">Read more</a></p>
			</div>
		</div>

		<div class="half-content d-lg-flex align-items-stretch">
			<div class="img order-md-2" style={{backgroundImage: 'url(assets/images/img-3.jpg)'}}>
				
			</div>
			<div class="text">
				<h2 class="heading text-primary mb-3">We are trusted by more than 5,000 clients</h2>
				<p class="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
				<p><a href="#" class="btn btn-outline-primary py-2">Read more</a></p>
			</div>
		</div>

	</div>

	<div class="section sec-features">
		<div class="container">
			<div class="row g-5">
				<div class="col-12 col-sm-6 col-md-6 col-lg-4" data-aos-delay="0">
					<div class="feature d-flex">
						<span class="bi-bag-check-fill"></span>
						<div>
							<h3>Build financial</h3>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
						</div>
					</div>
				</div>
				<div class="col-12 col-sm-6 col-md-6 col-lg-4" data-aos-delay="100">
					<div class="feature d-flex">
						<span class="bi-wallet-fill"></span>
						<div>
							<h3>Invest for the future</h3>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
						</div>
					</div>
				</div>
				<div class="col-12 col-sm-6 col-md-6 col-lg-4" data-aos-delay="200">
					<div class="feature d-flex">
						<span class="bi-pie-chart-fill"></span>
						<div>
							<h3>Responsible banking</h3>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	
	<div class="section">
		<div class="container">
			
			<div class="row mb-5">
				<div class="col-lg-5 mx-auto text-center">
					<h2 class="heading text-primary">Our Team</h2>
					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-4 mb-4 text-center" data-aos-delay="0">
					<img src="assets/images/person_1.jpg" alt="Image" class="img-fluid w-50 rounded-circle mb-3" />
					<h5 class="text-black">James Griffin</h5>
					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
				</div>
				<div class="col-lg-4 mb-4 text-center" data-aos-delay="100">
					<img src="assets/images/person_2.jpg" alt="Image" class="img-fluid w-50 rounded-circle mb-3" />
					<h5 class="text-black">Claire Smith</h5>
					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
				</div>
				<div class="col-lg-4 mb-4 text-center" data-aos-delay="200">
					<img src="assets/images/person_3.jpg" alt="Image" class="img-fluid w-50 rounded-circle mb-3" />
					<h5 class="text-black">Jessica Wilson</h5>
					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
				</div>

				<div class="col-lg-4 mb-4 text-center" data-aos-delay="0">
					<img src="assets/images/person_4.jpg" alt="Image" class="img-fluid w-50 rounded-circle mb-3" />
					<h5 class="text-black">William Anderson</h5>
					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
				</div>
				<div class="col-lg-4 mb-4 text-center" data-aos-delay="100">
					<img src="assets/images/person_5.jpg" alt="Image" class="img-fluid w-50 rounded-circle mb-3" />
					<h5 class="text-black">Julie Harvey</h5>
					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
				</div>
				<div class="col-lg-4 mb-4 text-center" data-aos-delay="200">
					<img src="assets/images/person_2.jpg" alt="Image" class="img-fluid w-50 rounded-circle mb-3" />
					<h5 class="text-black">Shana Clarkson</h5>
					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
				</div>
			</div>

		</div>
	</div>



	<Paymentsection />

    <Footer />
        </>
    )
}

export default  About;