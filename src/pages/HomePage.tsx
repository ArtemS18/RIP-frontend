import './styles/HomePage.css';
import { Link } from 'react-router-dom';
import videoBg from '../assets/video-bg.mp4'; 

export const HomePage = () => (
  <div className="home-shell">
    <video 
      className="background-video"
      autoPlay 
      loop 
      muted 
      playsInline
      preload="auto"
    >
      <source src={videoBg} type="video/mp4" />
      Ваш браузер не поддерживает видео.
    </video>
    <div className="background-overlay"></div>
    <div className="home-inner">
      <Link to='/components'>
        <h4 className="page-title home-title-animated">
          Добро пожаловать в <br/> <span className="accent-word">FailiverCheck!</span>
        </h4>
        <p className="home-lead home-lead-animated">
          Этот сервис поможет DevOps инженерам расчитать доступность системы.
        </p>
      </Link>
    </div>
  </div>
);
