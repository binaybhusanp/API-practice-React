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
            <td>Daily Confirmed</td>
            <td>Total Confirmed</td>
            <td>Active Cases</td>
            <td>Total Deaths</td>
            <td>Last Updated</td>
          </tr>
        </thead>
        <tbody>
          {covidCasesCountryWise ? (
            covidCasesCountryWise.map((countryData) => (
              <tr>
                <td>{countryData.countryName}</td>
                <td>{countryData.dailyConfirmed}</td>
                <td>{countryData.totalConfirmed}</td>
                <td>{countryData.activeCases}</td>
                <td>{countryData.totalDeaths}</td>
                <td>{new Date(countryData.lastUpdated).toDateString()}</td>
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
