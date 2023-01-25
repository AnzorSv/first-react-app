import Bannerone from './banners/Bannerone';
import Bannertwo from './banners/Bannertwo';
import Bannerthree from './banners/Bannerthree';
import Bannertfour from './banners/Bannerfour';
import Bannerfive from './banners/Bannerfive';
import Bannersix from './banners/Bannersix';
import Bannerseven from './banners/Bannerseven';
import Bannereight from './banners/Bannereight';
import './Topbanner.css';


let banners = [
    {
        id: 1,
        title: 'Banner1',
        backgroundImg: 'https://i.picsum.photos/id/638/300/300.jpg?hmac=zK8CIKFdSqCYNZhdN5js6S4r6-UxVGSJ2HlT70Bp3og'
    },
    {
        id: 2,
        title: 'Banner2',
        backgroundImg: 'https://i.picsum.photos/id/638/300/300.jpg?hmac=zK8CIKFdSqCYNZhdN5js6S4r6-UxVGSJ2HlT70Bp3og'
    },
    {
        id: 3,
        title: 'Banner3',
        backgroundImg: 'https://i.picsum.photos/id/638/300/300.jpg?hmac=zK8CIKFdSqCYNZhdN5js6S4r6-UxVGSJ2HlT70Bp3og'
    },
    {
        id: 4,
        title: 'Banner4',
        backgroundImg: 'https://i.picsum.photos/id/638/300/300.jpg?hmac=zK8CIKFdSqCYNZhdN5js6S4r6-UxVGSJ2HlT70Bp3og'
    },
    {
        id: 5,
        title: 'Banner5',
        backgroundImg: 'https://i.picsum.photos/id/638/300/300.jpg?hmac=zK8CIKFdSqCYNZhdN5js6S4r6-UxVGSJ2HlT70Bp3og'
    },
    {
        id: 6,
        title: 'Banner6',
        backgroundImg: 'https://i.picsum.photos/id/638/300/300.jpg?hmac=zK8CIKFdSqCYNZhdN5js6S4r6-UxVGSJ2HlT70Bp3og'
    },
    {
        id: 7,
        title: 'Banner7',
        backgroundImg: 'https://i.picsum.photos/id/638/300/300.jpg?hmac=zK8CIKFdSqCYNZhdN5js6S4r6-UxVGSJ2HlT70Bp3og'
    },
    {
        id: 8,
        title: 'Banner8',
        backgroundImg: 'https://i.picsum.photos/id/638/300/300.jpg?hmac=zK8CIKFdSqCYNZhdN5js6S4r6-UxVGSJ2HlT70Bp3og'
    }
];
console.log(banners[0].id)

function Topbanner() {
    return (
        <div className='md:px-20 sm:p-4'>
        <div className='md:p-10  bg-sky-50' style={{borderRadius:'30px'}}>
            <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-6">
                <Bannerone title={banners[0].title}></Bannerone>
                <Bannertwo></Bannertwo>
                <Bannerthree></Bannerthree>
                <Bannertfour></Bannertfour>
                <Bannerfive></Bannerfive>
                <Bannersix></Bannersix>
                <Bannerseven></Bannerseven>
                <Bannereight></Bannereight>
            </div>
        </div>
        </div>
        
    );
}

export default Topbanner;