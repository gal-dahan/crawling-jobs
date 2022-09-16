import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Jobs Israel</h1>
        </Link>
        <Link to="/CompaniesList" >
          <h3>Companies List</h3>
        </Link>
        <Link to="/about">
          <h3>About us</h3>
        </Link>
      </div>
      
    </header>
  )
}

export default Navbar