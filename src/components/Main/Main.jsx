import video from '../../assets/WorldCupHeader/Video/WorldCupVideo3.mp4';
import s from './main.module.scss';

export default function Main() {
  return (
    <section className={s.hero}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className={s.bgVideo}
      >
        <source src={video} type="video/mp4" />
      </video>
    </section>
  );
}