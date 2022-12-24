import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const fetchApiData = () => {
    // const url = 'http://127.0.0.1:8000/day';
    const url = 'api/day';
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    fetch(url, {method: 'GET'})
      .then(response => {
         if (!response.ok) {
             throw new Error("HTTP error " + response.status);
         }
         console.log(response)
         return response.json();
      })
      .then((actualData) => {
        console.log(actualData);
        setData(actualData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <h1>Hey!  It's {data.day}</h1>
  );
}

export default App;