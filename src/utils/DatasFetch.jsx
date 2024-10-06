import { useEffect, useState } from "react";

export default function DataFetch() {
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
return dataList;
}
