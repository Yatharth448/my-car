
import React from "react";
import "./datetime.css"
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker"
export default function DateTime() {
    const [value, setValue] = React.useState(dayjs('2022-04-17'));
    return (
        <div className="dateTime">
            <div className="calenderContainer">
                <div className="calenderLeft">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <StaticDatePicker className="calender" orientation="landscape" defaultValue={dayjs('2022-04-17')} />
                    </LocalizationProvider>
                </div>
                <div className="calenderRight">
                    <LocalizationProvider dateAdapter={AdapterDayjs}> 
                        <StaticDatePicker className="calender" orientation="landscape" defaultValue={dayjs('2022-04-17')} />
                 </LocalizationProvider>
                </div>
            </div>
            <div className="timeContainer">
                <div className="startTime">

                </div>
                <div className="endTime">

                </div>
            </div>

        </div>
    )
}
