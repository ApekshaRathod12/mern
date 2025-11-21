import { Field, Form, Formik } from "formik";
import React from "react";
import { Button } from "react-bootstrap";
import Select from "react-select/base";

const SubCompanyForm = ({ companiesList }) => {
  const initialValues = {
    subCompanyName: "",
    companyId: null,
  };
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="form-container">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <div className="d-flex justify-content-center align-items-center gap-2">
              <label>Sub Company Name:</label>
              <Field name="subCompanyName" type="text" />
            </div>
            <div className="d-flex justify-content-center align-items-center gap-2">
              <label>Company List:</label>
              <Select
                options={companiesList}
                onMenuOpen={() => {
                  console.log("Dropdown menu opened");
                }}
              />
            </div>
            <Button
              type="submit"
              style={{
                marginTop: "20px",
                color: "black",
                borderColor: "#0ef566ff",
                backgroundColor: "#0ef566ff",
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

export default SubCompanyForm;
