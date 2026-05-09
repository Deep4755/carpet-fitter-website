import { Routes, Route } from 'react-router-dom'
import RootLayout from '../components/layout/RootLayout'

// Pages
import Home            from '../pages/Home'
import About           from '../pages/About'
import Services        from '../pages/Services'
import Gallery         from '../pages/Gallery'
import Reviews         from '../pages/Reviews'
import Contact         from '../pages/Contact'
import AreaPage        from '../pages/AreaPage'
import ServicePage     from '../pages/ServicePage'

// Individual service pages
import CarpetFitting    from '../pages/services/CarpetFitting'
import CarpetTiles      from '../pages/services/CarpetTiles'
import LVTFlooring      from '../pages/services/LVTFlooring'
import LaminateFlooring from '../pages/services/LaminateFlooring'
import VinylFlooring    from '../pages/services/VinylFlooring'
import StairRunners     from '../pages/services/StairRunners'

// Individual area pages
import Ealing   from '../pages/areas/Ealing'
import Hounslow from '../pages/areas/Hounslow'
import Slough   from '../pages/areas/Slough'
import Uxbridge from '../pages/areas/Uxbridge'
import Wembley  from '../pages/areas/Wembley'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        {/* Main pages */}
        <Route index          element={<Home />} />
        <Route path="about"   element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="gallery"  element={<Gallery />} />
        <Route path="reviews"  element={<Reviews />} />
        <Route path="contact"  element={<Contact />} />

        {/* Service detail pages */}
        <Route path="services/carpet-fitting"    element={<CarpetFitting />} />
        <Route path="services/carpet-tiles"      element={<CarpetTiles />} />
        <Route path="services/lvt-flooring"      element={<LVTFlooring />} />
        <Route path="services/laminate-flooring" element={<LaminateFlooring />} />
        <Route path="services/vinyl-flooring"    element={<VinylFlooring />} />
        <Route path="services/stair-runners"     element={<StairRunners />} />

        {/* Fallback dynamic service route */}
        <Route path="services/:service" element={<ServicePage />} />

        {/* Area pages */}
        <Route path="areas/ealing"   element={<Ealing />} />
        <Route path="areas/hounslow" element={<Hounslow />} />
        <Route path="areas/slough"   element={<Slough />} />
        <Route path="areas/uxbridge" element={<Uxbridge />} />
        <Route path="areas/wembley"  element={<Wembley />} />

        {/* Fallback dynamic area route */}
        <Route path="areas/:area" element={<AreaPage />} />
      </Route>
    </Routes>
  )
}
