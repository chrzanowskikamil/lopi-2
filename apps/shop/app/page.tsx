import styles from './page.module.scss';
import { Common } from '@lopi-2/common';

import SignInForm from './components/Auth/SignInForm/SignInForm';
import SignUpForm from './components/Auth/SignUpForm/SignUpForm';
import Footer from './components/Footer/Footer';
import TileDisplay from './components/tileShop/tileDisplay';

const Index = async () => {
  return (
    <>
      <div className={styles.page}>
        <span>Hello World Shop: LOPI-2</span>
        <Common />

        <SignInForm />
        <SignUpForm />
      </div>
      <TileDisplay />
      <Footer />
    </>
  );
};
export default Index;
