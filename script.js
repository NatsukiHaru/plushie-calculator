const plushiesData = {
  Chamois: {buy: 400, country: "Switzerland", defaultSell: 7000, flightTime: 123},
  Wolverine: {buy: 300, country: "Canada", defaultSell: 7300, flightTime: 29},
  Stingray: {buy: 200, country: "Cayman Island", defaultSell: 5500, flightTime: 25},
  Jaguar: {buy: 200, country: "Mexico", defaultSell: 7000, flightTime: 18},
  Nessie: {buy: 1000, country: "United Kingdom", defaultSell: 32000, flightTime: 111},
  RedFox: {buy: 1000, country: "United Kingdom", defaultSell: 33200, flightTime: 111},
  Monkey: {buy: 400, country: "Argentina", defaultSell: 37000, flightTime: 117},
  Panda: {buy: 400, country: "China", defaultSell: 57000, flightTime: 169},
  Lion: {buy: 400, country: "South Africa", defaultSell: 67000, flightTime: 208},
  Camel: {buy: 14000, country: "UAE", defaultSell: 80000, flightTime: 190}
};

function calculate() {
  const selected = Array.from(document.getElementById("plushieSelect").selectedOptions).map(opt => opt.value);
  let html = "<table><tr><th>Plushie</th><th>Country</th><th>Buy $</th><th>Sell $</th><th>Flight Time</th><th>Trips/Day</th><th>Qty/Day</th><th>Profit/Day</th></tr>";

  selected.forEach(plushie => {
    const data = plushiesData[plushie];
    const roundTrip = data.flightTime * 2 + 6;
    const tripsPerDay = Math.floor(1440 / roundTrip);
    const qtyPerFlight = 21;
    const qtyPerDay = qtyPerFlight * tripsPerDay;
    const gross = qtyPerDay * data.defaultSell;
    const cost = qtyPerDay * data.buy;
    const profit = gross - cost;

    html += `<tr>
      <td>${plushie}</td>
      <td>${data.country}</td>
      <td>$${data.buy.toLocaleString()}</td>
      <td>$${data.defaultSell.toLocaleString()}</td>
      <td>${data.flightTime} min</td>
      <td>${tripsPerDay}</td>
      <td>${qtyPerDay}</td>
      <td>$${profit.toLocaleString()}</td>
    </tr>`;
  });

  html += "</table>";
  document.getElementById("resultTable").innerHTML = html;
}