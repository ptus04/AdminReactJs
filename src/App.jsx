import { useState } from "react";
import "./App.css";
import icons from "./icon-pack";
import { useEffect } from "react";

function App() {
  const [overviewData, setOverviewData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://67ee8ffcc11d5ff4bf7a11b6.mockapi.io/overview", {
      signal: controller.signal,
    })
      .then((response) =>
        response.json().then((data) => {
          setOverviewData(data);
        })
      )
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <div className="layout">
        <div className="layout-header">
          <h1>Dashboard</h1>
          <div className="left-partition">
            <form className="search-wrapper">
              <img src={icons.searchIcon} />
              <input type="search" placeholder="Search..." />
            </form>
            <a href="#">
              <img src={icons.notificationIcon} />
            </a>
            <a href="#">
              <img src={icons.helpIcon} />
            </a>
            <a href="#">
              <img src="https://avatar.iran.liara.run/public" />
            </a>
          </div>
        </div>
        <div className="layout-navbar">
          <h2 className="logo">Logo</h2>
          <ul className="navbar">
            <li>
              <a className="active" href="#">
                <img src={icons.dashBoardIcon} />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={icons.projectsIcon} />
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={icons.teamsIcon} />
                <span>Teams</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={icons.analysticsIcon} />
                <span>Analystics</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={icons.messagesIcon} />
                <span>Messages</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={icons.integrationsIcon} />
                <span>Integrations</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="layout-main">
          <h3>
            <img src={icons.dashBoardIcon} />
            <span>Overview</span>
          </h3>

          {overviewData.length > 0 ? (
            <div className="card-container">
              {overviewData.map((item) => (
                <div className="card" key={item.id}>
                  <h4>{item.cardName}</h4>
                  <p>{item.value}</p>
                  <p>
                    <span style={{ color: "green", fontWeight: "bold" }}>
                      {item.change}
                    </span>
                    <span> period of change</span>
                  </p>
                  <a href="#">
                    <img src={icons.cartIcon} />
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
