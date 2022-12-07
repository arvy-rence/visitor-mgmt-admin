import { Box, Typography, useTheme} from "@mui/material";
import {tokens} from "../theme";


const InfoCard = ({width, height, title, subtitle, icon, bgcolor, textcolor}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return(
        <Box width={width} height={height} backgroundColor={bgcolor} display="flex" flexDirection="column" alignItems="center" justifyContent="center" >
            <Typography variant="h4" color={textcolor}>
                <Box display="flex" flexDirection="row" marginBottom="-5px">
                    {icon}
                    {title}
                </Box>
            </Typography>
            <Typography variant="h3" color={textcolor} fontWeight="bold">
                {subtitle}
            </Typography>
        </Box>
    );
}

export default InfoCard;