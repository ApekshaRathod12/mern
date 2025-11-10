import { fetchCities } from "../redux/city/city.action";
import TableComp from "../components/TableComp";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalComp from "../components/ModalComp";
import CityForm from "../components/forms/CityForm";

const City = () => {
  const dispatch = useDispatch();
  const { cities, loading } = useSelector((state) => state.cities);
  const [open, setOpen] = useState(false);

  console.log(cities);

  const cityColumns = [
    { id: "index", label: "ID" },
    { id: "cityName", label: "City Name" },
  ];

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
    <div className="d-flex flex-column justify-content-center align-items-center mt-4">
      <div className="d-flex gap-2">
        <h3>City</h3>
        <button
          style={{ width: "70px", borderRadius: "5px" }}
          onClick={() => setOpen(true)}
        >
          + Add
        </button>
      </div>
      <TableComp
        columns={cityColumns}
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
