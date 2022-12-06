import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import Button from "@mui/material/Button";

const CustomIconButton = ({name, icon, color, onClick}) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Button sx={{
            backgroundColor: color, 
            color: colors.primary[100],
            width: "81px"
            }} onClick={onClick}>
            <Box display="flex" flexDirection="column" justifyItems="center" alignItems="center">
                {icon}
                <Typography variant="h7" color={colors.primary[100]}>
                    {name}
                </Typography>
            </Box>
        </Button>
    );
}

export default CustomIconButton;