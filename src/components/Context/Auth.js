import { createContext ,useContext,useState} from "react";

export const AuthContext =createContext(null);
export const ContextProvider = ({ children})=>{

    const [email, setemail] = useState(null)
    const [password, setpassword] = useState(null)

    const login=(email,password)=>{
        setemail(email)
        setpassword(password)
    }
    const logout=()=>{
        setemail(null)
        setpassword(null)
    }

    return(
<AuthContext.Provider value={{email,password,login,logout}}>
{children}

</AuthContext.Provider>

    )
}

export const useAuth =()=>{

    return useContext(AuthContext)
}