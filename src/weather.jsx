import { useEffect } from "react";
import { useState } from "react";

function Weather() {
  const [temp, setTemp] = useState(0);
  const [country, setCountry] = useState("a");

  async function weatherstats() {
    const url = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=28&lon=77&appid=e6fe201b924ca46cc859cb53d9ab8e9a&units=imperial"
    );
    // const url = await fetch(
    //   "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=e6fe201b924ca46cc859cb53d9ab8e9a&units=imperial"
    // );

    const tempval = await url.json();
    console.log("tempvalue", tempval);

    console.log("tempvalue", tempval.main.temp);

    setTemp(tempval.main.temp);
    setCountry(tempval.sys.country);

    console.log("temp", temp);

    if (!url.ok) {
      throw new Error("Failed to fetch data");
    }
  }
  useEffect(() => {
    weatherstats();
  }, []);

  return (
    <div>
      <div className="weather-section">
        <p>{country}</p>
        <p>{temp}°F</p>
      </div>

      <div>
        <p>Subscribe to our newsletter</p>
        <input type="text"></input>
        <button>Subscribe</button>
      </div>

      {/* <img className="weather-img" src="https://media.istockphoto.com/id/1159611932/photo/white-cloud-isolated-on-black-background-black-sky-and-single-white-cloud.webp?b=1&s=170667a&w=0&k=20&c=_fuvEgEimUVAULGwga910i4b-W6gFXHfb4ug9FnMx14=" /> */}
    </div>
  );
}

export default Weather;
