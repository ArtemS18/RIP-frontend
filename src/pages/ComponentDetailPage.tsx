import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Spinner, Button } from 'react-bootstrap';
import { getComponentById } from '../api/textApi';
import type { Component } from '../types';
import { DefaultImage } from '../components/ComponentCard';
import { CustomBreadcrumbs } from '../components/Breadcrumbs';
import './styles/ComponentDetailPage.css'; // подключено твое новое название!

export const ComponentDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const [component, setComponent] = useState<Component | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            setLoading(true);
            getComponentById(id)
                .then(data => setComponent(data))
                .finally(() => setLoading(false));
        }
    }, [id]);

    const displayImage = component?.img || DefaultImage;

    if (loading) {
        return (
            <div className="detail-page-shell detail-page-shell--center">
                <Spinner animation="border" style={{ color:'#045FB4', width:'3rem', height:'3rem' }} />
            </div>
        );
    }

    if (!component) {
        return (
            <div className="detail-page-shell">
                <div className="page not-found-block">
                    <h2>Компонент не найден</h2>
                    <Link to="/components">
                        <Button className="btn-more" style={{ marginTop:'12px' }}>
                            Вернуться к списку
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    const breadcrumbs = [
        { label: 'Компоненты', path: '/components' },
        { label: component.title, active: true },
    ];

    return (
        <div className="detail-page-shell">
            <div className="detail-breadcrumbs-wrapper">
                    <CustomBreadcrumbs crumbs={breadcrumbs} />
                </div>
            <div className="component-detail-main">
                
                <div className="component-detail-header">
                    <img src={displayImage} alt={component.title} />
                        <span className="component-detail-title">
                            {component.title}
                        </span>
                </div>
                <div className="component-detail-grid">
                    <div className="component-detail-card">
                        <div className="title">Характеристики</div>
                            <ul className="component-detail-list">
                                <li>Тип: <span>{component.type}</span></li>
                                <li>Доступность: <span>{component.available}%</span></li>
                                <li>MTBF*: <span>{component.mtbf} ч.</span></li>
                                <li>MTTR**: <span>{component.mttr} ч.</span></li>
                            </ul>
                        <div className="component-detail-footnote">* - среднее время работы до отказа<br/>** - среднее время необходимое для восстановления</div>
                    </div>
                    <div className="component-detail-card">
                        <div className="title">Описание</div>
                        <div className="description">{component.description}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
