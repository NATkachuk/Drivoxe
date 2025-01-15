import './main.scss';
import Section1 from "./section1/section1"
import Section2 from "./section2/Section2"
import Section3 from './section3/Section3';
import Section4 from './section4/Section4';
import Section5 from './section5/Section5';
import Section6 from './section6/Section6';



function Main() {
  return (
    <main className="main">
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
    </main>
  )
}

export default Main