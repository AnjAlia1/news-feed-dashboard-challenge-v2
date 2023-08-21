import { useEffect } from "react";
import { useState } from "react";

function Weather() {
  const [temp, setTemp] = useState(0);
  const [subscribe, setSubscribe] = useState(true);
  const [country, setCountry] = useState("a");
  const [weather, setWeather] = useState("a");

  async function weatherstats() {
    const url = await fetch(
      "https://api.weatherapi.com/v1/current.json?key=87939cc6b3bb41f4ba6172820231307&q=London&aqi=no"
    );

    const tempval = await url.json();
    setTemp(tempval.current.cloud);
    setCountry(tempval.location.name);
    setWeather(tempval.current.condition.text);

    if (!url.ok) {
      throw new Error("Failed to fetch data");
    }
  }
  useEffect(() => {
    weatherstats();
  }, []);

  return (
    <div className="right-section">
      <div className="weather-section">
        <p>{country}</p>
        <p>{weather}</p>
        <p>{temp}°C</p>
      </div>

      <div className="subscription-section">
        <p>Subscribe to our newsletter</p>
        <input
          className="input-email"
          type="text"
          placeholder="Enter Email"
        ></input>
        <button className="subs-btn" onClick={() => setSubscribe(!subscribe)}>
          {subscribe ? "Subscribe" : "Subscribed ✔️"}
        </button>
      </div>
    </div>
  );
}

export default Weather;
