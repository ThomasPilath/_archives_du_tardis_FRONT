import { Route, Routes } from 'react-router-dom'
import './App.css'
import TestElement from './pages/TestElement'
import Home from './pages/Home'
import ArrivalComponent from './components/Arrival/Arrival'

export default function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<ArrivalComponent />} />
				<Route path="/home" element={<Home />} />
				<Route path="/test" element={<TestElement />} />
			</Routes>
		</>
	)
}