import { Button } from 'react-bootstrap';
import './styles/HomePage.css';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
    const navigate = useNavigate();
    const handleStart = (event: React.FormEvent) => {
        navigate("/components"); 
    };
    return (
        <div className="home-shell">
            <div className="home-inner">
                <h1 className="page-title home-title-fix">
                    Добро пожаловать в FailiverCheck!
                </h1>
                <p className="home-lead">
                    Этот сервис поможет DevOps инженерам расчитать доступность системы.
                </p>
                <Button className="btn add" type="button" onClick={handleStart}>
                    Начать
                </Button>


            </div>
        </div>
    );
};
