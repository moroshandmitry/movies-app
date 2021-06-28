import { Input } from '../Input';
import { Button } from '../Button';
import { StyledWidthLimiter } from '../../styles';
import { StyledHeader, StyledInputWrapper, StyledSearch } from './styles';

export const Header = () => (
    <StyledHeader>
        <StyledWidthLimiter>
            <StyledSearch>
                <StyledInputWrapper>
                    <Input
                        type="text"
                        name="search"
                        placeholder="Search movies"
                    />
                </StyledInputWrapper>
                <Button>Search</Button>
            </StyledSearch>
        </StyledWidthLimiter>
    </StyledHeader>
);
