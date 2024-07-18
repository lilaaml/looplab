import { FcCheckmark } from "react-icons/fc";
import './Global.css'

const Careers = () => {
  return (
    <div id="careers" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="display-6">Careers</h1>
            <p>Join our dynamic team and unlock your potential with exciting opportunities for growth and innovation.</p>
            <div className="d-flex flex-row">
              <div className="p-3 align-self-start">
                <FcCheckmark />
              </div>
              <div className="p-3 align-self-end">
                Exciting Opportunities
              </div>
            </div>
            <div className="d-flex flex-row">
              <div className="p-3 align-self-start">
                <FcCheckmark />
              </div>
              <div className="p-3 align-self-end">
                Supportive Environment
              </div>
            </div>
            <div className="d-flex flex-row">
              <div className="p-3 align-self-start">
                <FcCheckmark />
              </div>
              <div className="p-3 align-self-end">
                Comprehensive Benefits
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="services.png" className="img-fluid mb-3 rounded-circle" />
          </div>
        </div>
        <a href="/" className="btn">Join Us</a>
      </div>
    </div>
  )
}

export default Careers
