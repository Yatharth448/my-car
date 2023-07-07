import * as React from 'react';
import Topbar from '../../components/topbar/Topbar';
import filter from '../../components/filters/filter';
import gridVertical from '../../components/grid/gridVertical';

export default function CarList() {
    const carItemDataArray = [
        {
            carImg: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Seltos/6226/1679395459776/front-left-side-47.jpg?imwidth=420&impolicy=resize',
            rating: '4',
            carName: 'Kia Seltos',
            modalYear: '2021',
            transmission: 'Manual',
            fuel: 'Petrol',
            seater: '5',
            availabilityDate: 'Available from 7 July',
            price: '₹550/hr',
            currentLocation: 'Gaur City',

        },
        {
            carImg: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220526115712_Kia%20EV6%20e_SUV.jpg&w=700&q=90&c=1',
            rating: '4',
            carName: 'Kia EV 6',
            modalYear: '2022',
            transmission: 'Manual',
            fuel: 'Petrol',
            seater: '5',
            availabilityDate: 'Available from 7 July',
            price: '₹550/hr',
            currentLocation: 'Gaur City',

        },
        {
            carImg: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/41205/carnival-exterior-right-front-three-quarter-55.jpeg?isig=0&q=75',
            rating: '4',
            carName: 'Kia Carnival',
            modalYear: '2022',
            transmission: 'Manual',
            fuel: 'Petrol',
            seater: '9',
            availabilityDate: 'Available from 7 July',
            price: '₹550/hr',
            currentLocation: 'Gaur City',

        },
        {
            carImg: 'https://www.carblogindia.com/wp-content/uploads/2022/07/2022-maruti-brezza-dark-edition.jpg',
            rating: '4',
            carName: 'Maruti Brezza',
            modalYear: '2021',
            transmission: 'Manual',
            fuel: 'Petrol',
            seater: '5',
            availabilityDate: 'Available from 7 July',
            price: '₹550/hr',
            currentLocation: 'Gaur City',

        },
        {
            carImg: 'https://imgd.aeplcdn.com/0x0/n/cw/ec/39015/punch-exterior-left-front-three-quarter-4.jpeg?isig=0',
            rating: '4',
            carName: 'Tata Punch',
            modalYear: '2021',
            transmission: 'Manual',
            fuel: 'Petrol',
            seater: '5',
            availabilityDate: 'Available from 7 July',
            price: '₹550/hr',
            currentLocation: 'Gaur City',

        },
        {
            carImg: 'https://imgd-ct.aeplcdn.com/1056x660/n/qdeom4a_1526945.jpg?q=75',
            rating: '4',
            carName: 'Tata Altroz',
            modalYear: '2020',
            transmission: 'Manual',
            fuel: 'Petrol',
            seater: '5',
            availabilityDate: 'Available from 7 July',
            price: '₹550/hr',
            currentLocation: 'Gaur City',

        }
    ]




    return (
        <>
            <Topbar />
            <div style={{ flex: 1, flexDirection: 'row', display: 'flex', width: '100%' }}>

                {filter()}
                {gridVertical(carItemDataArray)}

            </div>
        </>

    )
}
