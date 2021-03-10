import { API } from "../utils/API";
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

export default function Charts() {
  const [covidData, setcovidData] = useState([]);
  const [chartData, setchartData] = useState({
    labels: [],
    datasets: [{ data: [] }],
  })

  useEffect(() => {
    API().then((data) => setcovidData(data))
    .then(data=> data.slice(1,10))
    .then(data =>
        data.forEach(element => {
            setchartData(chartData.labels.push(element.countryName), chartData.datasets[0].data.push(element.dailyConfirmed)) 
        }))}
,[] );

  return (
    <>
      <Bar
        data={{
          labels: [covidData.countryName],
          datasets: [{ data: [covidData.dailyConfirmed] }],
        }}
      />
    </>
  );
}
