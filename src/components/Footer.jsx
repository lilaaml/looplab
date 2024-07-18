import './Global.css'

const Footer = () => {
  return (
    <div id="footer" className="py-5">
      <div className="container">
        <div className="text-sm-start text-center">
            <div className="row">
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h4 className="fw-bold">LoopLab</h4>
                </div>
                <div className="links col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <p>Legal and privacy</p>
                    <p>Connect with us</p>
                    <p>Our locations</p>
                    <p>Site map</p>
                    <p>Cookies information</p>
                </div>
            </div>

            <div className="d-flex flex-column text-center mt-3">
                <span>&copy; 2020 - 2024 LoopLab. All rights reserved.</span>
                <span className="mt-3">Developed by Lila Amelia</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
