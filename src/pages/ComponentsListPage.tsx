import { useState, useEffect } from 'react';
import { Container, Spinner, Form, Badge, Image, Button } from 'react-bootstrap';
import { ComponentCard } from '../components/ComponentCard';
import { getCart, getComponents } from '../api/textApi';
import { type ICart, type Component } from '../types';
import './styles/ComponentsListPage.css';
import type { RootState } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { setServiceFilter } from '../store/filterSlice';

export const ComonentsListPage = () => {
    const [components, setComponents] = useState<Component[]>([]);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState<ICart>({sys_calculation_id: null, components_count: 0});

    const filter = useSelector((state: RootState) => state.filter.serviceFilter);
    const dispatch = useDispatch();

    const fetchComponents = (filterTitle: string) => {
        setLoading(true);
        getComponents(filterTitle)
            .then(data => {
                if (Array.isArray(data.items)) {
                    setComponents(data.items);
                } else {
                    console.error("Получены неверные данные:", data);
                    setComponents([]);
                }
            })
            .finally(() => setLoading(false));
    };

    const fetchCart = () => {
        getCart().then(data => {
            if (data){
                setCart(data);
            }else{
                const new_dt: ICart = {sys_calculation_id: null, components_count: 0};
                setCart(new_dt);      
            }
        })
    }

    useEffect(() => {
        fetchComponents('');
        fetchCart()
    }, []);

    const handleSearchSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        fetchComponents(filter);
    };

    return (
        <div className="texts-page-shell">
            <Container className="texts-container">
                <h1 className='page-title'>Компоненты системы</h1>

                <Form className="search" onSubmit={handleSearchSubmit}>
                    <input
                        type="text"
                        placeholder="Поиск текстов"
                        value={filter}
                        onChange={(e) =>  dispatch(setServiceFilter(e.target.value))}
                    />
                    <Button className="btn search" type="submit" >
                                Найти
                    </Button>
                </Form>

                {loading ? (
                    <div className="center">
                        <Spinner animation="border" style={{ color: 'var(--blue)' }} />
                    </div>
                ) : (
                    (components.length > 0) ? (
                        <section className="grid">
                        {components.map(component => (
                            <ComponentCard key={component.id} component={component} />
                        ))}
                    </section>
                    ) : (
                    <div className="center">
                       Компоненты не найдены
                    </div>
                    )
                  
                )}
            </Container>

            {/* плавающая корзина */}
            <div className="systemCalc" title="Текущая заявка">
                <Image
                    src="https://localhost:3000/failivercheck/svg/bar-chat.svg"
                    className="systemCalc__icon"
                    width={70}
                    height={70}
                    alt="Корзина"
                />
                {cart.components_count > 0 && (
                    <Badge className="systemCalc__badge">{cart.components_count}</Badge>
                )}
            </div>
        </div>
    );
};
