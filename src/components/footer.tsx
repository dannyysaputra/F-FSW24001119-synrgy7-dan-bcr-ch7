export default function Footer() {
  return (
    <footer>
      <div className="container pb-5 mb-5 mt-5">
        <div className="row">
          <div className="col-lg-3">
            <p className="fs-6 fw-lighter">
              Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
            </p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
          <div className="col-lg-2">
            <p className="fw-semibold">Our Services</p>
            <p className="fw-semibold">Why Us</p>
            <p className="fw-semibold">Testimonial</p>
            <p className="fw-semibold">FAQ</p>
          </div>
          <div className="col-lg-3 mb-4">
            <p>Connect with us</p>
            <div className="d-flex justify-content-between mt-4">
              <i
                className="fa-brands fa-facebook fa-2xl"
                style={{ color: "#0d28a6" }}
              ></i>
              <i
                className="fa-brands fa-square-instagram fa-2xl"
                style={{ color: "#0d28a6" }}
              ></i>
              <i
                className="fa-brands fa-square-twitter fa-2xl"
                style={{ color: "#0d28a6" }}
              ></i>
              <i
                className="fa-solid fa-envelope fa-2xl"
                style={{ color: "#0d28a6" }}
              ></i>
              <i
                className="fa-brands fa-twitch fa-2xl"
                style={{ color: "#0d28a6" }}
              ></i>
            </div>
          </div>
          <div className="col-lg-3 ms-lg-3">
            <p>Copyright Binar 2022</p>
            <a href="#" className="btn btn-colour-2 px-5 py-3"></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
