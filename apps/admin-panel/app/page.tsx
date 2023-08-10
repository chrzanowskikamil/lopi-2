import styles from './page.module.scss';
import { Common } from '@lopi-2/common';

export default async function Index() {
  return (
    <div className={styles.page}>
      <span>Hello World Admin Panel: LOPI-2</span>
      <Common />
    </div>
  );
}
