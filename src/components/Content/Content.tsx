import Image from 'next/image';
import styles from './Content.module.scss';
import Banner from '@/assets/images/banner.jpg';

export default function Content() {
  const partnerList = [
    {
      label: 'Btc',
      icon: '',
      // icon: 'https://raw.githubusercontent.com/0xLukin/x-wallet-ethhangzhou/main/src/pages/Popup/assets/svg/setting.png',
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

      <div className={styles.createWrap}>imitate</div>

      <div className={styles.partnerWrap}>
        <div className={styles.partnerTitle}>Partners</div>
        {partnerList?.map((item) => (
          <div key={item.icon} className={styles.partnerItem}>
            <Image src={item.icon} alt="icon" layout="responsive" width={10} height={10} />
          </div>
        ))}
      </div>
    </div>
  );
}
