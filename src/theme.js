import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";


export const tokens = (mode) => ({
    ...(mode === "dark" ? 
    {
        primary: {
            100: "#cccfdb",
            200: "#999fb7",
            300: "#667092",
            400: "#33406e",
            500: "#00104a",
            600: "#000d3b",
            700: "#000a2c",
            800: "#00061e",
            900: "#00030f"
        },
        secondary: {
            100: "#f9cece",
            200: "#f39d9d",
            300: "#ed6b6b",
            400: "#e73a3a",
            500: "#e10909",
            600: "#b40707",
            700: "#870505",
            800: "#5a0404",
            900: "#2d0202"
        },
        green: {
            100: "#cce9d4",
            200: "#99d4a9",
            300: "#67be7e",
            400: "#34a953",
            500: "#019328",
            600: "#017620",
            700: "#015818",
            800: "#003b10",
            900: "#001d08"
        },
        white: "#FFFFFF",
        black: "#000000",
    } : {
        primary: {
            100: "#00030f",
            200: "#00061e",
            300: "#000a2c",
            400: "#000d3b",
            500: "#00104a",
            600: "#33406e",
            700: "#667092",
            800: "#999fb7",
            900: "#cccfdb"
        },
        secondary: {
            100: "#2d0202",
            200: "#5a0404",
            300: "#870505",
            400: "#b40707",
            500: "#e10909",
            600: "#e73a3a",
            700: "#ed6b6b",
            800: "#f39d9d",
            900: "#f9cece"
        },
        green: {
            100: "#001d08",
            200: "#003b10",
            300: "#015818",
            400: "#017620",
            500: "#019328",
            600: "#34a953",
            700: "#67be7e",
            800: "#99d4a9",
            900: "#cce9d4"
        },
    })
});


//Mui theme settings
export const themeSettings = (mode) => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === "dark" ?
            {
                primary: {
                    main: colors.primary[500],
                },
                secondary: {
                    main: colors.secondary[500],
                }
            } : {
                primary: {
                    main: colors.primary[100],
                },
                secondary: {
                    main: colors.secondary[100],
                }
            })
        },
        typography: {
            fontFamily: ["Kulim Park", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Khula", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Khula", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Khula", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Khula", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Khula", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Khula", "sans-serif"].join(","),
                fontSize: 14,
            },
            h7: {
                fontFamily: ["Khula", "sans-serif"].join(","),
                fontSize: 12,
            },
        }
    }
}


//context for color mode
export const ColorModeContext = createContext({
    toggleColorMode: () => {}
});

export const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(
    () => ({
        toggleColorMode:() =>
            setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
    []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return [theme, colorMode];
}