import { Button } from "react-bootstrap";
import "../styles/City.scss";
import { useState } from "react";
import TableComp from "../components/TableComp";
import ModalComp from "../components/ModalComp";
import LeadsForm from "../components/forms/LeadsForm";

const Leads = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="master-container">
      <div className="master-div">
        <h3>Leads</h3>
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
      {/* <TableComp /> */}
      {open && (
        <ModalComp show={open} setShow={setOpen} title="Create Lead">
          <LeadsForm setOpen={setOpen} />
        </ModalComp>
      )}
    </div>
  );
};

export default Leads;
