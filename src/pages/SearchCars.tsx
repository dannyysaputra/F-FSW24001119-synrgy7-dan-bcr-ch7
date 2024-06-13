import car from "../assets/img/car.png";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  Button,
  Card,
  CardBody,
  CardText,
} from "reactstrap";

interface Car {
  id: string;
  image: string;
  manufacture: string;
  model: string;
  description: string;
  capacity: number;
  transmission: string;
  year: number;
  typeDriver: string;
  availableAt: string;
}

export default function SearchCars() {
  const [tipeDriver, setTipeDriver] = useState<string>("");
  const [startDate, setStartDate] = useState<Date>(new Date()); // Preset to today
  const [waktuAmbil, setWaktuAmbil] = useState<string>("");
  const [jumlahPenumpang, setJumlahPenumpang] = useState<string>("");
  const [cars, setCars] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/v1/cars", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }

        const result = await response.json();
        setCars(result.data);
        setFilteredCars(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    switch (name) {
      case "tipeDriver":
        setTipeDriver(value);
        break;
      case "startDate":
        setStartDate(new Date(value));
        break;
      case "waktuAmbil":
        setWaktuAmbil(value);
        break;
      case "jumlahPenumpang":
        setJumlahPenumpang(value);
        break;
      default:
        break;
    }
  };

  const getStartDate = (isoDateString: string): Date => {
    return new Date(isoDateString);
  };

  const getWaktuAmbil = (isoDateString: string): string => {
    const date = new Date(isoDateString);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Filter cars based on search criteria
    const filtered = cars.filter((car) => {
      const matchesTipeDriver =
        tipeDriver === "" || car.typeDriver === tipeDriver;
      const matchesStartDate =
        startDate === null || getStartDate(car.availableAt) >= startDate;
      const matchesWaktuAmbil =
        waktuAmbil === "" || getWaktuAmbil(car.availableAt) === waktuAmbil;
      const matchesJumlahPenumpang =
        jumlahPenumpang === "" || car.capacity >= parseInt(jumlahPenumpang);

      return (
        (matchesTipeDriver && matchesStartDate && matchesWaktuAmbil) ||
        matchesJumlahPenumpang
      );
    });

    setFilteredCars(filtered);
    setIsFiltered(true);
    toast.success("Cars filtered successfully!");
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
                        value={waktuAmbil}
                        onChange={handleChange}
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
                        value={jumlahPenumpang}
                        onChange={handleChange}
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
      {/* Display filtered cars */}
      <section id="filtered-cars">
        {isFiltered && (
          <div className="container">
            <div className="row row-cols-3">
              {filteredCars.map((car) => (
                <div className="col mb-5" key={car.id}>
                  <Card style={{ height: "600px" }}>
                    <img
                      className="p-3"
                      alt="Card"
                      src={car.image}
                      style={{ height: "300px", objectFit: "cover" }}
                    />
                    <CardBody className="mt-3">
                      <CardText>
                        <p>
                          {car.manufacture} / {car.model}
                        </p>
                        <p className="">{car.description}</p>
                        <div className="d-flex gap-2">
                          <div>
                            <i className="fa-solid fa-users"></i>
                          </div>
                          <p>{car.capacity} orang</p>
                        </div>
                        <div className="d-flex gap-2">
                          <div>
                            <i className="fa-solid fa-gear"></i>
                          </div>
                          <p>{car.transmission}</p>
                        </div>
                        <div className="d-flex gap-2">
                          <div>
                            <i className="fa-regular fa-calendar"></i>
                          </div>
                          <p>Tahun {car.year}</p>
                        </div>
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
