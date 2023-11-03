import Header from '@/components/Header/Header';
import Content from '@/components/Content/Content';

import styles from './index.module.scss';

function HomePage() {
  return (
    <div className={styles.main}>
      <Header />
      <Content />
    </div>
  );
}

export default HomePage;
