import car from "../assets/img/car.png";

export default function SearchCars() {
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
              </div>
            </div>
            <div className="img-car">
              <img src={car} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id="search-car">
        <div className="container px-5 mb-5">
          <div className="card shadow py-2 bg-body-tertiary rounded search-card">
            <div className="card-body">
              {/* <form action=""> */}
              <div className="row">
                <div className="col">
                  <label className="ms-1 mb-2 fw-light">Tipe Driver</label>
                  <select
                    className="form-select form-select-sm fw-light"
                    id="tipeDriver"
                    required
                  >
                    <option selected disabled hidden>
                      Pilih Tipe Driver
                    </option>
                    <option value="dengan-sopir">Dengan Sopir</option>
                    <option value="tanpa-sopir">
                      Tanpa Sopir (Lepas Kunci)
                    </option>
                  </select>
                </div>
                <div className="col">
                  <label className="ms-1 mb-2 fw-light">Tanggal</label>
                  <input id="datepicker" placeholder="Pilih Tanggal" required />
                </div>
                <div className="col">
                  <label className="ms-1 mb-2 fw-light">
                    Waktu Jemput/Ambil
                  </label>
                  <input type="time" id="waktuAmbil" className="form-control" />
                </div>
                <div className="col">
                  <label className="ms-1 mb-2 fw-light">
                    Jumlah Penumpang (optional)
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Jumlah Penumpang"
                    id="jumlahPenumpang"
                  />
                </div>
                <div className="col mt-3">
                  <button type="submit" className="custom-btn-1 py-2 px-4">
                    Cari Mobil
                  </button>
                </div>
              </div>
              {/* </form> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
