import { fetchCities } from "../redux/city/city.action";
import TableComp from "../components/TableComp";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalComp from "../components/ModalComp";
import CityForm from "../components/forms/CityForm";
import { CityColumns } from "../config/columns/CityColumns";
import "../styles/City.scss";
import { Button } from "react-bootstrap";

const City = () => {
  const dispatch = useDispatch();
  const { cities, loading } = useSelector((state) => state.cities);
  const [open, setOpen] = useState(false);

  console.log(cities);

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Add index to each row
  const indexedCities = (cities || []).map((city, index) => ({
    ...city,
    index: index + 1,
  }));

  return (
    <div className="city-container">
      <div className="city">
        <h3>City</h3>
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
        columns={CityColumns}
        rows={indexedCities}
        style={{ width: "700px" }}
      />
      {open && (
        <ModalComp show={open} setShow={setOpen} title="Add City">
          <CityForm />
        </ModalComp>
      )}
    </div>
  );
};

export default City;
