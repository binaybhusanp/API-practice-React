import { useState, useEffect } from "react";
import { API } from "../utils/API";
export default function Dashboard() {
  const [covidCasesCountryWise, setCovidCases] = useState([]);
  useEffect(() => {
    API().then((data) => setCovidCases(data));
  }, []);

  return (
    <div>
      <table className="table bg-light">
        <thead>
          <tr className="table-primary fw-bold">
            <td>Country</td>
            <td>Active Cases</td>
          </tr>
        </thead>
        <tbody>
          {covidCasesCountryWise ? (
            covidCasesCountryWise.map((countryData) => (
              <tr>
                <td>{countryData.countryName}</td>
                <td>{countryData.activeCases}</td>
              </tr>
            ))
          ) : (
            <tr>tryu</tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
