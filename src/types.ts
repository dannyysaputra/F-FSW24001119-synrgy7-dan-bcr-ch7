export interface Car {
    plate: string;
    id: string;
    typeDriver: string;
    availableAt: string;
    capacity: number;
    image: string;
    manufacture: string;
    model: string;
    type: string;
    description: string;
    transmission: string;
    year: number;
    rentPerDay: number;
    updated_at: string;
    available: boolean;
    options: string[];
    specs: string[];
}

export interface CarFormData {
  plate: string;
  manufacture: string;
  model: string;
  image: File | null;
  rentPerDay: number;
  capacity: number;
  description: string;
  transmission: string;
  type: string;
  typeDriver: string;
  year: number;
  availableAt: string;
  available: boolean;
  options: string[];
  specs: string[];
}
