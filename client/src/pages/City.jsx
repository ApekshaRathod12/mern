import { fetchCities } from "../redux/city/city.action";
import TableComp from "../components/TableComp";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const City = () => {
  const dispatch = useDispatch();
  const { cities, loading } = useSelector((state) => state.cities);

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
    <div className="d-flex justify-content-center">
      <TableComp
        columns={cityColumns}
        rows={indexedCities}
        style={{ width: "700px" }}
      />
    </div>
  );
};

export default City;
