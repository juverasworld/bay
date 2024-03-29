import logo from './logo.svg';
import './App.css';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import {light} from "./styles/Themes"
import Nav from './components/Nav';
import Home from './components/section/Home';
import About from './components/section/About';
import Roadmap from './components/section/Roadmap';
import Showcase from './components/section/Showcase';
import Footer from './components/Footer';
import Team from './components/section/Team';
import Faq from './components/section/Faq';
import ScrollToTop from './components/ScrollToTop';
import Mab from './components/Mab';

function App() {
  return (
  <>
   <GlobalStyles/>

 <ThemeProvider theme={light}>

 <Nav/>
 <Mab/>
 <About/>
 <Roadmap/>
 {/* <Showcase/>
 <Team/> */}
 <Faq/>
 <Footer/>
 <ScrollToTop/>
 </ThemeProvider>
        </>
  );
}

export default App;
