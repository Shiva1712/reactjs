import Topbar from "./topbar";
import Navbar from "./navbar";
import Main from "../Main";
import InnerHeader from "./InnerHeader";

function Section() {
    return (
      <section className="section">
        <Topbar/>
        <Navbar />
        <InnerHeader />
        <Main />
      </section>
    );
  }
  
  export default Section;
  