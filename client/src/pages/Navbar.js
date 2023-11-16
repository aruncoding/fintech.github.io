import React from "react";
import { Outlet, Link } from "react-router-dom";

function Navbar(){
    return(
        <>
        <div className="site-mobile-menu site-navbar-target">
            <div className="site-mobile-menu-header">
                <div className="site-mobile-menu-close">
                    <span className="icofont-close js-menu-toggle"></span>
                </div>
            </div>
		    <div className="site-mobile-menu-body"></div>
	    </div>

	<nav className="site-nav">
		<div className="container">
			<div className="menu-bg-wrap">
				<div className="site-navigation">
					<div className="row g-0 align-items-center">
						<div className="col-2">
							{/* <a href="index.html" className="logo m-0 float-start">Financing<span className="text-primary">.</span></a> */}
							<Link to="/" className="logo m-0 float-start">Financing<span className="text-primary">.</span></Link>
						</div>
						<div className="col-8 text-center ">
							<ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu mx-auto">
								<li><Link to="/">Home</Link></li>
								{/* <li className="has-children">
									<a href="financing.html">Pages</a>
									<ul className="dropdown">
										<li><a href="financing.html">Financing</a></li>
										<li><a href="single.html">Blog Single</a></li>
										<li><a href="case-study.html">Case Study Detail</a></li>
										<li><a href="#">Menu One</a></li>
										<li><a href="#">Menu Two</a></li>
										<li className="has-children">
											<a href="#">Dropdown</a>
											<ul className="dropdown">
												<li><a href="#">Sub Menu One</a></li>
												<li><a href="#">Sub Menu Two</a></li>
												<li><a href="#">Sub Menu Three</a></li>
											</ul>
										</li>
									</ul>
								</li> */}
								<li><Link to="/about">About</Link></li>
								<li><Link to="/services">services</Link></li>
								<li><Link to="/contact">Contact</Link></li>
							</ul>
						</div>
						<div className="col-2 text-end">
							<a href="#" className="burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block d-lg-none light">
								<span></span>
							</a>

							<a href="#" className="call-us d-flex align-items-center">
								<span className="icon-phone"></span>
								<span>+91-9415986606</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</nav>

    <Outlet />
        </>
    )
}

export default  Navbar;