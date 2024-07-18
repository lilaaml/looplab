import { FcCheckmark } from "react-icons/fc";
import './Global.css'

const Services = () => {
  return (
    <div id="services" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="services.png" className="img-fluid mb-3 rounded-circle" />
          </div>
          <div className="col-md-6">
            <h1 className="display-6">Services</h1>
            <p>Discover our comprehensive range of consulting solutions designed to drive your business success and growth.</p>
            <div className="d-flex flex-row">
              <div className="p-2 align-self-start">
                <FcCheckmark />
              </div>
              <div className="p-2 align-self-end">
                Comprehensive Business Consulting
              </div>
            </div>
            <div className="d-flex flex-row">
              <div className="p-2 align-self-start">
                <FcCheckmark />
              </div>
              <div className="p-2 align-self-end">
                IT & Digital Transformation
              </div>
            </div>
            <div className="d-flex flex-row">
              <div className="p-2 align-self-start">
                <FcCheckmark />
              </div>
              <div className="p-2 align-self-end">
                Financial Advisory
              </div>
            </div>
            <div className="d-flex flex-row">
              <div className="p-2 align-self-start">
                <FcCheckmark />
              </div>
              <div className="p-2 align-self-end">
                Human Resources Consulting
              </div>
            </div>
            <div className="d-flex flex-row">
              <div className="p-2 align-self-start">
                <FcCheckmark />
              </div>
              <div className="p-2 align-self-end">
                Marketing & Sales
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
