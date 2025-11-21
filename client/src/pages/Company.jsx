import TableComp from "../components/TableComp";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalComp from "../components/ModalComp";
import { CompanyColumns } from "../config/columns/CityColumns";
import "../styles/City.scss";
import { Button } from "react-bootstrap";
import CompanyForm from "../components/forms/CompanyForm";
import { getCompanies } from "../redux/company/company.action";

const Company = () => {
  const [open, setOpen] = useState(false);
  const { companies, loading } = useSelector((state) => state.companies);
  console.log(companies);

  const indexedCompanies = (companies || []).map((company, index) => ({
    ...company,
    index: index + 1,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCompanies());
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="master-container">
      <div className="master-div">
        <h3>Company</h3>
        <Button
          style={{
            width: "100px",
            borderRadius: "5px",
            backgroundColor: "green",
            borderColor: "green",
          }}
          onClick={() => setOpen(true)}
        >
          + Add
        </Button>
      </div>
      <TableComp
        columns={CompanyColumns}
        rows={indexedCompanies}
        style={{ width: "700px" }}
      />
      {open && (
        <ModalComp show={open} setShow={setOpen} title="Add City">
          <CompanyForm setOpen={setOpen} />
        </ModalComp>
      )}
    </div>
  );
};

export default Company;
