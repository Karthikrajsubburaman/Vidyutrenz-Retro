import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import EventPage from './components/EventPage/EventPage';
import VenuePage from './components/VenuePage/VenuePage';
import ContactPage from './components/ContactPage/ContactPage';
import Technical from './pages/Technical/Technical';
import NonTechnical from './pages/NonTechnical/NonTechnical';
import Hybrid from './pages/Hybrid/Hybrid';
import ScrollToTop from './components/ScrollToTop'; // Correctly import the ScrollToTop component
import './index.css'; // Import the global CSS file
import Hackathons from './pages/Hackathons/Hackathons';
import CodingCompetitions from './pages/CodingCompetitions/CodingCompetitions';
import Workshops from './pages/Workshops/Workshops';
import PaperPresentation from './pages/PaperPresentation/PaperPresentation';
import ProjectExhibitions from './pages/ProjectExhibitions/ProjectExhibitions';
import AlgorithmCompetitions from './pages/AlgorithmCompetitions/AlgorithmCompetitions';
import Debates from './pages/Debates/Debates';
import MovieScreenings from './pages/MovieScreenings/MovieScreenings';
import CoinMedia from './pages/CoinMedia/CoinMedia';
import TreasureHunts from './pages/TreasureHunts/TreasureHunts';
import Dance_Music from './pages/Dance&Music/Dance&Music';
import PhotographyContests from './pages/PhotographyContests/PhotographyContests';
import StartupCompetitions from './pages/StartupCompetitions/StartupCompetitions';
import InnovationShowcases from './pages/InnovationShowcases/InnovationShowcases';
import PanelDiscussions from './pages/PanelDiscussions/PanelDiscussions';
import BlockchainHunts from './pages/BlockchainHunts/BlockchainHunts';

const App = () => {
    return (
        <Router>
            <NavBar />
            <ScrollToTop />
            <div style={{ flex: 1, overflow: 'auto' }}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/events" element={<EventPage />} />
                    <Route path="/venue" element={<VenuePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/technical" element={<Technical />} />
                    <Route path="/non-technical" element={<NonTechnical />} />
                    <Route path="/hybrid" element={<Hybrid />} />
                    <Route path="/hackathons" element={<Hackathons />} />
                    <Route path="/coding_competitions" element={<CodingCompetitions/>} />
                    <Route path='/workshops' element={<Workshops/>} />
                    <Route path="/paper_presentations" element={<PaperPresentation/>}/>
                    <Route path='/project_exhibitions' element={<ProjectExhibitions/>} />
                    <Route path='/algorithm_competitions' element={<AlgorithmCompetitions/>} />
                    <Route path='/debates' element={<Debates/>} />
                    <Route path='/movie_screenings' element={<MovieScreenings/>} />
                    <Route path='/coin_media' element={<CoinMedia/>}/>
                    <Route path='/photography_contests' element={<PhotographyContests/>}/>
                    <Route path='/treasure_hunts' element={<TreasureHunts/>} />
                    <Route path='/dance_music' element={<Dance_Music/>} />
                    <Route path='/startup_competitions' element={<StartupCompetitions/>} />
                    <Route path='/innovation_showcases' element={<InnovationShowcases/>} />
                    <Route path='/panel_discussions' element={<PanelDiscussions/>} />
                    <Route path='/blockchain_hunts' element={<BlockchainHunts/>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
