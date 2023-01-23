import logo from './logo.png';
function Mainmenu() {
 return (
    <nav className='main-menu'>
        <div className='logo'>
            <img src={logo}></img>
        </div>
        <input type='text' className='search-input' placeholder='მოძებნეთ სასურველი პროდუქცია ...'></input>
        <input type='button' className='search-button' value='კატეგორიები'></input>
    </nav>
 );
}

export default Mainmenu;