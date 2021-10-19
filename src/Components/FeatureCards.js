import React from 'react'
import Beauty from '../Assets/beautystore.jpg'
import Fashion from '../Assets/fashionstore.jpg'
import Sig from '../Assets/sighand.jpg'
import Fwear from '../Assets/fwear.jpg'

const FeatureCards = () => {
    return (
        <div className="container w-75 mb-5">
              <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card fetcard featurecard1">
            <img src={Beauty} className="card-img-top rotcard" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Beauty Store</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <button type="button" className="btn btn-primary btn-sm">Explore more</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card fetcard featurecard2">
            <img src={Fashion} className="card-img-top rotcard" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Fashion Store</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <button type="button" className="btn btn-primary btn-sm">Explore more</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card fetcard featurecard3">
            <img src={ Sig} className="card-img-top rotcard" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Signature Handicraft</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
              <button type="button" className="btn btn-primary btn-sm">Explore more</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card fetcard featurecard4">
            <img src={Fwear} className="card-img-top rotcard" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Fashionwear collection</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <button type="button" className="btn btn-primary btn-sm">Explore more</button>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default FeatureCards
