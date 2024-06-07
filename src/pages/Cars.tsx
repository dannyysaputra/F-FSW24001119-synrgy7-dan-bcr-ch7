import { useEffect } from "react";

// interface ICars {
//     data: [{

//     }]
// }

export default function Cars() {
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:5000/api/v1/cars');
            const result = await response.json();
            // setData(result);
            console.log(result);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
      }, []);

    return(
        <>
            <h1>cars</h1>
        </>
    )
}
