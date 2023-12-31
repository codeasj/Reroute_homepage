import React from 'react'
import { Box, Container, Divider, Grid, Typography } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Link} from 'react-router-dom';
import mainlogo3 from "../images/mainlogo3.png"


const makestyle = {
    footerBox: {
        paddingTop: "6rem",
        minHeight: "300px",
        backgroundColor: "#2A4F6D",
        color: "#fff",
        fontFamily: "'Krub', sans-serif",
        fontSize: "16px"
    },
    colText: {
        fontWeight: "500",
        marginBottom: "15px",
        fontFamily: "'Krub', sans-serif",
        cursor: "pointer",
        "&:hover": {
            color: "#F79633"
        },
    },
    contactIcon: {
        backgroundColor: "#F79633",
        height: "30px",
        width: "30px",
        borderRadius: "50%",
        padding: '10px',
        color: "#000"
    },
    copyRights: {
        textAlign: "center",
        padding: "10px",
        fontSize: "16px",
        fontWeight: "500",
        fontFamily: "'Krub', sans-serif"
    }
}
export default function Footer() {
    const handleLinkClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <Box sx={makestyle.footerBox}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item lg={3} xs={12}>
                       <img src={mainlogo3} alt="" style={{height:"80px",width:"110px"}}/>
                        
                        <Typography sx={{ mt: "10px", fontWeight: "500", fontFamily: "'Krub', sans-serif" }}>Reeroute: India's Fastest Truck Booking Platform!</Typography>
                        <Typography sx={{ mt: "20px", fontWeight: "600", fontFamily: "'Krub', sans-serif" }}>Follow us on</Typography>
                        {/*social media icons */}
                        <Box sx={{ mt: "10px" }}>
                            <InstagramIcon sx={{ mr: "20px" }} />
                            <FacebookIcon sx={{ mr: "20px" }} />
                            <TwitterIcon sx={{ mr: "20px" }} />
                            <LinkedInIcon sx={{ mr: "20px" }} />
                        </Box>

                    </Grid>
                    <Grid item lg={3} sm={6} xs={6}>
                        <Box sx={{ pt: "43px" }}>
                            <Link to="/" onClick={handleLinkClick} style={{ textDecoration: "none", color: "#fff" }}><Typography sx={makestyle.colText}>About Us</Typography></Link>
                            <Link to="/" onClick={handleLinkClick} style={{ textDecoration: "none", color: "#fff" }}><Typography sx={makestyle.colText}>      Terms & Conditions </Typography></Link>
                            
                            <Link to="/" onClick={handleLinkClick} style={{ textDecoration: "none", color: "#fff" }}><Typography sx={makestyle.colText}>Trucker</Typography></Link>
                            <Link to="/" onClick={handleLinkClick} style={{ textDecoration: "none", color: "#fff" }}><Typography sx={makestyle.colText}>Contact</Typography></Link>
                        </Box>
                    </Grid>
                    <Grid item lg={3} sm={6} xs={6}>
                        <Box sx={{ pt: "43px" }}>
                            {/* link */}
                            <Link to="/" onClick={handleLinkClick} style={{ textDecoration: "none", color: "#fff" }}><Typography sx={makestyle.colText}>Careers</Typography></Link>
                            <Link to="/" onClick={handleLinkClick} style={{ textDecoration: "none", color: "#fff" }}><Typography sx={makestyle.colText}>Shipper</Typography></Link>
                            <Link to="/"onClick={handleLinkClick} style={{ textDecoration: "none", color: "#fff" }}><Typography sx={makestyle.colText}> Privacy Policy </Typography></Link>
                        </Box>
                    </Grid>
                    <Grid item lg={3} >
                        <Box sx={{ pt: "43px" }}>
                            <Box sx={{ display: "flex", mb: "15px" }}>
                                <EmailOutlinedIcon sx={makestyle.contactIcon} />
                                <Box sx={{ ml: "20px" }}>
                                    <Typography sx={{ fontFamily: "'Krub', sans-serif" }}>Email</Typography>
                                    <Typography sx={{ fontFamily: "'Krub', sans-serif" }}>contact@logistics.com</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", mb: "15px" }}>
                                <CallOutlinedIcon sx={makestyle.contactIcon} />
                                <Box sx={{ ml: "20px", fontFamily: "'Krub', sans-serif" }}>
                                    <Typography sx={{ fontFamily: "'Krub', sans-serif" }}>Call Us </Typography>
                                    <Typography sx={{ fontFamily: "'Krub', sans-serif" }}>(00) 112 365 489</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", mb: "15px" }}>

                                <LocationOnOutlinedIcon sx={makestyle.contactIcon} />
                                <Typography sx={{ ml: "20px", fontFamily: "'Krub', sans-serif" }}>Address
                                    B-606, sector -12, Kharghar,
                                    Navi mumbai - 400706
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            {/* copyrights */}
            <Divider sx={{ color: "#4E5683" }} />
            <Typography sx={makestyle.copyRights}>Copyright © ReeRoute | Designed by Jethi Tech</Typography>
        </Box >
    )
}
