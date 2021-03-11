import { API } from "../utils/API";
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

export default function Charts() {
  const [covidData, setcovidData] = useState([]);
  const [chartData, setchartData] = useState({});

  useEffect(() => {
    API()
      .then((data) => setcovidData(data))
      .catch((err) => window.alert(err));
  }, []);

  useEffect(() => {
    const tempChartData = {
      labels: [],
      datasets: [{ label: "Daily Cases", data: [] }],
    };
    covidData.slice(1, 20).forEach((e) => {
      tempChartData.labels.push(e.countryName);
      tempChartData.datasets[0].data.push(e.dailyConfirmed);
    });
    setchartData(tempChartData);
  }, [covidData]);

  return (
    <>
      <Bar data={chartData} />
    </>
  );
}
