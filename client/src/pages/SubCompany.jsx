import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCompaniesList } from "../redux/subcompany/subcompany.action";
import { Button } from "react-bootstrap";
import ModalComp from "../components/ModalComp";
import SubCompanyForm from "../components/forms/SubCompanyForm";

const SubCompany = () => {
  const dispatch = useDispatch();
  const { companiesList } = useSelector((state) => state.subcompany);
  const [open, setOpen] = useState(false);
  console.log("List", companiesList);

  const companiesOption = companiesList.map((item) => ({
    value: item.id,
    label: item.companyName,
  }));
  console.log(companiesOption);

  useEffect(() => {
    dispatch(getCompaniesList());
  }, []);
  return (
    <div className="master-container">
      <div className="master-div">
        <h3>Sub Company</h3>
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
      {open && (
        <ModalComp show={open} setShow={setOpen} title="Add Sub Company">
          <SubCompanyForm setOpen={setOpen} companiesList={companiesList} />
        </ModalComp>
      )}
    </div>
  );
};

export default SubCompany;
