import { useEffect, useState } from "react";
import Card from "./Card";
import "/src/styles/DataFetch.css";

function DataFetch() {
 const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/src/datas/housesList.json");
        const datas = await response.json();
       setDataList(datas)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
return (
    <div className="cards_container">
      {dataList.map((data) => (
        <Card key={data.id} cardInfo={data} />
      ))}
    </div>
  );

}

export default DataFetch;