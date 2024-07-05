import { useEffect } from "react";

// interface ICars {
//     data: [{

//     }]
// }

export default function Cars() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://environmental-toma-dannyysaputra-0c2bc4dd.koyeb.app/api/v1/cars"
        );
        const result = await response.json();
        // setData(result);
        console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>cars</h1>
    </>
  );
}
