import React from 'react'
import cn from "classnames";
import { useLocalStorage } from "shared/hooks";
import Context from "./context";

type Props = import("react").PropsWithChildren<{
    className?: string;
}>;

const ThemeProvider = (props: Props) => {
    const { children, className } = props;
    const [theme, setTheme] = useLocalStorage("saga-themes__theme", "light");

    const value = {
        theme,
        onSwitch() {
            switch (theme) {
                case "light":
                    setTheme("dark");
                    break;
                case "dark":
                    setTheme("light");
                    break;
            }
        }
    }
    return (
        <Context.Provider value={value}>
            <div className={cn(className, theme)}>
                {children}
            </div>
        </Context.Provider>
    )
}

export default ThemeProvider
