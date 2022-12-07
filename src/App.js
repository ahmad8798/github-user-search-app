
import './App.css';
import {Routes,Route} from 'react-router-dom'
import UserProfileCard from './Components/UserProfileCard'
import RepositaryCard from './Components/RepositoryCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import NavBar from './Components/NavBar';
function App() {
  return (
    <>
     <Routes>
        <Route path='/' element={<NavBar/>}>
        <Route index element={<UserProfileCard/>}/>
        <Route path='repositary-Card' element={<RepositaryCard/>}/>
        </Route>
        
     </Routes>   
    </>
  );
}

export default App;
