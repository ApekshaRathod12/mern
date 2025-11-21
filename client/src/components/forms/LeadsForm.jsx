import { Field, Form, Formik } from "formik";
import React from "react";
import { Button } from "react-bootstrap";

const LeadsForm = () => {
  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    companyId: null,
    subCompanyId: null,
    productId: null,
    status: "",
    notes: "",
    assignedTo: null,
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="form-container">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <Form className="d-flex flex-column gap-3">
            <div className="d-flex justify-content-start align-items-center gap-5">
              <label style={{ minWidth: "120px" }}>Full Name :</label>
              <Field name="fullName" type="text" />
            </div>
            <div className="d-flex justify-content-start align-items-center gap-5">
              <label style={{ minWidth: "120px" }}>Email :</label>
              <Field name="email" type="text" />
            </div>
            <div className="d-flex justify-content-start align-items-center gap-5">
              <label style={{ minWidth: "120px" }}>Phone Number :</label>
              <Field name="phone" type="text" />
            </div>
            <div className="d-flex justify-content-start align-items-center gap-5">
              <label style={{ minWidth: "120px" }}>Company ID :</label>
              <Field name="companyId" type="text" />
            </div>
            <div className="d-flex justify-content-start align-items-center gap-4">
              <label style={{ minWidth: "145px" }}>Sub Company ID :</label>
              <Field name="subCompanyId" type="text" />
            </div>
            <div className="d-flex justify-content-start align-items-center gap-5">
              <label style={{ minWidth: "120px" }}>Product ID :</label>
              <Field name="productId" type="text" />
            </div>
            <div className="d-flex justify-content-start align-items-center gap-5">
              <label style={{ minWidth: "120px" }}>Status :</label>
              <Field name="status" type="text" />
            </div>
            <div className="d-flex justify-content-start align-items-center gap-5">
              <label style={{ minWidth: "120px" }}>Notes :</label>
              <Field name="notes" type="text" />
            </div>
            <div className="d-flex justify-content-start align-items-center gap-5">
              <label style={{ minWidth: "120px" }}>Assigned To :</label>
              <Field name="assignedTo" type="text" />
            </div>
            <Button type="submit" className="mt-1">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LeadsForm;
