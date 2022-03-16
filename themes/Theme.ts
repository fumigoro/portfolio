import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    typography: {
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 700,

        h1: { fontSize: 60, fontWwight: 600 },
        h2: { fontSize: 48, fontWwight: 600 },
        h3: { fontSize: 42, fontWwight: 600 },
        h4: { fontSize: 36, fontWwight: 600 },
        h5: { fontSize: 20, fontWwight: 600 },
        h6: { fontSize: 18, fontWwight: 600 },
        subtitle1: { fontSize: 18 },
        body1: { fontSize: 16 },
        button: { textTransform: 'none' },
        fontFamily: "Noto Sans JP"
    },
});
