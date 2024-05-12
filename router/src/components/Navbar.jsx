import { Link } from "react-router-dom"
//<button> <Link to="/contact">AI CACHORRO</Link></button>
const Navbar = () =>{
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
        </nav>       
    )
}

export default Navbar