import styles from './common.module.scss';

export type CommonProps = NonNullable<unknown>;

export function Common(props: CommonProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Common!</h1>
    </div>
  );
}

export default Common;
