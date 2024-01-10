import React, { useEffect, useState } from "react";
import "../StyleSheets/MenuItems.css";

function Covid() {

  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch('https://api.covid19india.org/data.json');
      const actualData = await res.json();
      setData(actualData.statewise[0]);
      console.log(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <section style={{ margin: "4rem", textAlign: "center" }}>
        <h1>🔴 LIVE</h1>
        <h2>COVID-19 CORONAVIRUS TRACKER</h2>
        <ul className="covidBox">
          <li className="card">
            <div className="card__main" style={{ backgroundColor: "aqua" }}>
              <div className="card__inner">
                <p className="card__name">
                  <span> OUR </span> COUNTRY
                </p>
                <p className="card__total card__small">INDIA</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div
              className="card__main"
              style={{ backgroundColor: "rgb(243, 60, 243)" }}
            >
              <div className="card__inner">
                <p className="card__name">
                  <span> TOTAL </span> RECOVERED
                </p>
                <p className="card__total card__small">{data.recovered}</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card__main" style={{ backgroundColor: "yellow" }}>
              <div className="card__inner">
                <p className="card__name">
                  <span> TOTAL </span> CONFIRMED
                </p>
                <p className="card__total card__small">{data.confirmed}</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div
              className="card__main"
              style={{ backgroundColor: "rgb(57, 245, 57)" }}
            >
              <div className="card__inner">
                <p className="card__name">
                  <span> TOTAL </span> DEATH
                </p>
                <p className="card__total card__small">{data.deaths}</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card__main" style={{ backgroundColor: "pink" }}>
              <div className="card__inner">
                <p className="card__name">
                  <span> TOTAL </span> ACTIVE
                </p>
                <p className="card__total card__small">{data.active}</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card__main" style={{ backgroundColor: "orange" }}>
              <div className="card__inner">
                <p className="card__name">
                  <span> LAST </span> UPDATED
                </p>
                <p className="card__total card__small">
                  {data.lastupdatedtime}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Covid;
