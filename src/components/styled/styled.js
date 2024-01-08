import { createStyled, createTheme } from '@mui/system';

const defaultTheme = createTheme({
    color: {
        primary: '#74EBD5',
        secondary: '#70ACE6',
    },
    size: {
        spacing: {
            border: 2,
            small: 7,
        },
    },
});

const styled = createStyled({ defaultTheme });

// eslint-disable-next-line no-unused-vars
const samples = styled('div')`
    color: white;
`;

export default styled;
