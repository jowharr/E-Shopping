import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import NavBar from '../../../../componets/nav-bar/NavBar'
import './ProductUpload.css'

function ProductUpload() {
    const [id, setId] = useState(JSON.parse(localStorage.getItem('id')) || [] )
    const [state, setState] = useState({
        loginid:id
    })


    const [file, setFile] = useState() // image file adding state

    const handleInputChanges = (e) => {
        
        const { name, value } = e.target
        setState({
            ...state, [name]: value
        })
    }

    console.log(state);
    

    const uploadImage = (e) => {


        

        setFile(e.target.files[0])

        setState({
            ...state, filename: e.target.files[0].name
        })
    }



    const formSubmition = ((e) => {
        e.preventDefault()

        if (file) { // file is a state

            const data = new FormData()
            data.append("name", file.name)
            data.append("file", file)

            axios.post("http://localhost:8000/product/image", data) // uploading to a folder in front-end
            
        }

        axios.post("http://localhost:8000/product/file", state).then((res)=> {
            alert(res.data.message)
        })

        
    })


    return (
        <>

            <NavBar />



            <div className="container contact-form">
                <div className="contact-image">
                    <img
                        src="https://image.ibb.co/kUagtU/rocket_contact.png"
                        alt="rocket_contact"
                    />
                </div>
                <form method="post" onSubmit={formSubmition}>
                    <h3>Upload your product</h3>
                    <div className="row">
                        <div className="col-md-6  ">
                            <div className="d-flex flex-row align-items-center mb-4">
                                <div className="form-outline flex-fill mb-0">
                                    <input
                                        type="text"
                                        id="form3Example3c"
                                        className="form-control"
                                        name='product'
                                        onChange={handleInputChanges}
                                    />
                                    <label className="form-label" htmlFor="form3Example3c">
                                        Product Name
                                    </label>
                                </div>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                                <div className="form-outline flex-fill mb-0">
                                    <input
                                        type="text"
                                        id="form3Example3c"
                                        className="form-control"
                                        name='price'
                                        onChange={handleInputChanges}
                                    />
                                    <label className="form-label" htmlFor="form3Example3c">
                                        Price
                                    </label>
                                </div>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                                <div className="form-outline flex-fill mb-0">
                                    <input
                                        type="text"
                                        id="form3Example3c"
                                        className="form-control"
                                        name='category'
                                        onChange={handleInputChanges}
                                    />
                                    <label className="form-label" htmlFor="form3Example3c">
                                        Category
                                    </label>
                                </div>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                                <div className="form-outline flex-fill mb-0">
                                    <input
                                        type="text"
                                        id="form3Example3c"
                                        className="form-control"
                                        name='discription'
                                        onChange={handleInputChanges}
                                    />
                                    <label className="form-label" htmlFor="form3Example3c">
                                        Discription
                                    </label>
                                </div>
                            </div>
                            <div class="mb-5">
                                <label for="formFileMultiple" className="form-label"></label>
                                <input className="form-control" type="file" id="formFileMultiple" multiple
                                    name='filename'
                                    onChange={uploadImage} />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-lg">
                                    Upload
                                </button>
                            </div>
                        </div>

                    </div>
                </form>
            </div>


        </>
    )
}

export default ProductUpload