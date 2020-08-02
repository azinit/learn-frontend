import React from 'react'
import { BrowserRouter } from "react-router-dom";
import Routing from "pages"
import { ThemeProvider } from "features/theme-provider";
import { Navbar } from "features/navbar"
import "./index.scss";

const App = () => {

    return (
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
    )
}

export default App
