// import { useEffect, useState } from "react";

// interface Car {
//   id: string;
//   image: string;
//   name: string;
//   updated_at: string;
//   price: number;
// }

export default function AddCar() {
//   const [data, setData] = useState<Car[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const userDataString = localStorage.getItem("user");
//         const user = userDataString ? JSON.parse(userDataString) : null;

//         if (!user.token) {
//           throw new Error("No token found");
//         }

//         const response = await fetch("http://localhost:5000/api/v1/cars", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: "Bearer " + user.token,
//           },
//         });

//         const result = await response.json();

//         setData(result.data);
//         console.log(result);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, []);

  return (
    <div className="container">
      <div className="d-flex gap-2 my-3" style={{ fontSize: "12px" }}>
        <p className="fw-semibold">Cars</p>
        <div>
          <i className="fa-solid fa-angle-right"></i>
        </div>
        <p style={{ fontWeight: "lighter" }}>List car</p>
      </div>
      <div className="fw-bold fs-3 my-3">List Car</div>
    </div>
  );
}
