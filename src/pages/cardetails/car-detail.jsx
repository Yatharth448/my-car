import React from 'react'
import ImageSlider from '../../components/imageSlider/ImageSlider'
import GoogleMapReact from 'google-map-react';
import { Grid, Card, CardActions, CardContent, CardMedia, Button, Typography, styled, CardActionArea } from '@mui/material';
import { AppColors } from '../../components/themes/color';
import Topbar from '../../components/topbar/Topbar';
export default function CarDetail() {
  console.log('car detail')
  const carFeatureArray = [
    { img: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220526115712_Kia%20EV6%20e_SUV.jpg&w=700&q=90&c=1', name: 'Power steering' },
    { img: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220526115712_Kia%20EV6%20e_SUV.jpg&w=700&q=90&c=1', name: 'Music system' },
    { img: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220526115712_Kia%20EV6%20e_SUV.jpg&w=700&q=90&c=1', name: 'Spare tyre' },
    { img: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220526115712_Kia%20EV6%20e_SUV.jpg&w=700&q=90&c=1', name: 'Air conditioning' },
    { img: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220526115712_Kia%20EV6%20e_SUV.jpg&w=700&q=90&c=1', name: 'Air freshner' },
    { img: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220526115712_Kia%20EV6%20e_SUV.jpg&w=700&q=90&c=1', name: 'Toolkit' },
    { img: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220526115712_Kia%20EV6%20e_SUV.jpg&w=700&q=90&c=1', name: 'Power steering' },
    { img: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220526115712_Kia%20EV6%20e_SUV.jpg&w=700&q=90&c=1', name: 'Music system' },
    { img: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220526115712_Kia%20EV6%20e_SUV.jpg&w=700&q=90&c=1', name: 'Spare tyre' },
    { img: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220526115712_Kia%20EV6%20e_SUV.jpg&w=700&q=90&c=1', name: 'Air conditioning' },
    { img: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220526115712_Kia%20EV6%20e_SUV.jpg&w=700&q=90&c=1', name: 'Air freshner' },
    { img: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220526115712_Kia%20EV6%20e_SUV.jpg&w=700&q=90&c=1', name: 'Toolkit' },
  ]
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  const sortGridItem = (itemData, idx) => {
    return (
      <Grid item lg={3} sm={6} xs={12} md={3} id={idx} key={idx}>
        <Card sx={{ maxWidth: 200, borderRadius: 3, overflow: 'hidden', }} elevation={0}>
          <CardActionArea>
            {/* <CardActions style={{ justifyContent: 'center' }}> */}
            <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
              <div style={{ width: 30, height: 30 }}>

                <CardMedia
                  // style={{borderColor: '#000', borderWidth: 2}}
                  // borderColor='#000'
                  // borderWidth="2"
                  component="img"
                  alt="green iguana"
                  height="10"
                  width={10}
                  image={require('../../assets/car-relevance.png')}//itemData.img}
                />
              </div>
              <Typography variant="h7" component="div" noWrap={true}>
                {itemData.name}
              </Typography>

            </div>

          </CardActionArea>
        </Card>

      </Grid>
    )
  }



  return (
    <>
      <Topbar />
      <div style={{ width: '100%', display: 'flex' }}>
        <div style={{ width: '70%', marginTop: 10 }}>

          <div style={{ margin: 15, marginRight: 0, overflow: 'hidden !important ', border: '1px solid #e0e0e0', borderRadius: 12 }}>
            <ImageSlider />
          </div>
          <div style={{ margin: 15, marginRight: 0, overflow: 'hidden', border: '1px solid #e0e0e0', borderRadius: 12 }}>

            <Card sx={{ maxWidth: '100%', display: 'flex', padding: 2 }} elevation={0}>
              <div style={{ width: '50%', padding: 10 }}>
                <Typography variant="h6" component="div" noWrap={true}>
                  {'From'}
                </Typography>
                <Typography variant="body3" component="div" noWrap={true} color={AppColors.themeLightGrayColor}>
                  {'Mon, 24 Jul, 01:00 PM'}
                </Typography>
                <Typography variant="body2" component="div" noWrap={true} color={AppColors.themeLightGrayColor}>
                  {'Dingra Properties'}
                </Typography>

              </div>

              <div style={{ width: '50%', padding: 10 }}>
                <Typography variant="h6" component="div" noWrap={true}>
                  {'To'}
                </Typography>
                <Typography variant="body3" component="div" noWrap={true} color={AppColors.themeLightGrayColor}>
                  {'Mon, 24 Jul, 01:00 PM'}
                </Typography>
                <Typography variant="body2" component="div" noWrap={true} color={AppColors.themeLightGrayColor}>
                  {'Dingra Properties'}
                </Typography>

              </div>
            </Card>
            <Typography style={{ paddingLeft: 25, paddingBottom: 10 }} variant="body3" component="div" noWrap={true}>
              {'2.78 Kms'}
            </Typography>
          </div>


          <div style={{ margin: 15, marginRight: 0, paddingRight: 0, overflow: 'hidden', border: '1px solid #e0e0e0', borderRadius: 12 }}>

            {/* car name */}
            <Card sx={{ maxWidth: '100%', display: 'flex', padding: 2, paddingBottom: 0 }} elevation={0}>
              <div style={{ width: '50%', padding: 10, paddingBottom: 0, alignItems: 'flex-start' }}>
                <Typography variant="h5" component="div" noWrap={true}>
                  {'Maruti Wagon R 2022'}
                </Typography>
                <Typography variant="body2" component="div" noWrap={true} color={AppColors.themeLightGrayColor}>
                  {'Wagon R. Manual. Petrol. 5 Seats'}
                </Typography>
                <Typography variant="body2" component="div" noWrap={true} color={AppColors.themeLightGrayColor}>
                  {'4.5 starts. 10559 kms driven'}
                </Typography>

              </div>

              <div style={{ width: '50%', padding: 10, paddingBottom: 0, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                <Typography variant="body3" component="div" noWrap={true} textAlign={'right'}>
                  {'Sanjay is the Owner'}
                </Typography>
                <Typography variant="body3" component="div" noWrap={true} textAlign={'right'}>
                  {'since Mar 2022'}
                </Typography>

              </div>
            </Card>


            <Card sx={{ maxWidth: '100%', display: 'flex', padding: 2 }} elevation={0}>
              <div style={{ width: '50%', padding: 10, paddingTop: 0, alignItems: 'flex-start' }}>
                <Typography variant="h6" component="div" noWrap={true}>
                  {'Booking Time'}
                </Typography>

              </div>

              <div style={{ width: '50%', padding: 10, paddingTop: 0, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                <Typography variant="body3" component="div" noWrap={true} textAlign={'right'} color={'green'}>
                  {'Modify'}
                </Typography>

              </div>
            </Card>

            {/* booking time */}
            <div style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>

              <Card sx={{ width: '95%', display: 'flex', padding: 1 }} elevation={3}>

                <div style={{ width: '100%', padding: 10, paddingTop: 0, alignItems: 'flex-start' }}>
                  <Typography variant="body2" component="div" noWrap={true}>
                    {'Pick Up'}
                  </Typography>
                  <Typography variant="body3" component="div" noWrap={true} color={AppColors.themeLightGrayColor}>
                    {'Mon, 24 Jul, 01:00 PM'}
                  </Typography>

                </div>

                <div style={{ width: '100%', padding: 10, paddingTop: 0, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                  <Typography variant="body2" component="div" noWrap={true} textAlign={'right'}>
                    {'Drop'}
                  </Typography>
                  <Typography variant="body3" component="div" noWrap={true} textAlign={'right'} color={AppColors.themeLightGrayColor}>
                    {'Mon, 24 Jul, 01:00 PM'}
                  </Typography>

                </div>

              </Card>
            </div>


            {/* about the car */}

            <div>

              <Typography style={{ paddingLeft: 25, paddingBottom: 10, marginTop: 20 }} variant="h6" component="div" noWrap={true}>
                {'About the car'}
              </Typography>

              <Typography style={{ paddingLeft: 25, paddingBottom: 10 }} variant="body2" component="div" noWrap={false}>
                {'The smooth drive experience with powerful 1200 cc engine ensure you have a great ride you will always find my car extremely clean ready to welcome you , comfortable cushioned leather seat ensure supreme comfort while you driving , trust me choosing this car will be the best ever'}
              </Typography>

              <div style={{ width: '100%' }}>

                <Card sx={{ width: '100%' }} elevation={0}>
                  <CardActionArea>
                    <div style={{ width: '100%' }}>
                      {/* <div style={{ width: '100%', backgroundColor: AppColors.themePrimaryColor, paddingTop: 3, paddingBottom: 3 }}> */}
                      {/* <Typography variant="h6" component="div" textAlign={'center'} color={AppColors.themesWhiteColor}>
                        {'Filters'}
                      </Typography> */}
                      {/* </div> */}
                      <Grid container spacing={1} padding={1} marginLeft={5}>
                        {carFeatureArray.map((itemData, idx) =>

                          sortGridItem(itemData, idx)
                        )}
                      </Grid>
                    </div>
                  </CardActionArea>
                </Card>

              </div>
            </div>


            {/* car location */}

            <div>

              <Typography style={{ paddingLeft: 25, paddingBottom: 10, marginTop: 20 }} variant="h6" component="div" noWrap={true}>
                {'Car Location'}
              </Typography>

              <Typography style={{ paddingLeft: 25, paddingBottom: 10 }} variant="body2" component="div" noWrap={false}>
                {'PICKUP EXPERIENCE Car is parked near Krishna dairy '}
              </Typography>

              <Typography style={{ paddingLeft: 25, paddingBottom: 10 }} variant="body2" component="div" noWrap={false}>
                {'Dingra Properties'}
              </Typography>

              <div style={{ width: '100%' }}>

                {/* <Card sx={{ width: '100%' }} elevation={0}> */}
                <div style={{ height: '50vh', width: '100%' }}>
                  <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                  >
                    <AnyReactComponent
                      lat={59.955413}
                      lng={30.337844}
                      text="My Marker"
                    />
                  </GoogleMapReact>
                </div>
                {/* </Card> */}

              </div>
            </div>



          </div>

        </div>






        <div style={{ width: '30%', margin: 15, marginTop: 10 }}>
          <div style={{ flex: .25, marginTop: 15, overflow: 'hidden', border: '1px solid #e0e0e0', borderRadius: 12 }}>
            <Card sx={{ maxWidth: '100%' }} elevation={0}>
              <CardActionArea>
                <div style={{ width: '100%', height: 300 }}>
                  <Typography style={{ paddingLeft: 25, paddingBottom: 10, marginTop: 10 }} variant="h6" component="div" noWrap={true}>
                    {'Offers'}
                  </Typography>
                  <div style={{width: '100%', display: 'flex'}}>
                    

                  </div>

                  <div style={{ width: '100%', backgroundColor: AppColors.themePrimaryColor, paddingTop: 3, paddingBottom: 3 }}>
                    <Typography variant="h6" component="div" textAlign={'center'} color={AppColors.themesWhiteColor}>
                      {'Continue'}
                    </Typography>
                  </div>
                  {/* {sortView()} */}
                </div>
              </CardActionArea>
            </Card>
          </div>

        </div>


      </div>
    </>
  )
}
