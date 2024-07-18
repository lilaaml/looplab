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
              <a href="/" className="nav-link">About Us</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">Services</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">Industries</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">Careers</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
