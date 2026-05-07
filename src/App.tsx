import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import InnovationsPage from './pages/InnovationsPage'
import ProjectsPage from './pages/ProjectsPage'
import ResearchPage from './pages/ResearchPage'
import MobileAppsPage from './pages/MobileAppsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="innovations" element={<InnovationsPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="research" element={<ResearchPage />} />
        <Route path="mobileapps" element={<MobileAppsPage />} />
      </Route>
    </Routes>
  )
}

export default App
