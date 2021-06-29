import PT from 'prop-types';

import { Input } from '../Input';
import { Button } from '../Button';
import { NavBar } from '../NavBar';
import {
    StyledHeader,
    StyledInputWrapper,
    StyledSearch,
    StyledHeaderWidthLimiter
} from './styles';

export const Header = ({
    // state
    search,
    isSearching,
    // state
    // handleFunc
    onChangeSearch,
    onSearchMovies
    // handleFunc
}) => (
    <StyledHeader>
        <StyledHeaderWidthLimiter>
            <StyledSearch>
                <StyledInputWrapper>
                    <Input
                        disabled={isSearching}
                        type="text"
                        name="search"
                        placeholder="Search movies"
                        value={search}
                        onChange={onChangeSearch}
                    />
                </StyledInputWrapper>
                <Button disabled={isSearching} onClick={onSearchMovies}>
                    {isSearching ? 'Searching' : 'Search'}
                </Button>
            </StyledSearch>

            <NavBar />
        </StyledHeaderWidthLimiter>
    </StyledHeader>
);

Header.propTypes = {
    /**
     * Search input value
     */
    search: PT.string.isRequired,
    /**
     * Indicates if we are searching movies for input and button
     */
    isSearching: PT.bool.isRequired,
    /**
     * Handler for changing search input value
     */
    onChangeSearch: PT.func.isRequired,
    /**
     * Handler for searching movies
     */
    onSearchMovies: PT.func.isRequired
};
