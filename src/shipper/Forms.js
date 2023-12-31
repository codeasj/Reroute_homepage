import React, { useState } from 'react';
import { Container, TextField, Button, Box, Typography, InputLabel, Grid } from '@mui/material';
import bgImg from "../images/Photo-bg.png";
import bgImg2 from "../images/165.png";
import bgImg3 from "../images/166.png";
import Banner from './Banner';

const makeStyle = {
    mainBox: {
        position: "absolute",
        marginTop: "-115px",
        paddingTop: "10%",
        top: "0px",
        minHeight: "75vh",
        position: "relative",
        backgroundImage: `linear-gradient(90.13deg,
      rgba(0, 0, 0, 0.9) 1.07%,
      rgba(0, 0, 0, 0.6) 99.9%),
      url(${bgImg})`,
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
    },
    form: {
        position: "relative",
        marginBottom: "2rem",
        height: "460px",
        padding: "25px 20px 20px 22px",
        borderRadius: "12px",
        "@media (max-width: 768px)": {
            height: "400px"
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
        position: "abssolute",
        bottom: "10",
        width: "100%",
        background: "linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%)",
        color: "#000000",
        fontWeight: "600",
        fontSize: "10px",
        height: "42px",
        marginTop: "120px",
        "@media (max-width: 800px)": {
            marginTop: "90px",
        },

    },
    destination: {
        fontSize: "14px",
        fontWeight: "400",
        fontFamily: "'Rubik', sans-serif",
        color: "#000000"

    },
    textField: {
        marginTop: "5px",
        marginBottom: "40px",
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
        marginTop: "20px",
        marginBottom: "20px"
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
    }

};


export default function Forms() {
   const [ setFormData] = useState({});
    const [currentForm, setCurrentForm] = useState(1);
    const [length, setLength] = React.useState('');
    const [Height, setHeight] = React.useState('');
    const [department, setDepartment] = React.useState('');




   ;

    const [backgroundImage, setBackgroundImage] = useState("");
    const [setCircle] = useState(false)



    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (currentForm < 3) {
            setCurrentForm(currentForm + 1);
            updateBackgroundImage(currentForm + 1);
        }
        if (currentForm === 1) {
            setCircle(true)
        }


    };

    const updateBackgroundImage = (formNumber) => {
        let newBackgroundImage = '';

        if (formNumber === 2) {
            newBackgroundImage = bgImg2;
        } else if (formNumber === 3) {
            newBackgroundImage = bgImg3;
        }
        setBackgroundImage(` linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(94,115,48,0.8183648459383753) 35%, rgba(0,212,255,1) 100%),url(${newBackgroundImage})`);
    };







    return (
        <Box sx={{ backgroundImage: backgroundImage }}>


            <Container>
                <Grid container spacing={2} >
                    <Grid item lg={6}> <Banner /> </Grid>
                    <Grid item lg={6}>
                        <div>
                            {currentForm === 1 && (
                                <form onSubmit={handleFormSubmit}>
                                    <Typography sx={makeStyle.title}>Book Your Truck</Typography>
                                    <InputLabel htmlFor="my-input" sx={makeStyle.destination}>From</InputLabel>
                                    <TextField placeholder="Enter origin city" sx={makeStyle.textField}></TextField>
                                    <InputLabel htmlFor="my-input" sx={makeStyle.destination}>To</InputLabel>
                                    <TextField placeholder='Enter destination city' sx={makeStyle.textField}></TextField>
                                    <Box type="submit">
                                        <Button sx={makeStyle.formBtn} type="submit">Nextfdsdsdf</Button>
                                    </Box>

                                </form>
                            )}
                            

                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
