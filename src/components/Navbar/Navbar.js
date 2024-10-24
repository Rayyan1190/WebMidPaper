// import React from 'react'
// import './Navbar.css'
// const Navbar = () => {
//   return (
//     <nav className='navbar'>
//         <div className="left">
//             <span>IMBD</span>
//         </div>
//         <div className="searchbar">
//             <form action="">
//                 <input type="text" />
//             </form>
//         </div>
//         <div className="right">
//             {/* <span>action</span>
//             <span>horror</span>
//             <span>romantic</span> */}
//             <a href="#">Action</a>
//             <a href="#">Horror</a>
//             <a href="#">romantic</a>
//         </div>
//     </nav>
//   )
// }

// export default Navbar




import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ setSearchQuery }) {
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <nav className="navbar">
      <h1>Movie App</h1>
      <input
        type="text"
        placeholder="Search for a movie..."
        onChange={handleSearch}
        className="search-bar"
      />
      <div>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </nav>
  );
}

export default Navbar;