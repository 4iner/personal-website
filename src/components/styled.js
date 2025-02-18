import { createStyled, createTheme } from '@mui/system';


const defaultThemeObj = {
    color: {
        // Main colors
        primary: '#74EBD5',      
        secondary: '#70ACE6',    
        
        // Contrasting colors for header
        contrastPrimary: '#2d2d2d',    // Dark gray
        contrastSecondary: '#1a1a1a',  // Darker gray
        
        // Accent colors
        accent: '#8a2be2',       // Violet for highlights
        accentLight: '#9d4ced',  // Lighter violet for hover states
        
        // Text colors
        text: '#333333',         // Dark gray for main text
        textLight: '#ffffff'      // White text for dark backgrounds
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
