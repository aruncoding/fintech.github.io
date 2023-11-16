import React from "react";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import {Alert} from 'react-bootstrap';

function Contact(){

	const [value, setValue] = useState({
		name: "",
		email: "",
		phone:"",
		subject: "",
		message: ""
	});
	const [error,setError] = useState({});

	const [formerror, setFormError] = useState({
		status: false,
		msg: '',
		type: ''
	})

	const getValue = (e) =>{
		setValue({
			...value,
			[e.target.name]:  e.target.value
		})
	}

	const formSubmit = (e) => {
		e.preventDefault();
		// console.log("valuesss",value);
		const validationError = {}
		if(!value.name.trim()){
			validationError.name = "Name is Required"
		}

		if(!value.email.trim()){
			validationError.email = "Email is Required"
		}else if(!/\S+@\S+\.\S+/.test(value.email)){
			validationError.email = "Email is not Valid";
		}

		if(!value.phone.trim()){
			validationError.phone = "Phone Number is Required";
		}else if(value.phone.length < 10 ){
			validationError.phone = "Phone Number Should Be 10 Digits"
		}

		if(!value.subject){
			validationError.subject = "Subject is Required"
		}

		if(!value.message){
			validationError.message = "Message is Required"
		}

		setError(validationError);

		if(Object.keys(validationError).length === 0){
				setFormError({
					status: true,
					msg: 'Form Submitted SuccessFully',
					type: 'success'
				});
		}
	}

	useEffect(() => {
		if(formerror.status){
			const timer = setTimeout(() => {
				setFormError({
					status: false,
					msg: '',
					type: ''
				});
			}, 5000);
		}
	  }, [formerror.status]);

    return(
        <>
            <div className="hero overlay inner-page">
                <img src="assets/images/blob.svg" alt="" className="img-fluid blob" />
                <div className="container">
                    <div className="row align-items-center justify-content-center text-center pt-5">
                        <div className="col-lg-6">
                            <h1 className="heading text-white mb-3">Contact Us</h1>
                        </div>
                    </div>
                </div>
            </div>

	
			<div className="section">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 mb-5 mb-lg-0" data-aos-delay="100">
							<div className="contact-info">

								<div className="address mt-2">
									<i className="icon-room"></i>
									<h4 className="mb-2">Location:</h4>
									<p>83L/10A Sainik Colony, Nehru Park Dhoomanganj,<br /> Prayagraj 211001</p>
								</div>

								<div className="open-hours mt-4">
									<i className="icon-clock-o"></i>
									<h4 className="mb-2">Open Hours:</h4>
									<p>
										Sunday-Saturday:<br />
										09:00 AM - 21:00 PM
									</p>
								</div>

								<div className="email mt-4">
									<i className="icon-envelope"></i>
									<h4 className="mb-2">Email:</h4>
									<p>info@Untree.co</p>
								</div>

								<div className="phone mt-4">
									<i className="icon-phone"></i>
									<h4 className="mb-2">Call:</h4>
									<p>+91 9415986606</p>
								</div>

							</div>
						</div>
						<div className="col-lg-8" data-aos-delay="200">
							<form action="#" onSubmit={formSubmit}>
								<div className="row">
									<div className="col-6 mb-3">
										<input type="text" name="name" className="form-control" placeholder="Your Name" onChange={getValue} />
										{error.name && <span className="formmessage">{error.name}</span>}
									</div>
									<div className="col-6 mb-3">
										<input type="email" name="email" className="form-control" placeholder="Your Email" onChange={getValue} />
										{error.email && <span className="formmessage">{error.email}</span>}
									</div>
									<div className="col-12 mb-3">
										<input type="text" name="phone" className="form-control" placeholder="Phone Number" onChange={getValue} />
										{error.phone && <span className="formmessage">{error.phone}</span>}
									</div>
									<div className="col-12 mb-3">
										<input type="text" name="subject" className="form-control" placeholder="Subject" onChange={getValue} />
										{error.subject && <span className="formmessage">{error.subject}</span>}
									</div>
									<div className="col-12 mb-3">
										<textarea name="message" id="" cols="30" rows="7" className="form-control" placeholder="Message" onChange={getValue}></textarea>
										{error.message && <span className="formmessage">{error.message}</span>}
									</div>

									<div className="col-12 mb-3">
										<input type="submit" value="Send Message" className="btn btn-primary" />
									</div>

									<div className="col-12">
										{ formerror.status ?  <Alert variant={formerror.type}>{formerror.msg}</Alert> : '' }
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div> 

    <Footer />
        </>
    )
}

export default  Contact;