export function API() {
  return fetch(
    "https://api.coronatracker.com/v3/stats/worldometer/country?countryCode="
  ).then((res) => res.json());
}
