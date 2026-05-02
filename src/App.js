import React from 'react';
import Navbar      from './components/Navbar';
import Hero        from './sections/Hero';
import Marquee     from './sections/Marquee';
import Paket       from './sections/Paket';
import Industri    from './sections/Industri';
import WhyUs       from './sections/WhyUs';
import Proses      from './sections/Proses';
import Testimoni   from './sections/Testimoni';
import CtaFinal    from './sections/CtaFinal';
import Footer      from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* <Marquee /> */}
        <Paket />
        <Industri />
        <WhyUs />
        <Proses />
        {/* <Testimoni /> */}
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}

export default App;
