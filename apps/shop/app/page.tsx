import { FourthSection } from './components/MainPage/FourthSection/FourthSection';
import { HeroSection } from './components/MainPage/HeroSection/HeroSection';
import { SecondSection } from './components/MainPage/SecondSection/SecondSection';
import { ThirdSection } from './components/MainPage/ThirdSection/ThirdSection';
import style from './index.module.scss';

const Index = async () => {
  return (
    <main className={style.main}>
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </main>
  );
};
export default Index;
