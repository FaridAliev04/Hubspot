import './css/App.css';
import Navbar from "./companiet/Navbar.jsx";
import Section from './companiet/Section';
import Main from './companiet/Main';
import Form from './companiet/Form';
import Info from './companiet/Info';
import Faq from './companiet/Faq.jsx';
import Game from './companiet/Game';

function App() {

  return <div>
   <Navbar/>
   <Section />
  <Main/>
  <Info/>
  <Faq/>
  <Game/>
  <Form />
  </div>
   
}

export default App;
