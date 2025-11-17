// src/App.tsx
import { HashRouter, Routes, Route, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { AppNavbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { ComonentsListPage } from './pages/ComponentsListPage';
import { ComponentDetailPage } from './pages/ComponentDetailPage';
import { invoke } from "@tauri-apps/api/core";

const MainLayout = () => (
    <>
        <AppNavbar />
        <main style={{ paddingTop:'56px' }}>
            <Outlet />
        </main>
    </>
);

function App() {
    useEffect(()=>{
        invoke('tauri', {cmd: 'create'})
        .then((resp: any) => console.log(resp))
        .catch((err: any) => console.log(err));
        return ()=>{
            invoke('tauri', {cmd: 'close'})
        .then((resp: any) => console.log(resp))
        .catch((err: any) => console.log(err));
        }

    }, [])
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route element={<MainLayout />}>
                    <Route path="/components" element={<ComonentsListPage />} />
                    <Route path="/components/:id" element={<ComponentDetailPage />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;

