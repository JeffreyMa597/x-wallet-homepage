import Image from 'next/image';
import Logo from '@/assets/images/logo.png';
import Twitter from '@/assets/images/twitter.png';
import Discord from '@/assets/images/discord.png';

import styles from './Header.module.scss';
export default function Header() {
  return (
    <div className={styles.headerWrap}>
      <div className={styles.headerBox}>
        <Image src={Logo} alt="Logo" />
        <div className={styles.mediaWrap}>
          <Image src={Twitter} alt="Twitter" />
          <Image src={Discord} alt="Discord" />
        </div>
      </div>
    </div>
  );
}
