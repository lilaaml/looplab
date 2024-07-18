import './Global.css'

const Footer = () => {
  return (
    <div id="footer" className="py-5">
      <div className="container">
        <div className="text-sm-start text-center">
            <section className="d-flex justify-content-between p-4">
                <div className="me-5">
                    <span className="fw-bold">LoopLab</span>
                </div>
                <div className="links">
                    <span>Legal and privacy</span>
                    <span>Connect with us</span>
                    <span>Our locations</span>
                    <span>Site map</span>
                    <span>Cookies information</span>
                </div>
            </section>

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
