import shoesimg from '../img/shoes.png';

function Bannerone(props) {
    return (
        <div className='banner-one px-10 text-white flex md:flex-row sm:flex-col justify-between items-center'>
            <div>
                <p>{props.title}</p>
                <p>და მიიიღე მეორე</p>
                <h1 style={{fontSize: '36px', fontWeight: 800}}>საჩუქრად</h1>
                <div className='bg-white text-black px-4 py-2 rounded-full inline-block'>იყიდე ახლავე</div>
            </div>
            <img src={shoesimg}></img>
        </div>
    );
}

export default Bannerone;