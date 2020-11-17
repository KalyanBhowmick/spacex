import React, { useState, useEffect } from "react";
import axios from "axios";
import { Chrono } from "react-chrono";

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://api.spacexdata.com/v3/history");

      console.log(response.data);

      const items = [];
      let date, year, month;

      response.data.forEach((item) => {
        date = new Date(item.event_date_utc);
        year = date.getFullYear();

        switch (date.getMonth()) {
          case 0:
            month = "Jan";
            break;
          case 1:
            month = "Feb";
            break;
          case 2:
            month = "Mar";
            break;
          case 3:
            month = "Apr";
            break;
          case 4:
            month = "May";
            break;
          case 5:
            month = "Jun";
            break;
          case 6:
            month = "july";
            break;
          case 7:
            month = "Aug";
            break;
          case 8:
            month = "Sept"
            break;
          case 9:
            month = "Oct";
            break;
          case 10:
            month = "Nov";
            break;
          case 11:
            month = "Dec";
            break;
          default:
            break;
        }

        items.push({
          title: month + " " + year,
          cardTitle: item.title,
          cardSubtitle: item.details,
        });
      });

      setHistory(items);
    }
    fetchData();
  }, []);

  if (history.length > 0) {
    return (
      <div>
        <Chrono items={history} mode="VERTICAL" />
        {/* <ul>
            {history.map((item) => (
              <li key={item.id}>
                <a href={item.id}>{item.title}</a>
              </li>
            ))}
          </ul> */}
      </div>
    );
  }

  return <div>No history :(</div>;
};

export default History;
