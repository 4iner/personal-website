import { createStyled, createTheme } from '@mui/system';

const defaultThemeObj = {
    color: {
        primary: '#74EBD5',
        secondary: '#70ACE6',
    },
    size: {
        spacing: {
            border: 2,
            small: 5,
        },
        text: {
            small: 7.5,
            medium: 10,
            large: 15,
        },
    },
};

const defaultTheme = createTheme(defaultThemeObj);

const styled = createStyled({ defaultTheme: defaultTheme });

const textSize = size => {
    const smallWindow = window.innerWidth <= 760;
    if (smallWindow) {
        return defaultTheme.size.text[size];
    } else {
        return defaultTheme.size.text[size] * 2;
    }
};

// eslint-disable-next-line no-unused-vars
const samples = styled('div')`
    color: white;
`;

styled.textSize = textSize;

export default styled;
