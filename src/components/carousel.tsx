import Flickity from "react-flickity-component";

import avatar1 from "../assets/img/img_photo (1).png";
import avatar2 from "../assets/img/img_photo.png";

import "flickity/css/flickity.css";

export default function Carousel() {
  const flickityOptions = {
    initialIndex: 1,
  };

  return (
    <Flickity
      options={flickityOptions}
    >
      <div className="gallery-cell">
        <div className="card">
          <div className="row px-lg-5 py-3">
            <div className="col-lg-3 align-self-center">
              <div className="img-wrapper">
                <img src={avatar1} alt="..." />
              </div>
            </div>
            <div className="col-lg-9">
              <div className="card-body">
                <h5 className="card-title">
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  ></i>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  ></i>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  ></i>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  ></i>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  ></i>
                </h5>
                <p className="card-text mt-3">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </p>
                <p className="fw-bold">John Dee 32, Bromo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery-cell">
        <div className="card">
          <div className="row px-lg-5 py-3">
            <div className="col-lg-3 align-self-center">
              <div className="img-wrapper">
                <img src={avatar2} alt="..." />
              </div>
            </div>
            <div className="col-lg-9">
              <div className="card-body">
                <h5 className="card-title">
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  ></i>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  ></i>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  ></i>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  ></i>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  ></i>
                </h5>
                <p className="card-text mt-3">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </p>
                <p className="fw-bold">John Dee 32, Bromo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery-cell">
        <div className="card">
          <div className="row px-lg-5 py-3">
            <div className="col-lg-3 align-self-center">
              <div className="img-wrapper">
                <img src={avatar1} alt="..." />
              </div>
            </div>
            <div className="col-lg-9">
              <div className="card-body">
                <h5 className="card-title">
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  ></i>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  ></i>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  ></i>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  ></i>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffd43b" }}
                  ></i>
                </h5>
                <p className="card-text mt-3">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </p>
                <p className="fw-bold">John Dee 32, Bromo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Flickity>
  );
}
