import About from './components/About/About';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

const App = () => {
  return (
    <div>
       <Header />
       <Hero/>
       <About/>
       <Features/>
       <Footer/>
    </div>
  );
}

export default App;


