import './Global.css'

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid space-between">
        <a href="/" className="fw-bold navbar-brand">LoopLab</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About Us</a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link">Services</a>
            </li>
            <li className="nav-item">
              <a href="#industries" className="nav-link">Industries</a>
            </li>
            <li className="nav-item dropdown">
              <a href="/" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Careers</a>
              <ul className="dropdown-menu">
                <li><a href="/" className="dropdown-item">Current Openings</a></li>
                <li><a href="/" className="dropdown-item">Internship Programs</a></li>
                <li><a href="/" className="dropdown-item">Employee Benefits</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a href="/" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Insights</a>
              <ul className="dropdown-menu">
                <li><a href="/" className="dropdown-item">Blog</a></li>
                <li><a href="/" className="dropdown-item">Case Studies</a></li>
                <li><a href="/" className="dropdown-item">Whitepapers</a></li>
                <li><a href="/" className="dropdown-item">Webinars & Events</a></li>
                <li><a href="/" className="dropdown-item">News & Updates</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a href="/" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Contact Us</a>
              <ul className="dropdown-menu">
                <li><a href="/" className="dropdown-item">Get in Touch</a></li>
                <li><a href="/" className="dropdown-item">Office Locations</a></li>
                <li><a href="/" className="dropdown-item">Request a Consultation</a></li>
                <li><a href="/" className="dropdown-item">FAQs</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
