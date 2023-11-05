import Image from 'next/image';
import Banner from '@/assets/images/banner.jpg';
import XLogo from '@/assets/images/xlogo.png';
import ScreenShot from '@/assets/images/screenShot.png';
import RightArrow from '@/assets/images/rightArrow.png';
import Btc from '@/assets/images/btc.png';
import Link from '@/assets/images/link.png';
import Eth from '@/assets/images/eth.png';

import styles from './Content.module.scss';

export default function Content() {
  const partnerList = [
    {
      label: 'Btc1',
      icon: Btc,
    },
    {
      label: 'Link1',
      icon: Link,
    },
    {
      label: 'Eth',
      icon: Eth,
    },
    {
      label: 'Btc2',
      icon: Btc,
    },
    {
      label: 'Link2',
      icon: Link,
    },
  ];

  return (
    <div className={styles.contentWrap}>
      <div className={styles.title}>Onboarding Twitter User to AA Web3 Wallet</div>
      <div className={styles.bannerWrap}>
        <Image src={Banner} alt="Banner" layout="responsive" />

        <div className={styles.desc}>
          Seamlessly connect your Twitter with the decentralized world. X-wallet allows you to send,
          receive, and showcase NFTs and tokens, enriching your social interactions.
        </div>
        <div className={styles.downloadWrap}>
          <div className={styles.downloadBtn}>Download</div>
        </div>
      </div>

      <div className={styles.createWrap}>
        <div className={styles.createBox}>
          <div className={styles.leftPart}>
            <div className={styles.mainTitle}>Imitate</div>
            <div className={styles.subTitle}>Pre-caculate twitter user AA account.</div>
            <div className={styles.createInputWrap}>
              <Image className={styles.xlogo} src={XLogo} alt="xlogo" width={175} height={50} />
              <div className={styles.createInput}>
                <input type="text" />
                <div className={styles.rightArrowWrap}>
                  <Image src={RightArrow} alt="rightArrow" width={24} height={26} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightPart}>
            <Image src={ScreenShot} alt="screenShot" width={320} height={340} />
          </div>
        </div>
      </div>

      <div className={styles.partnerWrap}>
        <div className={styles.partnerTitle}>Partners</div>
        <div className={styles.iconsBox}>
          {partnerList?.map((item) => (
            <div key={item.label} className={styles.partnerItem}>
              <Image src={item.icon} alt="icon" width={40} height={40} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.footer}></div>
    </div>
  );
}
