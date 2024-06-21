import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { toast } from "react-toastify";
import { Car, CarFormData } from "../types";

interface CarContextProps {
  cars: Car[];
  filteredCars: Car[];
  isFiltered: boolean;
  fetchCars: () => void;
  addCar: (formData: CarFormData) => Promise<void>;
  detailCar: (carId: string) => Promise<Car>;
  updateCar: (carId: string, formData: CarFormData) => Promise<void>;
  deleteCar: (carId: string) => void;
  filterCars: (
    tipeDriver: string,
    startDate: Date,
    waktuAmbil: string,
    jumlahPenumpang: string
  ) => void;
  setIsFiltered: React.Dispatch<React.SetStateAction<boolean>>;
}

const CarContext = createContext<CarContextProps | undefined>(undefined);

export const useCar = (): CarContextProps => {
  const context = useContext(CarContext);
  if (!context) {
    throw new Error("useCar must be used within a CarProvider");
  }
  return context;
};

interface CarProviderProps {
  children: ReactNode;
}

export const CarProvider: React.FC<CarProviderProps> = ({ children }) => {
  const [cars, setCars] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      // const userDataString = localStorage.getItem("user");
      // const user = userDataString ? JSON.parse(userDataString) : null;

      // if (!user?.token) {
      //   throw new Error("No token found");
      // }

      const response = await fetch("http://localhost:5000/api/v1/cars", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Authorization: "Bearer " + user.token,
        },
      });

      const result = await response.json();
      setCars(result.data);
      setFilteredCars(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const detailCar = async (id: string): Promise<Car> => {
    try {
      const userDataString = localStorage.getItem("user");
      const user = userDataString ? JSON.parse(userDataString) : null;

      if (!user?.token) {
        throw new Error("No token found");
      }

      const response = await fetch(`http://localhost:5000/api/v1/cars/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + user.token,
        },
      });

      const result = await response.json();
      return result.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  const addCar = async (formData: CarFormData) => {
    try {
      const userDataString = localStorage.getItem("user");
      const user = userDataString ? JSON.parse(userDataString) : null;

      if (!user.token) {
        throw new Error("No token found");
      }

      const formDataToSend = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        if (key === "image" && value instanceof File) {
          formDataToSend.append(key, value);
        } else if (key === "options" || key === "specs") {
          // Jika value adalah array, Anda perlu memprosesnya sesuai dengan format yang diharapkan oleh server
          formDataToSend.append(key, JSON.stringify(value));
        } else {
          formDataToSend.append(key, value); // Tambahkan nilai tanpa JSON.stringify
        }
      });

      const response = await fetch("http://localhost:5000/api/v1/cars", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        body: formDataToSend,
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server error:", errorData.message);
        toast.error(errorData.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        const data = await response.json();
        console.log("Success:", data);
        localStorage.setItem("carCreated", "true");
        await fetchCars();
      }
    } catch (error) {
      console.error("Error adding car:", error);
      toast.error("Failed to add car", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const updateCar = async (carId: string, formData: CarFormData) => {
    try {
      const userDataString = localStorage.getItem("user");
      const user = userDataString ? JSON.parse(userDataString) : null;
  
      if (!user || !user.token) {
        throw new Error("User token not found");
      }
  
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === "image" && value instanceof File) {
          formDataToSend.append(key, value);
        } else if (key === "options" || key === "specs") {
          formDataToSend.append(key, JSON.stringify(value));
        } else if (value !== null && value !== undefined) {
          formDataToSend.append(key, value.toString());
        }
      });
  
      const response = await fetch(
        `http://localhost:5000/api/v1/cars/${carId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
          body: formDataToSend,
        }
      );
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Server error response:", errorText);
  
        try {
          const errorData = JSON.parse(errorText);
          toast.error(errorData.message, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } catch (jsonError) {
          console.error("Response is not valid JSON:", errorText);
          toast.error(
            "Failed to update car. Server returned invalid response.",
            {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            }
          );
        }
      } else {
        const data = await response.json();
        console.log("Success:", data);
        localStorage.setItem("carCreated", "true");
        await fetchCars(); // Assuming this function exists and fetches updated car data
      }
    } catch (error) {
      console.error("Error updating car:", error);
      toast.error("Failed to update car", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  

  const deleteCar = async (carId: string) => {
    try {
      const userDataString = localStorage.getItem("user");
      const user = userDataString ? JSON.parse(userDataString) : null;

      if (!user?.token) {
        throw new Error("No token found");
      }

      await fetch(`http://localhost:5000/api/v1/cars/${carId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + user.token,
        },
      });

      setCars((prevCars) => prevCars.filter((car) => car.id !== carId));
      setFilteredCars((prevCars) => prevCars.filter((car) => car.id !== carId));
      toast.success("Car successfully deleted", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      console.error("Error deleting car:", error);
    }
  };

  const filterCars = (
    tipeDriver: string,
    startDate: Date,
    waktuAmbil: string,
    jumlahPenumpang: string
  ) => {
    const filtered = cars.filter((car) => {
      const matchesTipeDriver =
        tipeDriver === "" || car.typeDriver === tipeDriver;
      const matchesStartDate =
        startDate === null || new Date(car.availableAt) >= startDate;
      const matchesWaktuAmbil =
        waktuAmbil === "" || getWaktuAmbil(car.availableAt) === waktuAmbil;
      const matchesJumlahPenumpang =
        jumlahPenumpang === "" || car.capacity >= parseInt(jumlahPenumpang);

      return (
        (matchesTipeDriver && matchesStartDate && matchesWaktuAmbil) ||
        matchesJumlahPenumpang
      );
    });

    console.log(filtered);

    setFilteredCars(filtered);
    setIsFiltered(true);
  };

  const getWaktuAmbil = (isoDateString: string): string => {
    const date = new Date(isoDateString);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <CarContext.Provider
      value={{
        cars,
        filteredCars,
        isFiltered,
        fetchCars,
        addCar,
        detailCar,
        updateCar,
        deleteCar,
        filterCars,
        setIsFiltered,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
