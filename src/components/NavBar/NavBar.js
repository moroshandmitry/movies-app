import { NavLink } from 'react-router-dom';

import { Link } from '../Link';
import { StyledNavList, StyledNavItem } from './styles';

const LINKS = [
    {
        id: 1,
        url: '/',
        exact: true,
        title: 'Home'
    },
    {
        id: 2,
        url: '/favorite',
        title: 'Favorite movies'
    },
    {
        id: 3,
        url: '/profile',
        title: 'Profile'
    },
    {
        id: 4,
        url: '/logout',
        title: 'Logout'
    }
];

export const NavBar = () => {
    return (
        <nav>
            <StyledNavList>
                {LINKS.map(({ id, title, exact, url }) => {
                    return (
                        <StyledNavItem key={id}>
                            <Link as={NavLink} to={url} exact>
                                {title}
                            </Link>
                        </StyledNavItem>
                    );
                })}
            </StyledNavList>
        </nav>
    );
};
