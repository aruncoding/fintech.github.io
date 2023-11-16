import React, { useState } from "react";
import Popup from "../Popmodal.js";

const getServiceVaue = [
    {
        "id": 1,
        "title": "GST",
        "content": `The Goods and Services Tax is a 
        successor to VAT used in India on the supply of 
        goods and services. GST is a digitalized form of 
        VAT where you can also track the goods & services.`
    },
    {
        "id": 2,
        "title": "BookKeeper",
        "content": `Someone whose job is keeping an exact record 
        of the money that has been spent or received by a 
        business or other organization`
    },
    {
        "id": 3,
        "title": "ITR Filling",
        "content": `Income Tax Return (ITR) is a form that an individual 
        submits to the Income Tax Department of India to file information 
        about his income and taxes payable during that year`
    },
]


function Servicesection(){

    const [popup, setPopup] = useState(false);

    const [servicedata, setServicedata] = useState(null);

	const openpopup = () => {
		setPopup(true);
	}

	const closepopup = () => {
		setPopup(false)
	}

    return(
        <>
            <div className="section sec-services">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-5 mx-auto text-center">
                            <h2 className="heading text-primary">Our Services</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                        </div>
                    </div>

                    <div className="row">

                        {
                            getServiceVaue.map((object, i)=> {
                                return (
                                    
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-4" key={i}>

                                        <div className="service text-center">
                                            <span className="bi-cash-coin"></span>
                                            <div>
                                                <h3>{object.title}</h3>
                                                <p className="mb-4">{object.content}</p>
                                                <p><button class="btn btn-primary" onClick={() => {setServicedata(object);openpopup()}}>Click Me: {object.id}</button></p>
                                            </div>
                                        </div>

                                    </div>
                                  )
                            })
                        }
                        {/* <div className="col-12 col-sm-6 col-md-6 col-lg-4">

                            <div className="service text-center">
                                <span className="bi-cash-coin"></span>
                                <div>
                                    <h3>Faster payments</h3>
                                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                                    <p><button class="btn btn-primary">Read more</button></p>
                                </div>
                            </div>

                        </div>

                        <div className="col-12 col-sm-6 col-md-6 col-lg-4" data-aos-delay="100">
                            <div className="service text-center">
                                <span className="bi-chat-text"></span>
                                <div>
                                    <h3>Grow your business</h3>
                                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                                    <p><button class="btn btn-primary">Read more</button></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-6 col-lg-4" data-aos-delay="200">
                            <div className="service text-center">
                                <span className="bi-fingerprint"></span>
                                <div>
                                    <h3>Investments</h3>
                                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                                    <p><button class="btn btn-primary">Read more</button></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-6 col-lg-4" data-aos-delay="100">

                            <div className="service text-center">
                                <span className="bi-gear"></span>
                                <div>
                                    <h3>Payment & Cards</h3>
                                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                                    <p><button class="btn btn-primary">Read more</button></p>
                                </div>
                            </div>

                        </div>

                        <div className="col-12 col-sm-6 col-md-6 col-lg-4" data-aos-delay="200">
                            <div className="service text-center">
                                <span className="bi-graph-up-arrow"></span>
                                <div>
                                    <h3>Strategic Finance</h3>
                                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                                    <p><button class="btn btn-primary">Read more</button></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-6 col-lg-4" data-aos-delay="300">
                            <div className="service text-center">
                                <span className="bi-layers"></span>
                                <div>
                                    <h3>Digital Currency</h3>
                                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                                    <p><button class="btn btn-primary">Read more</button></p>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>
            {popup ? <Popup show={popup} hide={closepopup} service={servicedata} /> : null}
        </>
    )

}

export default Servicesection