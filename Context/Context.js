//context
import { Children, createContext, useState } from "react";

export const userContext = createContext({
      username:'',
      password:'',
      setUsername:(text)=>{},
      setPassword:(text)=>{}

});

const UserContextProvider = ({Children})=>{
      const [username, setUsername] = useState("");
      const [password, setPassword] = useState("");

      const userName =(text)=>{
            setUsername(text);
      }
      const userPassword =(text)=>{
            setPassword(text);
      }

      const value = {username, password};

      return(
            <userContext.Provider value={value}>{Children}</userContext.Provider>
      )
} 
export default UserContextProvider;