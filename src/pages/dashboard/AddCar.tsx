import {
  Alert,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
} from "reactstrap";
import "./../../style.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  plate: string;
  manufacture: string;
  model: string;
  image: File | null;
  rentPerDay: number;
  capacity: number;
  description: string;
  transmission: string;
  type: string;
  typeDriver: string;
  year: number;
  availableAt: string;
  available: boolean;
  options: string[];
  specs: string[];
}

export default function AddCar() {
  const navigate = useNavigate();

  const userDataString = localStorage.getItem("user");
  const user = userDataString ? JSON.parse(userDataString) : null;

  const [formData, setFormData] = useState<FormData>({
    plate: "",
    manufacture: "",
    model: "",
    image: null,
    rentPerDay: 0,
    capacity: 0,
    description: "",
    transmission: "",
    type: "",
    typeDriver: "",
    year: 0,
    availableAt: "",
    available: true,
    options: [],
    specs: [],
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = event.target;

    if (type === "file") {
      const file = event.target.files?.[0]; // Ambil file gambar (gunakan [0] karena biasanya hanya satu file yang diizinkan)

      // Simpan file gambar dalam state atau lakukan sesuai kebutuhan Anda
      setFormData({
        ...formData,
        image: file || null,
      });
    } else if (name === "options" || name === "specs") {
      const updatedValues = event.target.checked
        ? [...formData[name], value]
        : formData[name].filter((item) => item !== value);

      setFormData({
        ...formData,
        [name]: updatedValues,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      if (!user.token) {
        throw new Error("No token found");
      }

      console.log(user.token);

      const formDataToSend = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        if (key === "image" && value instanceof File) {
          formDataToSend.append(key, value);
        } else if (key === "options" || key === "specs") {
          // Jika value adalah array, Anda perlu memprosesnya sesuai dengan format yang diharapkan oleh server
          formDataToSend.append(key, JSON.stringify(value));
        } else {
          formDataToSend.append(key, value); // Tambahkan nilai tanpa JSON.stringify
        }
      });

      console.log(formDataToSend);

      const response = await fetch("http://localhost:5000/api/v1/cars", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        body: formDataToSend,
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server error:", errorData.message);
        toast.error(errorData.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        const data = await response.json();
        console.log("Success:", data);
        localStorage.setItem("carCreated", "true");
        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="d-flex gap-2 my-3" style={{ fontSize: "12px" }}>
        <p className="fw-semibold">Cars</p>
        <div>
          <i className="fa-solid fa-angle-right"></i>
        </div>
        <p className="fw-semibold">List Car</p>
        <div>
          <i className="fa-solid fa-angle-right"></i>
        </div>
        <p style={{ fontWeight: "lighter" }}>Add New Car</p>
      </div>
      <div className="fw-bold fs-3 my-3">Add New Car</div>

      <div className="bg-white py-5 px-3 row">
        <div className="col-8">
          <Form onSubmit={handleSubmit}>
            <FormGroup row>
              <Label for="plate" sm={2}>
                <div className="d-flex">
                  Plat <p className="text-danger">*</p>
                </div>
              </Label>
              <Col sm={10}>
                <Input
                  id="plate"
                  name="plate"
                  placeholder="Masukkan plat kendaraaan..."
                  type="text"
                  value={formData.plate}
                  onChange={handleInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="manufacture" sm={2}>
                <div className="d-flex">
                  Manufaktur <p className="text-danger">*</p>
                </div>
              </Label>
              <Col sm={10}>
                <Input
                  id="manufacture"
                  name="manufacture"
                  placeholder="Masukkan manufaktur mobil..."
                  type="text"
                  value={formData.manufacture}
                  onChange={handleInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="model" sm={2}>
                <div className="d-flex">
                  Model <p className="text-danger">*</p>
                </div>
              </Label>
              <Col sm={10}>
                <Input
                  id="model"
                  name="model"
                  placeholder="Masukkan model mobil..."
                  type="text"
                  value={formData.model}
                  onChange={handleInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="image" sm={2}>
                <div className="d-flex">
                  Foto <p className="text-danger">*</p>
                </div>
              </Label>
              <Col sm={10}>
                <Input
                  id="image"
                  name="image"
                  type="file"
                  onChange={handleInputChange}
                />
                <FormText>File size max. 2MB</FormText>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="rentPerDay" sm={2}>
                <div className="d-flex">
                  Harga <p className="text-danger">*</p>
                </div>
              </Label>
              <Col sm={10}>
                <Input
                  id="rentPerDay"
                  name="rentPerDay"
                  placeholder="Masukkan harga sewa..."
                  type="number"
                  value={formData.rentPerDay}
                  onChange={handleInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="capacity" sm={2}>
                <div className="d-flex">
                  Kapasitas <p className="text-danger">*</p>
                </div>
              </Label>
              <Col sm={10}>
                <Input
                  id="capacity"
                  name="capacity"
                  placeholder="Masukkan Kapasitas mobil..."
                  type="number"
                  value={formData.capacity}
                  onChange={handleInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="description" sm={2}>
                <div className="d-flex">
                  Deskripsi <p className="text-danger">*</p>
                </div>
              </Label>
              <Col sm={10}>
                <Input
                  id="description"
                  name="description"
                  placeholder="Masukkan Deskripsi mobil..."
                  type="text"
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="transmission" sm={2}>
                <div className="d-flex">
                  Transmisi <p className="text-danger">*</p>
                </div>
              </Label>
              <Col sm={10}>
                <Input
                  id="transmission"
                  name="transmission"
                  placeholder="Masukkan Transmisi mobil..."
                  type="text"
                  value={formData.transmission}
                  onChange={handleInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="type" sm={2}>
                <div className="d-flex">
                  Tipe <p className="text-danger">*</p>
                </div>
              </Label>
              <Col sm={10}>
                <Input
                  id="type"
                  name="type"
                  placeholder="Masukkan tipe mobil..."
                  type="text"
                  value={formData.type}
                  onChange={handleInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="typeDriver" sm={2}>
                <div className="d-flex">
                  Tipe Driver <p className="text-danger">*</p>
                </div>
              </Label>
              <Col sm={10}>
                <Input
                  id="typeDriver"
                  name="typeDriver"
                  type="select"
                  value={formData.typeDriver}
                  onChange={handleInputChange}
                >
                  <option value={""} disabled>
                    Pilih tipe driver
                  </option>
                  <option value={"dengan-driver"}>Dengan driver</option>
                  <option value={"tanpa-driver"}>Tanpa driver</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="year" sm={2}>
                <div className="d-flex">
                  Tahun <p className="text-danger">*</p>
                </div>
              </Label>
              <Col sm={10}>
                <Input
                  id="year"
                  name="year"
                  placeholder="Masukkan tahun mobil..."
                  type="number"
                  value={formData.year}
                  onChange={handleInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="availableAt" sm={2}>
                Available at
              </Label>
              <Col sm={10}>
                <Input
                  id="availableAt"
                  name="availableAt"
                  placeholder="date placeholder"
                  type="date"
                  value={formData.availableAt}
                  onChange={handleInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="options" sm={2}>
                Options
              </Label>
              <Col sm={10}>
                {[
                  "Moonroof/Sunroof",
                  "Cassette Player",
                  "Antilock Brakes",
                  "Memory Seats",
                  "MP3 (Single Disc)",
                  "Leather Interior",
                  "CD (Single Disc)",
                ].map((option) => (
                  <FormGroup check key={option}>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="options"
                        value={option}
                        checked={formData.options.includes(option)}
                        onChange={handleInputChange}
                      />{" "}
                      {option}
                    </Label>
                  </FormGroup>
                ))}
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="specs" sm={2}>
                Spesifications
              </Label>
              <Col sm={10}>
                {[
                  "All-position 3-point seat belts -inc: outboard pretensioners & force limiters, dual front pwr shoulder height adjusters, rear outboard emergency auto locking retractors, driver emergency locking retractor",
                  "Body color door handles",
                  "Front & rear passenger folding assist grips",
                  "Rear-window defogger w/auto-off timer",
                  "160-amp alternator",
                  "Battery saver",
                  "First aid kit",
                  "Immobilizer system",
                ].map((spec) => (
                  <FormGroup check key={spec}>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="specs"
                        value={spec}
                        checked={formData.specs.includes(spec)}
                        onChange={handleInputChange}
                      />{" "}
                      {spec}
                    </Label>
                  </FormGroup>
                ))}
              </Col>
            </FormGroup>
            <div className="d-flex my-5 gap-3">
              <div className="btn">
                <div className="cancel-btn d-flex fw-semibold py-3 px-4">
                  <p className="mb-0">Cancel</p>
                </div>
              </div>
              <button type="submit" className="btn">
                <div className="save-btn d-flex fw-semibold py-3 px-4">
                  <p className="mb-0">Save</p>
                </div>
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
