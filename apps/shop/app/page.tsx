import styles from './page.module.scss';
import { Common } from '@lopi-2/common';
import FormExample from '../components/form';

export default async function Index() {
  return (
    <div className={styles.page}>
      <span>Hello World Shop: LOPI-2</span>
      <Common />
      <FormExample />
    </div>
  );
}
