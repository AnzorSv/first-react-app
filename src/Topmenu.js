import cart from './img/cart.png';
import user from './img/user.png'

function Topmenu() {
 return (
   <nav className="top-navbar">
   <ul>
       <li>ხშირად დასმული კითხვები</li>
       <li>მისია</li>
       <li>ანგარიშის შექმნა</li>
       <li>მაღაზიის შექმნა</li>
       <li>მაღაზიები</li>
   </ul>
   <ul>
      <li><img src={cart}></img></li>
      <li><img src={user}></img></li>
      <div className="rounded-full bg-slate-50 shadow-xl p-5">dsdsd</div>
      
   </ul>
 </nav>
 );
}

export default Topmenu;