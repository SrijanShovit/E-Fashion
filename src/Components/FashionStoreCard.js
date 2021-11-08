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
                            <h5 className="card-title">GUPTA CLOTH STORE</h5>
                            <p className="card-text">
                                In this store, coustmer can purchase all type of men clothes.
                                <br/>
                                Store Timings: 9:00 A.M. - 8:00 P.M.
                            </p>
                            <a type='button' className="location-btn-1" href='/' target='_blank'>GO TO LOCATION</a>
                            <div class=" d-md-flex justify-content-md-end">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-success btn-sm fashionstorebutton dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        See Products
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="/MenWear">MEN WEAR</a></li>
                                        <li><a class="dropdown-item" href="/WomenWear">WOMEN WEAR</a></li>
                                        <li><a class="dropdown-item" href="/KidsWear">KIDS WEAR</a></li>
                                        <li><a class="dropdown-item" href="/PartyWear">PARTY WEAR</a></li>
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
                            <h5 className="card-title">KHURANA CLOTH HOUSE</h5>
                            <p className="card-text">
                                In this store, coustmer can purchase all type of women clothes.
                                <br/>
                                Store Timings: 10:00 A.M. - 8:00 P.M.
                            </p>
                            <a type="button" className="location-btn-2" href='/' target='_blank'>Go To Location</a>
                            <div class=" d-md-flex justify-content-md-end">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-success btn-sm fashionstorebutton dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        See Products
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="/MenWear">MEN WEAR</a></li>
                                        <li><a class="dropdown-item" href="/WomenWear">WOMEN WEAR</a></li>
                                        <li><a class="dropdown-item" href="/KidsWear">KIDS WEAR</a></li>
                                        <li><a class="dropdown-item" href="/PartyWear">PARTY WEAR</a></li>
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
                            <h5 className="card-title">SPLASH STORE</h5>
                            <p className="card-text">
                                In this store, coustmer can purchase all type of kid wear clothes.
                                <br/>
                                Store Timings: 9:00 A.M. - 7:00 P.M.
                            </p>
                            <a type="button" className="location-btn-3" href='/' target='_blank'>Go To Location</a>
                            <div class=" d-md-flex justify-content-md-end">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-success btn-sm fashionstorebutton dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        See Products
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="/MenWear">MEN WEAR</a></li>
                                        <li><a class="dropdown-item" href="/WomenWear">WOMEN WEAR</a></li>
                                        <li><a class="dropdown-item" href="/KidsWear">KIDS WEAR</a></li>
                                        <li><a class="dropdown-item" href="/PartyWear">PARTY WEAR</a></li>
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
                            <h5 className="card-title">MEGA CLOTH STORE</h5>
                            <p className="card-text">
                                In this store, coustmer can purchase all type of party wear clothes.
                                <br/>
                                Store Timings: 10:00 A.M. - 9:00 P.M.
                            </p>
                            <a type="button" className="location-btn-4" href='/' target='_blank'>Go To Location</a>
                            <div class=" d-md-flex justify-content-md-end">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-success btn-sm fashionstorebutton dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        See Products
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="/MenWear">MEN WEAR</a></li>
                                        <li><a class="dropdown-item" href="/WomenWear">WOMEN WEAR</a></li>
                                        <li><a class="dropdown-item" href="/KidsWear">KIDS WEAR</a></li>
                                        <li><a class="dropdown-item" href="/PartyWear">PARTY WEAR</a></li>
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