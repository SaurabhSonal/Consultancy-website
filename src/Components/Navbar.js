import { Link } from "react-router-dom";
const Navbar=()=> {

  const icon_style = {
    height:60,
  }
  return (
    <>
      <nav className="container mx-auto flex item-center justify-between py-4">
        <Link to="/">
        <img style={icon_style} src="image/AAE.png" alt="Logo" />
        </Link>
        <ul className="navigation">
          <li><Link to="/">Home</Link></li>
          <li className="navleft"><Link to="/About">About</Link></li>
          <li className="navleft"><Link to="/ContactUs">ContactUs</Link></li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;