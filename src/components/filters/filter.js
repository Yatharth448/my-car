import React from 'react'
import { Grid, Card, CardActions, CardContent, CardMedia, Button, Typography, styled, CardActionArea } from '@mui/material';
import { AppColors } from '../themes/color';
export default function filter() {
    return (
        <div style={{ flex: .3, paddingTop: 15, paddingRight: 0 }}>
            <Card sx={{ maxWidth: '100%' }}>
                <CardActionArea>
                    <div style={{ width: '100%', height: 500 }}>
                        <div style={{ width: '100%', backgroundColor: AppColors.themePrimaryColor, paddingTop: 3, paddingBottom: 3, justifyContent: 'center' }}>
                            <Typography variant="h6" component="div">
                                {'Filters'}
                            </Typography>
                        </div>
                    </div>
                </CardActionArea>
            </Card>
        </div>
    )
}
