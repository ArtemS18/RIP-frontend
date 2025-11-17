import './styles/HomePage.css';
import { Link } from 'react-router-dom';

export const HomePage = () => (
  <div className="home-shell">
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
