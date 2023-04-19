import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, World } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <World />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <About />
      <div className="gradient-04 z-0" />
      <Insights />
    </div>
    <div className="relative">
      <Feedback />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <Footer />
    </div>
  </div>
);

export default Page;
