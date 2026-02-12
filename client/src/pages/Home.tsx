import { Hero } from "../components/Hero"
import { Projects } from "../components/Projects"
import { SystemDivider } from "../components/ui/Divider"
import  AboutSection from "../components/About"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";




const Home = () => {const location = useLocation();

useEffect(() => {
  if (location.state?.scrollTo) {
    const element = document.getElementById(location.state.scrollTo);
    element?.scrollIntoView({ behavior: "smooth" });
  }
}, [location]);
  return (
    <div>
      <section id="home">
        <Hero/>
      </section><SystemDivider/>
      <section id="projects"><Projects /></section>
      <section id="about"><AboutSection/></section>
       
      
      
      
    </div>
  )
}

export default Home
