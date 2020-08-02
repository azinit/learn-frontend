import { createContext } from 'react'

type ContextProps = {
    theme: "light" | "dark";
    onSwitch: () => void;
}

const Context = createContext<ContextProps>({
    theme: "light",
    onSwitch: () => {},
})

export default Context;
