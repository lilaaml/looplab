import { FcCheckmark } from "react-icons/fc";
import './Global.css'

const Home = () => {
  return (
    <header id="home">
      <div className="dark-overlay">
        <div className="home-inner">
          <div className="container">
            <div className="row">
              <div className="headings col-lg-8 d-lg block">
                <h1 className="display-4">Build <strong>social profiles</strong> and gain revenue & profits</h1>
                <div className="d-flex flex-row">
                  <div className="p-4 align-self-start">
                    <FcCheckmark />
                  </div>
                  <div className="p-4 align-self-end">
                    Discover customized consulting solutions to drive your company&apos;s growth and success.
                  </div>
                </div>
                <div className="d-flex flex-row">
                  <div className="p-4 align-self-start">
                    <div className="check-icon">
                      <FcCheckmark />
                    </div>
                  </div>
                  <div className="p-4 align-self-end">
                    Partner with us to navigate complex business landscapes with confidence and agility.
                  </div>
                </div>
                <div className="d-flex flex-row">
                  <div className="p-4 align-self-start">
                    <FcCheckmark />
                  </div>
                  <div className="p-4 align-self-end">
                    Leverage our industry-leading insights to achieve sustainable success and competitive advantage.
                  </div>
                </div>
              </div>

              <div className="headings col-lg-4">
                <div className="card bg-primary text-center">
                  <div className="card-body">
                    <h3 className="text-light py-2">Sign Up Today</h3>
                    <form className="card-form">
                      <div className="form-group my-2">
                        <input type="text" className="form-control form-control-lg" placeholder="Username" />
                      </div>
                      <div className="form-group my-2">
                        <input type="email" className="form-control form-control-lg" placeholder="Email" />
                      </div>
                      <div className="form-group my-2">
                        <input type="password" className="form-control form-control-lg" placeholder="Password" />
                      </div>
                      <div className="form-group my-2">
                        <input type="password" className="form-control form-control-lg" placeholder="Confirm Password" />
                      </div>
                      <input type="submit" value="Submit" className="btn btn-outline-light btn-block mt-2" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Home
