
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from '../views/Main';
import Landing from '../views/Landing';


const Routes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path= "/main" element={<Main />} />
            </Routes>
        </Router>
    )
}

export default Routes