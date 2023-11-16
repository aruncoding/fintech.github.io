import React from "react";

function Paymentsection(){
    return(
        <>
            <div className="section">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-7 mb-4 mb-lg-0">
                            <img src="assets/images/img-3.jpg" alt="Image" className="img-fluid rounded" />
                        </div>
                        <div className="col-lg-4 ps-lg-2">
                            <div className="mb-5">
                                <h2 className="text-black h4">Make payment fast and smooth.</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
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

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Paymentsection