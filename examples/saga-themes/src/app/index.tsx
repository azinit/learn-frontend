import React from 'react'
import Routing from "pages"
import { BrowserRouter } from "react-router-dom";
import "./index.scss";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <header className="app-header">
                    <Routing.Navbar />
                </header>
                <main className="app-main">
                    <Routing />
                </main>
                <footer className="app-footer" />
            </div>
        </BrowserRouter>
    )
}

export default App
