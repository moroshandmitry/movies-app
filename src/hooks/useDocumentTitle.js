import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TITLES = {
    '/': 'Movies App | Home',
    '/favorite': 'Movies App | Favorite movies',
    '/profile': 'Movies App | Profile'
};

export const useDocumentTitle = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // console.log('[pathname]', pathname);
        const title = TITLES[pathname];
        document.title = title || 'Movies App';
    }, [pathname]);
};
