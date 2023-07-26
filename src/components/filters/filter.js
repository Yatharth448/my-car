import React from 'react'
import { Grid, Card, CardActions, CardContent, CardMedia, Button, Typography, styled, CardActionArea } from '@mui/material';
import { AppColors } from '../themes/color';
import NoCrashIcon from '@mui/icons-material/NoCrash';
export default function filter() {
    const sortDataArray = [
        { img: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220526115712_Kia%20EV6%20e_SUV.jpg&w=700&q=90&c=1', name: 'Relevance' },
        { img: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220526115712_Kia%20EV6%20e_SUV.jpg&w=700&q=90&c=1', name: 'Low to High' },
        { img: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220526115712_Kia%20EV6%20e_SUV.jpg&w=700&q=90&c=1', name: 'High to Low' },
        { img: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220526115712_Kia%20EV6%20e_SUV.jpg&w=700&q=90&c=1', name: 'Best Rated' },
        { img: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220526115712_Kia%20EV6%20e_SUV.jpg&w=700&q=90&c=1', name: 'Distance' },
    ]

    const carTypeArray = [
        { img: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220526115712_Kia%20EV6%20e_SUV.jpg&w=700&q=90&c=1', name: 'Ev' },
        { img: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220526115712_Kia%20EV6%20e_SUV.jpg&w=700&q=90&c=1', name: 'Hatchback' },
        { img: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220526115712_Kia%20EV6%20e_SUV.jpg&w=700&q=90&c=1', name: 'Sedan' },
        { img: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220526115712_Kia%20EV6%20e_SUV.jpg&w=700&q=90&c=1', name: 'CSUV' },
        { img: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220526115712_Kia%20EV6%20e_SUV.jpg&w=700&q=90&c=1', name: 'SUV' },
        { img: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220526115712_Kia%20EV6%20e_SUV.jpg&w=700&q=90&c=1', name: 'Luxury' },
    ]

    const sortGridItem = (itemData, idx) => {
        return (
            <Grid item lg={3} sm={6} xs={12} md={3} id={idx}>
                <Card sx={{ maxWidth: 100, height: 80, borderRadius: 3, overflow: 'hidden', border: '1px solid #e0e0e0' }} elevation={0}>
                    <CardActionArea>
                        {/* <CardActions style={{ justifyContent: 'center' }}> */}
                        <div style={{ width: '100%', height: 45, display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                            <div style={{ width: 30, height: 30 }}>

                                <CardMedia
                                    // style={{borderColor: '#000', borderWidth: 2}}
                                    // borderColor='#000'
                                    // borderWidth="2"
                                    component="img"
                                    alt="green iguana"
                                    height="30"
                                    width={16}
                                    image={require('../../assets/car-relevance.png')}//itemData.img}
                                />
                            </div>
                        </div>
                        <div style={{ paddingLeft: 5, paddingRight: 5, paddingTop: 5, paddingBottom: 5, display: 'flex', justifyContent: 'center' }}>
                            <Typography variant="h7" component="div" noWrap={true}>
                                {itemData.name}
                            </Typography>
                            {/* <Typography variant="body2" color="text.secondary">
                                    {itemData.transmission + " . " + itemData.fuel + " . " + itemData.seater + ' Seats'}
                                </Typography> */}
                        </div>



                        {/* <Button size="small">Share</Button> */}
                        {/* <Button style={{ backgroundColor: AppColors.themePrimaryColor, color: 'white', width: '100%' }} size="small">BOOK NOW</Button> */}
                        {/* </CardActions> */}
                    </CardActionArea>
                </Card>

            </Grid>
        )
    }

    const sortGridView = (type) => {
        return (
            <Grid container spacing={1} padding={1}>
                {
                    type == 'sort' ?
                    sortDataArray.map((itemData, idx) =>

                        sortGridItem(itemData, idx)
                    )
                   : type == 'carType' ?
                            carTypeArray.map((itemData, idx) =>

                                sortGridItem(itemData, idx)
                            )
                            : null
                }
            </Grid>
        )
    }

    const sortView = () => {
        return (
            <div style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ flexDirection: 'row', display: 'flex', marginTop: 10, marginBottom: 5}}>

                    <Typography variant="h6" textAlign={'left'} color={AppColors.themeBlackColor} width={'100%'} paddingLeft={1}>
                        {'Sort By'}
                    </Typography>
                    <Typography variant="body1" textAlign={'right'} color={AppColors.themePrimaryColor} width={'100%'} paddingRight={1}>
                        {'RESET'}
                    </Typography>

                </div>
                <div style={{ width: '100%' }}>
                    {sortGridView('sort')}
                </div>

                <div style={{ flexDirection: 'row', display: 'flex', marginTop: 10, marginBottom: 5 }}>

                    <Typography variant="h6" textAlign={'left'} color={AppColors.themeBlackColor} width={'100%'} paddingLeft={1}>
                        {'Car Type'}
                    </Typography>
                    {/* <Typography variant="body1" textAlign={'right'} color={AppColors.themePrimaryColor} width={'100%'} paddingRight={1}>
                        {'RESET'}
                    </Typography> */}

                </div>
                <div style={{ width: '100%' }}>
                    {sortGridView('carType')}
                </div>

            </div>

        )
    }



    return (
        <div style={{ flex: .25, marginTop: 15, paddingRight: 0, overflow: 'hidden', border: '1px solid #e0e0e0', borderTopRightRadius: 12, borderBottomRightRadius: 12 }}>
            <Card sx={{ maxWidth: '100%' }} elevation={0}>
                <CardActionArea>
                    <div style={{ width: '100%' }}>
                        <div style={{ width: '100%', backgroundColor: AppColors.themePrimaryColor, paddingTop: 3, paddingBottom: 3 }}>
                            <Typography variant="h6" component="div" textAlign={'center'} color={AppColors.themesWhiteColor}>
                                {'Filters'}
                            </Typography>
                        </div>
                        {sortView()}
                    </div>
                </CardActionArea>
            </Card>
        </div>
    )
}
