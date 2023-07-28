import styles from './page.module.scss';
import { Common } from '@lopi-2/common';
import FormExample from '../components/form';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

const Index = async () => {
  return (
    <>
      <NavBar />
      <div className={styles.page}>
        <span>Hello World Shop: LOPI-2</span>
        <Common />
        <FormExample />
      </div>
      <Footer />
    </>
  );
};
export default Index;
