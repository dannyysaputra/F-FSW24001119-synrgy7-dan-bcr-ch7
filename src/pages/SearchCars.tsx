import car from "../assets/img/car.png";
import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Col, Row, Button } from "reactstrap";

export default function SearchCars() {
  const [tipeDriver, setTipeDriver] = useState<string>("");
  const [startDate, setStartDate] = useState<Date>(new Date()); // Preset to today

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    switch (name) {
      case "tipeDriver":
        setTipeDriver(value as string); // Type assertion for clarity
        break;
      case "startDate":
        setStartDate(new Date(value as string)); // Ensure valid date format
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Implement form submission logic here (e.g., send data to backend)
    console.log("Submitted search form:", {
      tipeDriver,
      startDate,
      // Include other form field values if needed
    });
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
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label className="ms-1 mb-2 fw-light">Tipe Driver</Label>
                      <Input
                        type="select"
                        name="tipeDriver"
                        id="tipeDriver"
                        value={tipeDriver}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled hidden>
                          Pilih Tipe Driver
                        </option>
                        <option value="dengan-sopir">Dengan Sopir</option>
                        <option value="tanpa-sopir">
                          Tanpa Sopir (Lepas Kunci)
                        </option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label className="ms-1 mb-2 fw-light">Tanggal</Label>
                      <Input
                        className="py-2"
                        type="date"
                        name="startDate"
                        id="datepicker"
                        value={startDate.toISOString().substring(0, 10)}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label className="ms-1 mb-2 fw-light">
                        Waktu Jemput/Ambil
                      </Label>
                      <Input
                        className="py-2"
                        type="time"
                        name="waktuAmbil"
                        id="waktuAmbil"
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label className="ms-1 mb-2 fw-light">
                        Jumlah Penumpang (optional)
                      </Label>
                      <Input
                        className="py-2"
                        type="number"
                        name="jumlahPenumpang"
                        id="jumlahPenumpang"
                        placeholder="Jumlah Penumpang"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="my-auto">
                    <Button
                      type="submit"
                      className="px-4 custom-btn-1"
                      style={{
                        backgroundColor: "#5CB85F",
                        borderColor: "#5CB85F",
                      }}
                    >
                      Cari Mobil
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
