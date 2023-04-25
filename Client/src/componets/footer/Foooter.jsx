import React from 'react'
import './Footer.css'

function Foooter() {
    return (
        <>

            <footer className="bg-secondary py-5">
                <div className="container">
                    <div className="row text-white g-4">
                        <div className="col-md-6 col-lg-3">
                            <a
                                className="text-uppercase text-decoration-none brand text-white"
                                href="index.html"
                            >
                                Menscart
                            </a>
                            <p className="text-white text-muted mt-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                                mollitia quisquam veniam odit cupiditate, ullam aut voluptas velit
                                dolor ipsam?
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <h5 className="fw-light">Links</h5>
                            <ul className="list-unstyled">
                                <li className="my-3">
                                    <a href="#" className="text-white text-decoration-none text-muted">
                                        <i className="fas fa-chevron-right me-1" /> Home
                                    </a>
                                </li>
                                <li className="my-3">
                                    <a href="#" className="text-white text-decoration-none text-muted">
                                        <i className="fas fa-chevron-right me-1" /> Collection
                                    </a>
                                </li>
                                <li className="my-3">
                                    <a href="#" className="text-white text-decoration-none text-muted">
                                        <i className="fas fa-chevron-right me-1" /> Special
                                    </a>
                                </li>
                                <li className="my-3">
                                    <a href="#" className="text-white text-decoration-none text-muted">
                                        <i className="fas fa-chevron-right me-1" /> About Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <h5 className="fw-light mb-3">Contact Us</h5>
                            <div className="d-flex justify-content-start align-items-start my-2 text-muted">
                                <span className="me-3">
                                    <i className="fas fa-map-marked-alt" />
                                </span>
                                <span className="fw-light">
                                    Calicut-02, 679003, Kerala, India
                                </span>
                            </div>
                            <div className="d-flex justify-content-start align-items-start my-2 text-muted">
                                <span className="me-3">
                                    <i className="fas fa-envelope" />
                                </span>
                                <span className="fw-light">menscart.support@gmail.com</span>
                            </div>
                            <div className="d-flex justify-content-start align-items-start my-2 text-muted">
                                <span className="me-3">
                                    <i className="fas fa-phone-alt" />
                                </span>
                                <span className="fw-light">+91 940088004</span>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <h5 className="fw-light mb-3">Follow Us</h5>
                            <div>
                                <ul className="list-unstyled d-flex">
                                    <li>
                                        <a
                                            href="#"
                                            className="text-white text-decoration-none text-muted fs-4 me-4"
                                        >
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-white text-decoration-none text-muted fs-4 me-4"
                                        >
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-white text-decoration-none text-muted fs-4 me-4"
                                        >
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-white text-decoration-none text-muted fs-4 me-4"
                                        >
                                            <i className="fab fa-pinterest" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    )
}

export default Foooter