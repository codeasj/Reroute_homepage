import React, { useState} from 'react';
import { Box, Container, Grid, Paper, Typography, InputLabel, TextField, Button } from '@mui/material';
import { ListItem} from '@mui/material';
import bullets from "../images/bullets.png"
import truckImg1 from "../images/Photo-bg.png";


const makeStyle = {
    mainBox: {

        backgroundSize: "cover",
        backgroundPosition: "center",
        "@media (max-width: 1100px)": {
            paddingTop: "15%",
        },
        "@media (max-width: 700px)": {
            paddingTop: "25%",
        },
        "@media (max-width: 428px)": {
            paddingTop: "33%",
        },
    },
    leftContent: {
        color: "#fff",
       
    },
    streamLine: {
        width: "65%",
        background: "#041C3780",
        borderLeft: "4px solid #FFB629",
        padding: "5px",
        fontSize: "14px",
        fontWeight: "400",
        fontFamily: "'Rubik', sans-serif",
        "@media (max-width: 488px)": {
            display: "none"
        },
    },
    reRoute: {
        fontSize: "60px",
        fontFamily: "'Rubik', sans-serif",
        fontWeight: "700",
        "@media (max-width: 768px)": {
            fontSize: "40px"
        },
        "@media (max-width: 488px)": {
            fontSize: "25px"
        },
    },
    listItem: {
        display: 'list-item',
        fontSize: "16px",
        fontWeight: "500",
        fontFamily: "'Krub', sans-serif",
        // mobile view
        "@media (max-width: 450px)": {
            display: "none"
        },
    },
    form: {
        position: "relative",
        marginBottom: "2rem",
        paddingTop: "20px",
        borderRadius: "12px",
    },
    bulletItems: {
        fontSize: "14px",
        fontFamily: "'Krub', sans-serif",
        fontWeight: "500",
        marginLeft: "10px",
        color: "#2A4F6D"
    },
    listItem2: {
        marginTop: "1rem",
        display: "none",
        // mobile view
        "@media (max-width: 450px)": {
            display: "block"
        },
    },
    mainBox: {
        position: "absolute",

        top: "0px",

        position: "relative",

        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    leftContent: {
        color: "#fff",
    },
    streamLine: {
        width: "65%",
        background: "#041C3780",
        borderLeft: "4px solid #FFB629",
        padding: "5px",
        fontSize: "14px",
        fontWeight: "400",
        fontFamily: "'Rubik', sans-serif",
        "@media (max-width: 488px)": {
            display: "none"
        },
    },
    reRoute: {

        fontSize: "60px",
        fontFamily: "'Rubik', sans-serif",
        fontWeight: "700",
        "@media (max-width: 768px)": {
            fontSize: "40px"
        },
        "@media (max-width: 488px)": {
            fontSize: "25px"
        },
    },
    listItem: {
        display: 'list-item',
        fontSize: "16px",
        fontWeight: "500",
        fontFamily: "'Krub', sans-serif",
        "@media (max-width: 450px)": {
            display: "none"
        },
    },
    form: {
        padding: "20px",
        position: "relative",

        // marginBottom: "2rem",
        height: "560px",
        // padding: "25px 20px 20px 22px",
        borderRadius: "12px",
        "@media (max-width: 768px)": {
            height: "530px"
        },
    },
    title: {
        textAlign: "center",
        fontFamily: "'Rubik', sans-serif",
        fontWeight: "500",
        fontSize: "24px",
        color: "#000000",
        marginBottom: "40px"

    },
    formBtn: {
        position: "absolute",
        bottom: "20px",
        width: "93%",
        background: "#E57E38",
        color: "#000000",
        fontWeight: "600",
        fontSize: "10px",
        height: "42px",
        // marginTop: "120px",
        "@media (max-width: 800px)": {
            marginTop: "90px",
        },
        "@media (max-width: 483px)": {
            width: "89%"
        },
        "&:hover": {
            background: "#E57E38", 
        },
    },

    destination: {
        fontSize: "14px",
        fontWeight: "400",
        fontFamily: "'Rubik', sans-serif",
        color: "#000000"

    },
    destination2: {
        fontSize: "14px",
        fontWeight: "400",
        fontFamily: "'Rubik', sans-serif",
        color: "#000000",
        marginTop: "3rem"

    },
    textField: {
        marginTop: "5px",
        marginBottom: "10px",
        width: "100%"
    },

    city: {
        fontSize: "14px",
        fontWeight: "400",
        fontFamily: "'Rubik', sans-serif",
        color: "#000000 60%"
    },
    cityDes: {
        fontSize: "15px",
        fontWeight: "600",
        fontFamily: "'Rubik', sans-serif",
        color: "#2A4F6D"
    },
    label: {
        fontSize: "15px",
        fontWeight: "500",
        fontFamily: "'Rubik', sans-serif",
        color: "#000",
        marginTop: "10px",
        marginBottom: "10px"
    },
    kgBtn: {
        color: "#23212A",
        backgroundColor: "#FFB629",
        '&:hover': {
            backgroundColor: "#FFB629",
            // Add any other styles you want for the hover state
        },
    },
    tons: {
        color: "#23212A",
        backgroundColor: "#fff",
        '&:hover': {
            backgroundColor: "#fff",
            // Add any other styles you want for the hover state
        },
    },
    success: {
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
        flexDirection: "column"
    },
    successImg: {
        height: "100px",
        width: "100px",
        margin: "auto",
        marginTop: "6rem"
    },
    txt1: {
        textAlign: "center",
        fontFamily: "'Rubik', sans-serif",
        fontWeight: "500",
        fontSize: "24px",
        color: "#000000",
        marginTop: "2rem"
    },
    txt2: {
        color: 'rgba(0, 0, 0, 0.5)',
        textAlign: "center",
        fontFamily: "'Rubik', sans-serif",
        fontWeight: "500",
        fontSize: "14px",
        marginTop: "1rem"
    },
    arrowBack: {
        cursor: "pointer",
        position: "absolute",
        top: "10px",
        color: "#2A4F6D"
    },
    // circle

    initialCircle: {
        color: "#E57E38",
        marginRight: "10px"
    },
    updateCircle: {
        color: "#fff",
        marginRight: "10px"
    }
};





export default function Banner() {
    const [currentBackground] = useState(0);
    const backgrounds = [truckImg1];
    return (


        <>
            <Box sx={makeStyle.mainBox}>
                <Box sx={{
                    backgroundImage: `linear-gradient(90.13deg,
          rgba(0, 0, 0, 0.9) 1.07%,
          rgba(0, 0, 0, 0.6) 99.9%),url(${backgrounds[currentBackground]})`, backgroundSize: "cover", backgroundPosition: "center", width: "100%", pt: "8rem", pb: "1rem"
                }}>

                    <Container >
                        <Grid container spacing={2} >
                            <Grid item lg={6} xs={12}>
                                <Box>
                                    <Box sx={makeStyle.leftContent}>
                                        <Typography sx={makeStyle.streamLine}>Streamline Your Logistics with Easy Truck Booking</Typography>
                                        <Typography sx={makeStyle.reRoute}>ReeRoute: India's Fastest Truck Booking Platform!</Typography>
                                        {/* list items */}
                                        <ListItem
                                            sx={makeStyle.listItem}>
                                            Pan-India operations
                                        </ListItem>
                                        <ListItem
                                            sx={makeStyle.listItem}>
                                            Associated with 3,000+ SMEs/Transporters
                                        </ListItem>
                                        <ListItem
                                            sx={makeStyle.listItem}>
                                            Guaranteed Timely Payments
                                        </ListItem>
                                    </Box>
                                </Box>
                            </Grid>
                            {/* rightSide content */}
                            <Grid item lg={6} xs={12} sx={{ position: "relative" }}>
                                <Paper sx={makeStyle.form}>
                                    <form>
                                            <Typography sx={makeStyle.title}>Book Your Truck</Typography>
                                            <InputLabel htmlFor="my-input" sx={makeStyle.destination}>From</InputLabel>
                                            <TextField placeholder="Enter origin city"  sx={makeStyle.textField}></TextField>
                                            {<div style={{ color: "red", marginBottom: "2rem" }}></div>}
                                            <InputLabel htmlFor="my-input" sx={makeStyle.destination2}>To</InputLabel>
                                            <TextField placeholder='Enter destination city' sx={makeStyle.textField}></TextField>
                                            {<div style={{ color: "red" }}></div>}
                                            <Box type="submit">
                                                <Button sx={makeStyle.formBtn} type="submit">Next</Button>
                                            </Box>

                                        </form>
                                    
                                </Paper>
                            </Grid>

                        </Grid>
                    </Container>
                   
                </Box>


            </Box >

            {/* mobile view */}
            <Box sx={makeStyle.listItem2}>
                <Box sx={{ display: "flex", ml: "15px", mb: "3px" }}>
                    <Box><img src={bullets} alt="" sx={makeStyle.bullets} /></Box>
                    <Typography sx={makeStyle.bulletItems}>Pan-India operations</Typography>
                </Box>
                <Box sx={{ display: "flex", ml: "15px", mb: "3px" }}>
                    <Box><img src={bullets} alt="" sx={makeStyle.bullets} /></Box>
                    <Typography sx={makeStyle.bulletItems}>Partnered with 10,000+ truckers </Typography>
                </Box>
                <Box sx={{ display: "flex", ml: "15px", mb: "3px" }}>
                    <Box><img src={bullets} alt="" sx={makeStyle.bullets} /></Box>
                    <Typography sx={makeStyle.bulletItems}>Rated 5 ⭐️ by 3,000+ clients</Typography>
                </Box>
            </Box>




        </>
    );
}