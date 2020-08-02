import { useContext } from 'react'
import Context from "./context";

const useThemeContext = () => {
    return useContext(Context);   
}

export default useThemeContext;
