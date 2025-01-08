import './main.scss';
import Section1 from "./section1/section1"
import Section2 from "./section2/Section2"
import Section3 from './section3/Section3';



function Main() {
  return (
    <main className="main">
      <Section1/>
      <Section2/>
      <Section3/>
    </main>
  )
}

export default Main