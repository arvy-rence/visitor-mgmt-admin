import { Box, Typography, useTheme} from "@mui/material";
import {tokens} from "../theme";


const InfoCard = ({width, height, title, subtitle, icon, bgcolor, textcolor}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return(
        <Box width={width} height={height} backgroundColor={bgcolor} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Typography variant="h2" color={textcolor}>
                {icon}
                {title}
            </Typography>
            <Typography variant="h6" color={textcolor}>
                {subtitle}
            </Typography>
        </Box>
    );
}

export default InfoCard;