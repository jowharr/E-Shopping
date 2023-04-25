import React from 'react'
import './SpecialProducts.css'

function SpecialProducts() {
  return (
    <>

<section id="special" className="py-5">
  <div className="container">
    <div className="title text-center py-5">
      <h2 className="position-relative d-inline-block">Special Selection</h2>
    </div>
    <div className="special-list row g-0">
      <div className="col-md-6 col-lg-4 col-xl-3 p-2">
        <div className="special-img position-relative overflow-hidden">
          <img src="./images/men-fasion/austin-wade-AoYT0ArTTmg-unsplash.jpg" className="w-100" />
          <span className="position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
            <i className="fas fa-heart" />
          </span>
        </div>
        <div className="text-center">
          <p className="text-capitalize mt-3 mb-1">gray shirt</p>
          <span className="fw-bold d-block">₹ 450</span>
          <a href="#" className="btn btn-primary mt-3">
            Add to Cart
          </a>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 col-xl-3 p-2">
        <div className="special-img position-relative overflow-hidden">
          <img src="./images/men-fasion/austin-wade-d2s8NQ6WD24-unsplash.jpg" className="w-100" />
          <span className="position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
            <i className="fas fa-heart" />
          </span>
        </div>
        <div className="text-center">
          <p className="text-capitalize mt-3 mb-1">gray shirt</p>
          <span className="fw-bold d-block">₹ 450</span>
          <a href="#" className="btn btn-primary mt-3">
            Add to Cart
          </a>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 col-xl-3 p-2">
        <div className="special-img position-relative overflow-hidden">
          <img src="./images/men-fasion/last.jpg" className="w-100" />
          <span className="position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
            <i className="fas fa-heart" />
          </span>
        </div>
        <div className="text-center">
          <p className="text-capitalize mt-3 mb-1">gray shirt</p>
          <span className="fw-bold d-block">₹ 450</span>
          <a href="#" className="btn btn-primary mt-3">
            Add to Cart
          </a>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 col-xl-3 p-2">
        <div className="special-img position-relative overflow-hidden">
          <img src="./images/men-fasion/mohamad-khosravi-d54wbtjedog-unsplash.jpg" className="w-100" />
          <span className="position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
            <i className="fas fa-heart" />
          </span>
        </div>
        <div className="text-center">
          <p className="text-capitalize mt-3 mb-1">gray shirt</p>
          <span className="fw-bold d-block">₹ 45.50</span>
          <a href="#" className="btn btn-primary mt-3">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default SpecialProducts