import "./homeTop.css"
import { DateTimePopup } from "../datetime/DateTime"
import { Location } from "../loaction/location"
import React from "react"
import moment from "moment"
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { green } from '@mui/material/colors';
import { AppColors } from '../themes/color'
import { useNavigate } from "react-router-dom";
const ColorButton = styled(Button)(({ theme }) => ({
    // color: theme.palette.getContrastText(green[500]),

    width: '100%',
    padding: 10,
    backgroundColor: AppColors.themePrimaryColor,
    '&:hover': {
        backgroundColor: AppColors.themeBtnHoverColor,
    },
}));
export default function HomeTop() {
    let navigate = useNavigate(); 
    const [location, setLocation] = React.useState('Choose your current location')
    const [startDate, setStartDate] = React.useState('Select Start Date/Time')
    const [endDate, setEndDate] = React.useState('Select End Date/Time')
    const selectedStartDate = (date) => {
        const newDate = moment(date).format('LLL');
        setStartDate(newDate)
        console.warn(newDate, 'date')
    }

    const selectedEndDate = (date) => {
        const newDate = moment(date).format('LLL');
        setEndDate(newDate)
        console.warn(newDate, 'date')
    }

    const selectedLocation = (location) => {
        setLocation(location)
    }

    return (
        <div className="homeTopContainer">
            <div className="textContainer">
                <h1 className="textOne">{"The perfect car for your next trip is just around the corner"}</h1>
                <h3 className="textTwo">Book your ride now!</h3>
            </div>

            <div className="searchContainer">
                <div className="searchLeft">

                    {DateTimePopup(startDate, selectedStartDate)}
                </div>
                <div className="line"></div>
                <div className="searchRight">
                    {DateTimePopup(endDate, selectedEndDate)}
                    {/* <span className="dateText">Select End Date/Time</span> */}
                </div>
                {/* <div className="searchRight">
                    <span className="searchBtnText">GET CAR</span>
                </div> */}
                {/* <DateTime /> */}
            </div>
            <div className="locationContainer">
                <div className="searchLeft">
                    {Location(location, selectedLocation)}
                </div>
            </div>

            <div className="searchBtn">
                {/* <div className="searchLeft"> */}
                    <ColorButton onClick={()=> navigate('/car-list')} variant="contained">GET CAR</ColorButton>
                    {/* <span className="searchBtnText">GET CAR</span> */}
                {/* </div> */}
            </div>

        </div>
    )
}
