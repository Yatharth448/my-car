import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

export default function ImageSlider() {
    const images = [
        { url: require('../../assets/post/1.jpeg') },
        { url: require('../../assets/post/2.jpeg') },
        { url: require('../../assets/post/3.jpeg') },
        { url: require('../../assets/post/4.jpeg') },
        { url: require('../../assets/post/5.jpeg') },
        { url: require('../../assets/post/6.jpeg') },
        { url: require('../../assets/post/7.jpeg') },
      ];
    return (
       
            <div style={{borderRadius: 30, overflow: 'hidden ! important' }}>
                <SimpleImageSlider
                
                    width={'66%'}
                    // style={{borderRadius: 20, overflow: 'hidden', width: '100%'}}
                    height={204}
                    images={images}
                    showBullets={true}
                    showNavs={true}
                    // overflow={'hidden' }
                />
            </div>
       
    )
}
