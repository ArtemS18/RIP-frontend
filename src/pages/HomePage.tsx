import './styles/HomePage.css';
import { Link } from 'react-router-dom';

export const HomePage = () => {
    return (
        <div className="home-shell">
            <div className="home-inner">
                <Link to='/components'>
                    <h1 className="page-title home-title-fix">
                        Добро пожаловать в FailiverCheck!
                    </h1>
                    <p className="home-lead">
                        Этот сервис поможет DevOps инженерам расчитать доступность системы.
                    </p>
                </Link>
            </div>
        </div>
    );
};
