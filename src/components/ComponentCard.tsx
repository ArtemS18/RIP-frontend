import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import type { Component } from '../types';
import './styles/TextCard.css';

export const DefaultImage = 'http://localhost:9000/img/img/icon_trash.svg';

interface ComponentCardProps {
    component: Component;
}

export const ComponentCard: React.FC<ComponentCardProps> = ({ component }) => {
    const img = component.img ||DefaultImage;

    return (
        <article className="component-card" data-id={component.id}>
            <Link to={`/components/${component.id}`} className="text-card__img-wrapper">
                <img className="component-card__img" src={img} alt={component.title} />
            </Link>

            <div className="component-card__body">
                <p>{component.title}</p>

                <div className="component-card__actions">
                    {/* <Button className="btn add" type="button">
                                Добавить+
                            </Button> */}
                    <Link to={`/components/${component.id}`}>
                        <Button className="btn more" type="button">
                            Подробнее
                        </Button>
                    </Link>
                </div>
            </div>
        </article>
    );
};
