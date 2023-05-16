import React from 'react';
import {MenuItem, Select, Typography} from "@mui/material";
import {padStart} from "@fullcalendar/core";

const TimeSelector = () => {
    return (
        <>
            <Select
              className='scroll-container'
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                sx={{width:116, height:40, mr:'5px'}}
                defaultValue='default'
                MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
                displayEmpty
                // onChange={()=>console.log(5)}
            >
              <MenuItem value='default' disabled>연도 선택</MenuItem>
                {[...Array(100).keys()].map((i)=>(
                    <MenuItem value={i}>{padStart(i+2000, 4)}</MenuItem>
                ))}
            </Select>
            <Typography sx={{fontWeight:500}}>년</Typography>
            <Select
                labelId="demo-simple-select-label"
                // id="demo-simple-select"
                sx={{width:116, height:40, ml:'5px'}}
                defaultValue='default'
                MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
                // displayEmpty
                // onChange={()=>console.log(5)}
            >
                <MenuItem value='default' disabled>월 선택</MenuItem>
                {[...Array(12).keys()].map((i)=>(
                    <MenuItem value={i}>{padStart(i+1, 2)}</MenuItem>
                ))}
            </Select>
            <Typography sx={{fontWeight:500}}>월</Typography>
        </>
    );
};

export default TimeSelector;
/*
MuiPaper-root
MuiPaper-elevation
MuiPaper-rounded
MuiPaper-elevation1
MuiPaper-root
MuiMenu-paper
MuiPaper-elevation
MuiPaper-rounded
MuiPaper-elevation8
MuiPopover-paper
css-20x4yv-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper
*/
