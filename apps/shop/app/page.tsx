import { Common } from '@lopi-2/common';
import SignInForm from './components/Auth/SignInForm/SignInForm';
import SignUpForm from './components/Auth/SignUpForm/SignUpForm';
import { TempComponent } from './components/TempComponent';
import { ThirdSection } from './components/MainPage/ThirdSection/ThirdSection';

const Index = async () => {
  return (
    <>
      {/* <div className={``}>
        <span>Hello World Shop: LOPI-2</span>
        <Common />

        <SignInForm />
        <SignUpForm />

        <TempComponent /> */}
      <ThirdSection />
      {/* </div> */}
    </>
  );
};
export default Index;
