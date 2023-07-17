import React from 'react'
import { Grid, Card, CardActions, CardContent, CardMedia, Button, Typography, styled, CardActionArea } from '@mui/material';
import { AppColors } from '../../components/themes/color';
import { BorderColor } from '@mui/icons-material';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function gridVertical(carItemDataArray) {


    const gridItem = (itemData, idx) => {
        return (
            <Grid item lg={3} sm={6} xs={12} md={3} id={idx}>
                <Card sx={{ maxWidth: 345, borderRadius: 3, overflow: 'hidden', border: '1px solid #e0e0e0' }} elevation={0}>
                    <CardActionArea elevation={0} >
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="160"
                            image={itemData.carImg}
                        />
                        <div style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5 }}>
                            <Typography variant="h6" component="div" noWrap={true}>
                                {itemData.carName + ' ' + itemData.modalYear}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {itemData.transmission + " . " + itemData.fuel + " . " + itemData.seater + ' Seats'}
                            </Typography>
                        </div>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <div style={{ width: '92%', height: 1, backgroundColor: AppColors.themeSeperatorColor }}>

                            </div>
                        </div>

                        <div style={{ paddingLeft: 10, paddingTop: 10 }}>
                            <Typography variant="body3" component="div" noWrap={true}>
                                {itemData.availabilityDate}
                            </Typography>
                            <Typography variant="h6" component="div">
                                {itemData.price}
                            </Typography>
                        </div>

                        <CardActions style={{ justifyContent: 'center' }}>
                            {/* <Button size="small">Share</Button> */}
                            <Button style={{ backgroundColor: AppColors.themePrimaryColor, color: 'white', width: '100%' }} size="small">BOOK NOW</Button>
                        </CardActions>
                    </CardActionArea>
                </Card>

            </Grid>
        )
    }


  return (
      <div style={{ flex: .75 }}>

          <Grid container spacing={2} padding={2}>
              {
                  carItemDataArray.map((itemData, idx) =>

                      gridItem(itemData)
                  )
              }
          </Grid>
      </div>
  )
}
