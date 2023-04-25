import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './StyleCollection.css'

function Collection() {

  const [state, setState] = useState()
  const Navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:8000/product/products-view").then((res) => {
      setState(res.data.data)
    })
  }, [])
  console.log(state);

  const productView = (id) => {
    console.log("bjhjbhj", id);
          Navigate(`/product-preview/${id}`)
  }

  return (
    <>

      <section id="collection" className="py-5">
        <div className="container">
          <div className="title text-center">
            <h2 className="position-relative d-inline-block">New Collection</h2>
          </div>
          <div className="row g-0">
            <div className="d-flex flex-wrap justify-content-center mt-5 filter-button-group">
              <button
                type="button"
                className="btn m-2 text-dark active-filter-btn"
                data-filter="*"
              >
                All
              </button>
              <button type="button" className="btn m-2 text-dark" data-filter=".best">
                Best Sellers
              </button>
              <button type="button" className="btn m-2 text-dark" data-filter=".feat">
                Featured
              </button>
              <button type="button" className="btn m-2 text-dark" data-filter=".new">
                New Arrival
              </button>
            </div>
            <div className="collection-list mt-4 row gx-0 gy-3">

              {state && state.map((item) => 

                <div onClick={()=>productView(item._id)} className="col-md-6 col-lg-4 col-xl-3 p-2 best">

                  <div className="collection-img position-relative">
                    <img src={`./images/upload/${item?.Image}`} className="w-100" />
                    <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                      sale
                    </span>
                  </div>
                  <div className="text-center">
                    <div className="rating mt-3">
                      <span className="text-primary">
                        <i className="fas fa-star" />
                      </span>
                      <span className="text-primary">
                        <i className="fas fa-star" />
                      </span>
                      <span className="text-primary">
                        <i className="fas fa-star" />
                      </span>
                      <span className="text-primary">
                        <i className="fas fa-star" />
                      </span>
                      <span className="text-primary">
                        <i className="fas fa-star" />
                      </span>
                    </div>
                    <p className="text-capitalize my-1">{item?.Product}</p>
                    <span className="fw-bold">₹ {item?.Price}</span>
                  </div>

                </div>
            )} 

            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default Collection