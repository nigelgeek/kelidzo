import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Stories from './pages/Stories'
import StoryDetail from './pages/StoryDetail'
import Community from './pages/Community'
import Opportunities from './pages/Opportunities'
import OpportunityDetail from './pages/OpportunityDetail'
import Programmes from './pages/Programmes'
import ProgrammeDetail from './pages/ProgrammeDetail'
import Archive from './pages/Archive'
import About from './pages/About'
import Studio from './pages/Studio'
import Search from './pages/Search'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/stories/:slug" element={<StoryDetail />} />
          <Route path="/community" element={<Community />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/opportunities/:slug" element={<OpportunityDetail />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/programmes/:slug" element={<ProgrammeDetail />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/about" element={<About />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/search" element={<Search />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}