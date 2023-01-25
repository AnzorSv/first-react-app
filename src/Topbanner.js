import Bannerone from './banners/Bannerone';
import Bannertwo from './banners/Bannertwo';
import Bannerthree from './banners/Bannerthree';
import Bannertfour from './banners/Bannerfour';
import Bannerfive from './banners/Bannerfive';
import Bannersix from './banners/Bannersix';
import Bannerseven from './banners/Bannerseven';
import Bannereight from './banners/Bannereight';
import './Topbanner.css';

function Topbanner() {
    return (
        <div className='px-20'>
        <div className='md:p-10  bg-sky-50' style={{borderRadius:'30px'}}>
            <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
                <Bannerone></Bannerone>
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