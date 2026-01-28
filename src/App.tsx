// src/App.tsx
import { HashRouter, Routes, Route, Outlet } from 'react-router-dom';
import { AppNavbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { ComonentsListPage } from './pages/ComponentsListPage';
import { ComponentDetailPage } from './pages/ComponentDetailPage';

const MainLayout = () => (
    <>
        <AppNavbar />
        <main style={{ paddingTop:'56px' }}>
            <Outlet />
        </main>
    </>
);

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/components" element={<ComonentsListPage />} />
                    <Route path="/components/:id" element={<ComponentDetailPage />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
