import logo from './logo.png';
import caticon from './img/caticon.png'

function Mainmenu() {
 return (
    <nav className='main-menu'>
        <div className='logo'>
            <img src={logo}></img>
        </div>
        <input type='text' className='search-input' placeholder='მოძებნეთ სასურველი პროდუქცია ...'></input>
        <div type='button' className='search-button' >კატეგორიები <img src={caticon}></img></div>
    </nav>
 );
}

export default Mainmenu;