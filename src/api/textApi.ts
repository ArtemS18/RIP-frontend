import type { IPaginatedComponents, Component, ICart } from '../types';
import { COMPONENTS_MOCK, BUCKET_MOCK } from './mock';

const API_PREFIX = '/api';

// Получение списка текстов с фильтраией по названию
export const getComponents = async (title: string): Promise<IPaginatedComponents> => {
    console.log
    const url = title 
        ? `${API_PREFIX}/components/?title=${encodeURIComponent(title)}}`
        : `${API_PREFIX}/components/`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Backend is not available');
        }
        const data = await response.json();
        return {
            items: data.data.components || [],
            total: data.total || 0
    };
    } catch (error) {
        console.warn('Failed to fetch from backend, using mock data.', error);
        const filteredMockItems = COMPONENTS_MOCK.items.filter(component =>
            component.title.toLowerCase().includes(title.toLowerCase())
        );
        return { items: filteredMockItems, total: filteredMockItems.length };
    }
};



// Получение одного фактора по ID
export const getComponentById = async (id: string): Promise<Component | null> => {
    try {
        const response = await fetch(`${API_PREFIX}/components/${id}`);
        if (!response.ok) {
            throw new Error('Backend is not available');
        }
        const raw = await response.json();
        return raw.data
    } catch (error) {
        console.warn(`Failed to fetch text ${id}, using mock data.`, error);
        const component = COMPONENTS_MOCK.items.find(f => f.id === parseInt(id));
        return component || null;
    }
};



export const getCart = async (): Promise<ICart | null>=>{
    try{
        const respone = await fetch(`${API_PREFIX}/system_calcs/my_bucket`)
        if (!respone.ok){
            throw new Error('Backend is not available');
        }
        const raw = await respone.json();
        return raw.data;
    }catch(e){
        console.warn(`Failed to fetch, using mock data.`, e);
        const mock = BUCKET_MOCK
        return  mock|| null;
    }

}