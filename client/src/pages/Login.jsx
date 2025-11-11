import { loginAction } from "../redux/login/login.action";
import { Formik, Form, Field } from "formik";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   const validationSchema = Yup.object({
  //     username: Yup.string().email("Invalid email").required("Email is required"),
  //     password: Yup.string()
  //       .min(6, "Password must be at least 6 characters")
  //       .required("Password is required"),
  //   });

  const handleSubmit = async (values) => {
    const res = await dispatch(loginAction(values));
    console.log(res);
    if (res.payload) {
      navigate("/");
    }
  };

  return (
    <Container className="d-flex m">
      <Row className="m-auto align-self-center w-100 mt-5">
        <Col md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center mb-4">LogIn</Card.Title>

              <Formik
                initialValues={{ username: "", password: "" }}
                // validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {() => (
                  <Form>
                    <div className="d-flex flex-column gap-3">
                      <div className="d-flex gap-2">
                        <label>Username : </label>
                        <Field type="text" name="username" />
                      </div>
                      <div className="d-flex gap-2">
                        <label>Password : </label>
                        <Field type="password" name="password" />
                      </div>
                      <Button type="submit">Submit</Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </Card.Body>
            <Card.Footer className="text-center">
              <small>
                Don't have an account? <a href="/register">Register</a>
              </small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
