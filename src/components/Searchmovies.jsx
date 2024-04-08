import React from 'react'
import Navbar from './Navbar'

const Searchmovies = () => {
  return (
    <div>
        <Navbar/>
        <br /><br />

        <div className="container">
            <div className="row">
                <br />
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 colmd-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Movie Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 colmd-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn-btn success">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Searchmovies