import React from 'react'
import './App.css'
import { CalcScreen, FoodScreen, Header, LogScreen, MealsScreen } from './Screens/index.js'

function App() {

        return (
            <>
                <Header />
                <CalcScreen />
                <FoodScreen />
                <LogScreen />
                <MealsScreen />
            </>
        )
    }

export default App
