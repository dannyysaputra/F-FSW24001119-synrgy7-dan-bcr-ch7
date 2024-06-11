import { ChangeEvent, FormEvent, useState } from "react";
import {
  Alert,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalHeader,
  ModalFooter,
} from "reactstrap";
import { useAuth } from "../../hooks/useAuth";
// import backgroundImage from "./../../assets/img/car-dashboard.png";
import backgroundImage from "./../../assets/img/background-image.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const [error, setError] = useState<string | null>(null);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const emailHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/v1/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (res.status === 404) {
        const data = await res.json();
        setError(data.message);
        return;
      }

      const data = await res.json();

      if (data.data.role != "user") {
        login(data.data);
      } else {
        setModal(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const loginStyle = {
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <div className="row">
      <Modal isOpen={modal}>
        <ModalHeader>Anda tidak memilik akses!</ModalHeader>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>
            Kembali
          </Button>{" "}
        </ModalFooter>
      </Modal>
      <div className="col-md-7 p-0 h-100">
        <div style={loginStyle} />
      </div>
      <div className="col-md-5 p-0 bg-white d-flex flex-column justify-content-center">
        <div className="d-flex flex-column mx-5 px-3">
          <p className="fs-3 fw-semibold">Welcome, Admin BCR</p>
          {error && <Alert color="danger">{error}</Alert>}
        </div>
        <div className="d-flex justify-content-center">
          <Form onSubmit={(e) => handleSubmit(e)} className="w-75">
            <FormGroup floating>
              <Input
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                onChange={(e) => emailHandler(e)}
              />
              <Label for="email">Email</Label>
            </FormGroup>{" "}
            <FormGroup floating>
              <Input
                id="password"
                name="password"
                placeholder="Password"
                type="password"
                onChange={(e) => passwordHandler(e)}
              />
              <Label for="password">Password</Label>
            </FormGroup>{" "}
            <Button
              className="w-100 mt-4"
              style={{ backgroundColor: "#0D28A6" }}
            >
              Sign up
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
