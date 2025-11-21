import { Field, Form, Formik } from "formik";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addCompany } from "../../redux/company/company.action";

const CompanyForm = ({ setOpen }) => {
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    console.log(values);
    const payload = { companyName: values.companyName };
    dispatch(addCompany(payload));
    setOpen(false);
  };

  return (
    <div className="form-container">
      <Formik initialValues={{ companyName: "" }} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <div className="d-flex justify-content-center align-items-center gap-2">
              <label>Company Name:</label>
              <Field name="companyName" type="text" />
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

export default CompanyForm;
