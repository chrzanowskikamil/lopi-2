import { ForthSection } from './components/MainPage/ForthSection/ForthSection';
import { HeroSection } from './components/HeroSection/HeroSection';
import { ThirdSection } from './components/MainPage/ThirdSection/ThirdSection';

const Index = async () => {
  return (
    <>
      <HeroSection />
      <ThirdSection />
          <ForthSection />
    </>
  );
};
export default Index;
