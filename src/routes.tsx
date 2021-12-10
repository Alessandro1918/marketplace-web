import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Add } from './pages/Add'
import { Edit } from './pages/Edit'

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/items/add" element={<Add/>}/>
                <Route path="/items/edit/:ml_id" element={<Edit/>}/>
            </Routes>
        </BrowserRouter>
    )
}