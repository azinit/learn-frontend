import React from 'react'
import { BrowserRouter } from "react-router-dom";
import Routing from "pages"
import { ThemeProvider } from "features/theme-provider";
import { Navbar } from "features/navbar"
import { StoreProvider } from "./store";
import "./index.scss";

const App = () => {
    // FIXME: too much providers?
    return (
        <StoreProvider>
            <BrowserRouter>
                <ThemeProvider className="app">
                    <header className="app-header">
                        <Navbar />
                    </header>
                    <main className="app-main">
                        <Routing />
                    </main>
                    <footer className="app-footer" />
                </ThemeProvider>
            </BrowserRouter>
        </StoreProvider>
    )
}

export default App
