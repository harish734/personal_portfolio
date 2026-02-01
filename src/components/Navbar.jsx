import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>HR PORTFOLIO</h1>
        <ul>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </ul>
    </div>
  )
}

export default Navbar