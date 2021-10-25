import Navbar from '../Components/Navbar'
import Footer from "../Components/Footer";
import Fwear from '../Assets/fwear.jpg'



const Handicraft = () => {
    return (
        <>
            <Navbar />

            {/* best selling products section */}

            <div className="container m-3" align="center">
                <h4>Best Selling Collection</h4>
            </div>

            <div className="row container my-2">
                <div className="col-12 col-lg-6" align="center">
                    <div className="card handcard1" style={{ "width": "22rem" }}>
                        <img src={Fwear} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="row">
                                <div className="col-6">
                                <button type="button" className="btn handicraft-btn btn-sm">Add to Cart</button>
                                </div>
                                <div className="col-6 pt-2">
                                <h4>Rs 99</h4>
                                </div>
                            </div>
                        
                       
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6" align="center">
                    <div className="card handcard2" style={{ "width": "22rem" }}>
                        <img src={Fwear} className="card-img-top" alt="..." />
                        <div className="card-body">
                        <div className="row">
                                <div className="col-6">
                                <button type="button" className="btn handicraft-btn btn-sm">Add to Cart</button>
                                </div>
                                <div className="col-6 pt-2">
                                <h4>Rs 99</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row container my-2" >
                <div className="col-12 col-lg-6" align="center">
                    <div className="card" style={{ "width": "22rem" }}>
                        <img src={Fwear} className="card-img-top" alt="..." />
                        <div className="card-body">
                        <div className="row">
                                <div className="col-6">
                                <button type="button" className="btn handicraft-btn btn-sm">Add to Cart</button>
                                </div>
                                <div className="col-6 pt-2">
                                <h4>Rs 99</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6" align="center">
                    <div className="card" style={{ "width": "22rem" }}>
                        <img src={Fwear} className="card-img-top" alt="..." />
                        <div className="card-body">
                        <div className="row">
                                <div className="col-6">
                                <button type="button" className="btn handicraft-btn btn-sm">Add to Cart</button>
                                </div>
                                <div className="col-6 pt-2">
                                <h4>Rs 99</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container m-3" align="center">
                <h4>Artistic Collection</h4>
            </div>


            <Footer />
        </>
    )
}

export default Handicraft
