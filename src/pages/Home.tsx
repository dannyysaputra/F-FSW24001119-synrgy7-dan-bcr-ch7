import { useState } from "react";
import Carousel from "../components/carousel";

import car from "../assets/img/car.png";
import service from "../assets/img/service.png";
import checklist from "../assets/img/checklist.svg";
import icon_complete from "../assets/img/icon_complete.png";
import icon_professional from "../assets/img/icon_professional.png";
import icon_24hrs from "../assets/img/icon_24hrs.png";
import icon_price from "../assets/img/icon_price.png";

// import { Link } from "react-router-dom";

import "flickity/css/flickity.css";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import { Link } from "react-router-dom";

export default function Home() {
  const [open, setOpen] = useState("1");
  const toggle = (id: string) => {
    if (open !== id) {
      setOpen(id);
    }
  };

  return (
    <>
      <section id="hero" className="mt-5">
        <div className="hero pt-lg-5">
          <div className="d-lg-flex">
            <div className="me-auto pe-5 mb-4">
              <div className="container ms-lg-5 ps-lg-4">
                <h1 className="fs-1 fw-bold lh-lg mb-4">
                  Sewa & Rental Mobil Terbaik di Kota Bandung
                </h1>
                <p className="mb-3 fw-lighter">
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil
                  kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>
                <Link to="/cari-mobil">
                  <div className="btn">
                    <div className="custom-btn-1 py-2 px-4">
                      Mulai Sewa Mobil
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="img-car">
              <img src={car} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id="ourservices">
        <div className="container my-5">
          <div className="row">
            <div className="row justify-content-center col-lg-6 img-service py-lg-5">
              <img src={service} alt="" />
            </div>
            <div className="col-lg-6 mt-5 ps-lg-4">
              <h2 className="fw-bold lh-base">
                Best Car Rental for any kind of trip in (Lokasimu)!
              </h2>
              <p className="lg-base">
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
              <div className="d-flex">
                <img src={checklist} style={{ height: "24px" }} alt="" />
                <p className="align-self-center ms-3">
                  Sewa Mobil Dengan Supir di Bali 12 Jam
                </p>
              </div>
              <div className="d-flex">
                <img src={checklist} style={{ height: "24px" }} alt="" />
                <p className="ms-3">Sewa Mobil Lepas Kunci di Bali 12 Jam</p>
              </div>
              <div className="d-flex">
                <img src={checklist} style={{ height: "24px" }} alt="" />
                <p className="ms-3">Sewa Mobil Jangka Panjang Bulanan</p>
              </div>
              <div className="d-flex">
                <img src={checklist} style={{ height: "24px" }} alt="" />
                <p className="ms-3">Gratis Antar - Jemput Mobil di Bandara</p>
              </div>
              <div className="d-flex">
                <img src={checklist} style={{ height: "24px" }} alt="" />
                <p className="ms-3">Layanan Airport Transfer / Drop In Out</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="whyus">
        <div className="container my-5">
          <h1 className="fw-bold mb-3 mt-5 text-center text-lg-start">
            Why Us?
          </h1>
          <p className="fs-5 mb-5">Mengapa harus pilih Binar Car Rental?</p>
          <div className="row">
            <div className="col-lg-3 mb-3">
              <div className="card">
                <div className="card-body">
                  <img src={icon_complete} className="pt-2 pb-3" alt="" />
                  <h5 className="card-title fw-bold my-3">Mobil Lengkap</h5>
                  <p className="card-text mb-2">
                    Tersedia banyak pilihan mobil, kondisi masih baru, bersih
                    dan terawat
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-3">
              <div className="card">
                <div className="card-body">
                  <img src={icon_price} className="pt-2 pb-3" alt="" />
                  <h5 className="card-title fw-bold my-3">Harga Murah</h5>
                  <p className="card-text mb-2">
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan
                    rental mobil lain
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-3">
              <div className="card">
                <div className="card-body">
                  <img src={icon_24hrs} className="pt-2 pb-3" alt="" />
                  <h5 className="card-title fw-bold my-3">Layanan 24 Jam</h5>
                  <p className="card-text mb-2">
                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                    juga tersedia di akhir minggu
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <div className="card-body">
                  <img src={icon_professional} className="pt-2 pb-3" alt="" />
                  <h5 className="card-title fw-bold my-3">
                    Sopir Professional
                  </h5>
                  <p className="card-text mb-2">
                    Sopir yang profesional, berpengalaman, jujur, ramah dan
                    selalu tepat waktu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonial">
        <div className="contaier py-5 mb-5">
          <div className="row justify-content-center">
            <h1 className="col-auto fw-bold">Testimonial</h1>
          </div>
          <div className="row justify-content-center">
            <p className="col-auto mt-3">
              Berbagai review positif dari para pelanggan kami
            </p>
          </div>
          <div className="row">
            <Carousel />
          </div>
        </div>
      </section>
      <section id="banner">
        <div className="container my-5 py-5">
          <div className="d-flex text-center banner py-5">
            <div className="me-auto">
              <h1 className="fw-bold fs-1 m-5">
                Sewa Mobil di (Lokasimu) Sekarang
              </h1>
              <p className="fs-5 px-5 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="btn">
                <div className="custom-btn-1 py-2 px-4">Mulai Sewa Mobil</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="faq" className="mb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <p className="fw-bold fs-2">Frequently Asked Question</p>
              <p className="fw-lighter">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
            <div className="col-12 col-md-6">
              <Accordion open={open} toggle={toggle}>
                <AccordionItem>
                  <AccordionHeader targetId="1">
                    Apa saja syarat yang dibutuhkan?
                  </AccordionHeader>
                  <AccordionBody accordionId="1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita, quod qui. Sapiente neque rerum, placeat quisquam
                    animi veritatis ducimus sint labore nam ut fuga?
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="2">
                    Berapa hari minimal sewa mobil lepas kunci?
                  </AccordionHeader>
                  <AccordionBody accordionId="2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reiciendis omnis mollitia dignissimos asperiores quod
                    veniam, consequuntur sapiente distinctio eos accusamus
                    numquam atque! Iure, quia. Ipsa amet soluta, minus quasi
                    dolor unde odit repellat libero veritatis ab laborum
                    adipisci quis expedita nam temporibus consectetur deserunt
                    ullam voluptates vero maxime! Nostrum, ex? limit overflow.
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="3">
                    Berapa hari sebelumnya sebaiknya booking sewa mobil?
                  </AccordionHeader>
                  <AccordionBody accordionId="3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus enim perferendis quo minima dolore dicta nobis ut
                    laborum expedita libero.
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="4">
                    Apakah Ada biaya antar-jemput?
                  </AccordionHeader>
                  <AccordionBody accordionId="4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nobis qui mollitia esse, at eveniet quidem quas molestias
                    autem minus fugit asperiores minima harum ut, suscipit
                    soluta eaque adipisci doloribus deleniti. Sit deserunt
                    blanditiis animi possimus?
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="5">
                    Bagaimana jika terjadi kecelakaan?
                  </AccordionHeader>
                  <AccordionBody accordionId="5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Maxime impedit dolorem dolorum consequuntur error eum
                    doloribus! Iste quasi culpa ab consequuntur enim, vero
                    consequatur vel accusamus dolore ipsum ullam, sint suscipit
                    necessitatibus molestiae dolores nesciunt at voluptas.
                    Dignissimos, corporis possimus.
                  </AccordionBody>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
