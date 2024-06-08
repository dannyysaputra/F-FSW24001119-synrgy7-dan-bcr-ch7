import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useAuth } from "../../hooks/useAuth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const emailHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/v1/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    console.log(data.data);
    login(data.data)
  };

  return (
    <div>
      <Form onSubmit={(e) => handleSubmit(e)}>
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
        <Button>Submit</Button>
      </Form>
    </div>
  );
}
