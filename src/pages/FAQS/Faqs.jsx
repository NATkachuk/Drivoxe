import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './Faqs.scss'
import Section1 from './section1/section1';
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';

function Faqs() {
  return (
    <>
    <Header />
    <main>
        <Section1 />
        <Section2/>
        <Section3/>
    </main>
    <Footer />
</>
  )
}

export default Faqs