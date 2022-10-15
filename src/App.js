
import './App.css';
// import Navbar from './components/Navbar';
// // import Profile from './components/Profile';
// import Tailwindnav from './beforeComponents/Tailwindnavbar';
// import TailwindProfile from './components/TailwindProfile';
// import Img from './Components/Img';
import Home from './Components/Home';
import Cards from './Components/Cards';
import AnimeSection from './Components/AnimeSection';
import Form from './Components/formComponents/Form';

function App() {
  return (
    <div className="App">
      {/* <Img></Img> */}
      <Home/>
      <AnimeSection/>
      <div className='h-16 bg-black'></div>
      <Cards/>
      <div className='h-16 bg-black'></div>
      <Form/>
     
      
      
      
      {/* <Profile></Profile> */}
      
      {/* // <TailwindProfile/> */}
      {/* <Navbar></Navbar> */}



    </div>
  );
}

export default App;
