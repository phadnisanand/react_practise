import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
       <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                      <li className="nav-item active">
                          <Link className="nav-link" to="/">Home</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/blogs">Blogs</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/compint">Component Interaction</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/uncontrolledcomp">Uncontrolled Component</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/unrelcomp">Unrelated component</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/contact">Contact</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/hooksdemo">Hooks demo</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/fetchdemo">Fetch API demo</Link>
                      </li>
                  </ul>
              </div>
          </nav>
        </header>
          
        <main role="main"><Outlet /></main>
         
        <footer className="mt-auto">
          <p>Copyright © 2024 </p>
            <p>
              <a href="#">About</a> -
              <a href="#">Privacy Policy</a> -
              <a href="#">Contact Us</a>
            </p>
        </footer>
    </div>
  )
};

export default Layout;