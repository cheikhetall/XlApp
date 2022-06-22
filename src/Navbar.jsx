import { Link } from "react-router-dom";

const Navbar = () => {
   
    return (  
        <div className='Navbar' > 
   <Link to="/"> ok</Link>
   <Link to="Signup">register</Link>
   <Link to="Home">Home</Link>
        </div>
    );
}
 
export default Navbar;