const cities = ["Dhaka", "New York", "Washington DC", "Dhaka", "Tokyo"];
console.log(cities.includes("Dhaka"));
console.log(cities.includes("Tokyo"));
console.log(cities.includes("Mosque"));

if (cities.includes("Mosque")) {
  for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
  }
} else {
  console.log("Fuck the system.");
}
