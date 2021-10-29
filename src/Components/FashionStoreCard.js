import React from 'react'
import Men from '../Assets/menwearstore.jpg'
import Women from '../Assets/womenwearstore.jpg'
import Kid from '../Assets/kidwearstore.jpg'
import Party from '../Assets/partywearstore.jpg'
import './css/style.css'

const FashionStoreCard = () => {
    return (
        <div className="container w-75 mb-5">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card fetcard featurecard1">
                        <img src={Men} className="card-img-top rotcard" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Men Wear Store</h5>
                            <p className="card-text">
                                In this store, coustmer can purchase all type of men clothes.
                                <br/>
                                Store Timings: 9:00 A.M. - 8:00 P.M.
                            </p>
                            <a type="button" className="btn btn-success btn-sm" href='/' target='_blank'>Go To Location</a>
                            <div class=" d-md-flex justify-content-md-end">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-warning btn-sm fashionstorebutton dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        See Products
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Sweatshirt</a></li>
                                        <li><a class="dropdown-item" href="#">T-Shirt</a></li>
                                        <li><a class="dropdown-item" href="#">Jeans</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card fetcard featurecard2">
                        <img src={Women} className="card-img-top rotcard" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Women Wear Store</h5>
                            <p className="card-text">
                                In this store, coustmer can purchase all type of women clothes.
                                <br/>
                                Store Timings: 10:00 A.M. - 8:00 P.M.
                            </p>
                            <a type="button" className="btn btn-success btn-sm" href='/' target='_blank'>Go To Location</a>
                            <div class=" d-md-flex justify-content-md-end">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-warning btn-sm fashionstorebutton dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        See Products
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Long Dress</a></li>
                                        <li><a class="dropdown-item" href="#">Traditional Dress</a></li>
                                        <li><a class="dropdown-item" href="#">Indie Wear</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card fetcard featurecard3">
                        <img src={Kid} className="card-img-top rotcard" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Kids Wear Store</h5>
                            <p className="card-text">
                                In this store, coustmer can purchase all type of kid wear clothes.
                                <br/>
                                Store Timings: 9:00 A.M. - 7:00 P.M.
                            </p>
                            <a type="button" className="btn btn-success btn-sm" href='/' target='_blank'>Go To Location</a>
                            <div class=" d-md-flex justify-content-md-end">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-warning btn-sm fashionstorebutton dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        See Products
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">T-Shirts</a></li>
                                        <li><a class="dropdown-item" href="#">Trousers</a></li>
                                        <li><a class="dropdown-item" href="#">Skirts</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card fetcard featurecard4">
                        <img src={Party} className="card-img-top rotcard" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Party Wear Store</h5>
                            <p className="card-text">
                                In this store, coustmer can purchase all type of party wear clothes.
                                <br/>
                                Store Timings: 10:00 A.M. - 9:00 P.M.
                            </p>
                            <a type="button" className="btn btn-success btn-sm" href='/' target='_blank'>Go To Location</a>
                            <div class=" d-md-flex justify-content-md-end">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-warning btn-sm fashionstorebutton dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        See Products
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Sherwani</a></li>
                                        <li><a class="dropdown-item" href="#">Kurta Pajama</a></li>
                                        <li><a class="dropdown-item" href="#">Saree</a></li>
                                        <li><a class="dropdown-item" href="#">Bridal Wear</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FashionStoreCard;