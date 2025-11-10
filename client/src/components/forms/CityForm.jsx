import { addCity } from "../../redux/city/city.action";
import { Field, Form, Formik } from "formik";
import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const CityForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    const payload = { cityName: values.cityName };
    dispatch(addCity(payload));
  };

  return (
    <div>
      <Formik initialValues={{ cityName: "" }} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <div className="d-flex justify-content-center align-items-center gap-2">
              <label>City Name:</label>
              <Field name="cityName" type="text" />
            </div>
            <Button
              type="submit"
              style={{
                marginTop: "20px",
              }}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CityForm;
