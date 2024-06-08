import { createContext, useContext, useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useNavigate } from "react-router-dom";

// mendefinisikan tipe AuthProps untuk tipe properti children harus berupa elemen react
interface AuthProps {
  children: React.ReactElement;
}

// mendefinisikan tipe AuthContextType yang akan disimpan di AuthContext
interface AuthContextType {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    user: any;
    login: (data: object) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProps) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  const login = async (data: object) => {
    console.log(data);
    setUser(data);
    navigate("/dashboard", { replace: true });
  };

  const logout = () => {
    setUser(null);
    navigate("/dashboard/login", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );

  return(
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}
