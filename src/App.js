import Header from "./Component/Header";
import Section from "./Component/Section";
import Footer from "./Component/Footer";
import Script from "./Component/Script";

import './assets/vendor/animate.css/animate.min.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/css/style.css';


function App() {
  return (
    <div className="App">
      <Script />
      <Header/>
      <Section />
      <Footer/>
    </div>
  );
}

export default App;
