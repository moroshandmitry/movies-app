import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from '../Link';
import { StyledNavList, StyledNavItem } from './styles';
import { logoutUser } from '../../store';

const AUTHENTICATED_LINKS = [
    {
        id: 1,
        url: '/',
        exact: true,
        title: 'Home'
    },
    {
        id: 2,
        url: '/favorite',
        title: 'Favorite'
    },
    {
        id: 3,
        url: '/profile',
        title: 'Profile'
    },
    {
        id: 4,
        // url: '/logout',
        title: 'Logout'
    }
];

const NOT_AUTHENTICATED_LINKS = [
    {
        id: 1,
        url: '/',
        exact: true,
        title: 'Home'
    },
    {
        id: 5,
        url: '/auth',
        title: 'Auth'
    }
];

const authSelector = state => !!state.auth.idToken;

export const NavBar = () => {
    const isAuthenticated = useSelector(authSelector);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout = () => {
        dispatch(logoutUser());
        history.push('/auth');
    };

    const links = isAuthenticated
        ? AUTHENTICATED_LINKS
        : NOT_AUTHENTICATED_LINKS;

    return (
        <nav>
            <StyledNavList>
                {links.map(({ id, title, exact, url }) => {
                    return (
                        <StyledNavItem key={id}>
                            {url ? (
                                <Link as={NavLink} to={url} exact={exact}>
                                    {title}
                                </Link>
                            ) : (
                                <Link as="span" onClick={handleLogout}>
                                    {title}
                                </Link>
                            )}
                        </StyledNavItem>
                    );
                })}
            </StyledNavList>
        </nav>
    );
};
