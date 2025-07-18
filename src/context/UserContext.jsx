import { LogOut } from "lucide-react";
import { createContext, useState } from "react";
export const UserContext = createContext();
export function UserProvider({ children }) {
  const [userName, setUserName] = useState("");
  return (
    <UserContext.Provider value={{ userName, setUserName ,LogOut}}>
      {children}
    </UserContext.Provider>
  );
}
