import { Route, Routes } from 'react-router-dom'
import './App.css'
import TestElement from './pages/TestElement'
import Home from './pages/Home'

export default function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/test" element={<TestElement />} />
			</Routes>
		</>
	)
}