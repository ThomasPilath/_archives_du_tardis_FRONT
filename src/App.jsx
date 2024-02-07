import { Route, Routes } from 'react-router-dom'
import './App.css'
import TestElement from './pages/TestElement'
import Home from './pages/Home'

import { useEffect } from "react"
import {
  Dropdown,
  Collapse,
  Ripple,
  initTE,
} from "tw-elements";

export default function App() {

	useEffect(() => {
    initTE({ Dropdown, Collapse, Ripple });
  })

	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/test" element={<TestElement />} />
			</Routes>
		</>
	)
}