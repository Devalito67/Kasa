import { useEffect, useState } from "react";

export default function DataFetch({dataPath}) {
 const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(dataPath);
        const datas = await response.json();
       setDataList(datas)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dataPath]);
return dataList;
}
