import React from 'react'
import Footer from '../components/Footer'
import Testimonial from '../components/Testimonial'
import Footerhero from '../components/Footerhero'
import DownloadShipper from './DownloadShipper'
import Banner from './Banner'
import Counter from '../components/Counter'
import Faq from '../components/Faq'
import Reroute from '../components/Reroute'
import { Box, } from '@mui/material'
import TestinomialSlider from '../mobileview/TestinomialSlider'
import FooterHeroSlider from '../mobileview/FooterHeroSlider'



const makeStyles = {
    mobileView: {
        display: "none",
        "@media (max-width: 700px)": {
            display: "block"
        }
    },
    footerHero: {
        "@media (max-width: 600px)": {
            display: "none"
        }
    },
    FooterHeroSlider: {
        display: "none",
        "@media (max-width: 600px)": {
            display: "block"
        }
    }
}

export default function Shipper() {
    return (
        <div style={{ position: "relative" }}>

            <Banner />
            <Counter />
            <DownloadShipper />
            <Reroute />
            {/* <Reroute2/> */}
            <Testimonial />
            <Box sx={makeStyles.mobileView}>
                <TestinomialSlider />
            </Box>
            <Faq />
            <Box sx={makeStyles.FooterHeroSlider}>
                <FooterHeroSlider />
            </Box>
            <Box sx={makeStyles.footerHero}>
                <Footerhero />
            </Box>
            <Footer />
        </div>
    )
}
