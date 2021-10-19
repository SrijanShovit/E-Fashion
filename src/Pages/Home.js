import React from 'react'
import Header  from '../Components/Navbar'
import Banner  from '../Components/Banner'
import Cards  from '../Components/FeatureCards'

import Footer from '../Components/Footer'
const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Cards/>
             <Footer/>
        </div>
    )
}

export default Home
