import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Body1 from './Components/Body1';
import Body2 from './Components/Body2';
import Body3 from './Components/Body3';
import Body4 from './Components/Body4';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="bg-white w-full h-full">
      <Navbar/>
      <hr/>
      <br/>
      <Body1/>
      
      <Body2/>
      
      <Body3/>
      <br/>
      <Body4/>
      <br/>
      <Footer/>
    </div>
  );
}

export default App;
