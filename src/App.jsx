import React from 'react'
import './App.css'
import { CalculatorScreen, FoodScreen, Header, LogScreen, MealsScreen } from './Screens/index.js'
import { Routes, Route } from 'react-router-dom'

function App() {

        return (
            <>
                <Header />
                <Routes>
                    <Route path="/" element={<LogScreen />} />
                    <Route path="/Log" element={<LogScreen />} />
                    <Route path="/Food" element={<FoodScreen />} />
                    <Route path="/Meals" element={<MealsScreen />} />
                    <Route path="/Calculator" element={<CalculatorScreen />} />
                </Routes>
            </>
        )
    }

export default App
