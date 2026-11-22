
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { useApp } from './context/AppContext.jsx'

import Login from './pages/Login.jsx'
import DashboardLayout from './layouts/DashboardLayout.jsx'

import Dashboard from './pages/Dashboard.jsx'
import RiskMapPage from './pages/RiskMapPage.jsx'
import RiskAnalysis from './pages/RiskAnalysis.jsx'
import Alerts from './pages/Alerts.jsx'
import FieldReports from './pages/FieldReports.jsx'

import HistoricalData from './pages/HistoricalData.jsx'

import Settings from './pages/Settings.jsx'

function LoginRoute() {
  const { login } = useApp()
  const navigate = useNavigate()

  function handleLogin(role) {
    login(role === 'officer' ? 'Demo Officer' : 'Demo Citizen')
    navigate('/dashboard', { replace: true })
  }

  return <Login onLogin={handleLogin} />
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginRoute />} />

      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/risk-map" element={<RiskMapPage />} />
        <Route path="/risk-analysis" element={<RiskAnalysis />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/field-reports" element={<FieldReports />} />
       
        <Route path="/historical-data" element={<HistoricalData />} />
        
        <Route path="/settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App