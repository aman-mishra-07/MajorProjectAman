import { Navbar } from "flowbite-react"
import { Link } from "react-router-dom"
import Logo from "../assets/logo.png"

export default function Flownavbar() {
  return (
    <>
      <Navbar fluid={true} rounded={true} className="shadow sticky top-0 z-50">
        <Navbar.Brand>
          <img
            src={Logo}
            className="mr-3 h-6 sm:h-9 rounded-full"
            alt="PVC Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            PVC STUDIO
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link
          >
            <Link to='/' >Home</Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to='/About'>About  </Link>

          </Navbar.Link>
          <Navbar.Link>
            <Link to='/services'>
              Services
            </Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to='/pricing'>Pricing</Link>
          </Navbar.Link>
          <Navbar.Link>
          <Link to='/contact'>
            Contact
          </Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}