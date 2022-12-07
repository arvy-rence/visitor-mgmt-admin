import {Box, IconButton, Typography, useTheme} from "@mui/material";
import { useContent, useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from '@mui/material/InputBase';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            {/* SearchBar */}
            {/*<Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">*/}
            {/*    <InputBase sx={{ml: 2, flex: 1}} placeholder="Search"/>*/}
            {/*    <IconButton type="button" sx={{p:1}}>*/}
            {/*        <SearchOutlinedIcon/>*/}
            {/*    </IconButton>*/}
            {/*</Box>*/}
            <Box display="flex" alignItems="center">
                <Box display="block" width="10px"/>
                <Typography>
                    6:11 AM
                </Typography>
                <Box display="block" width="20px"/>
                <Typography>
                    Monday, 12th October
                </Typography>
            </Box>

            {/* ICONS */}
            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "dark" ? (<DarkModeOutlinedIcon/>) : (<LightModeOutlinedIcon/>)}
                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <PersonOutlineOutlinedIcon/>
                </IconButton>
                
            </Box>
        </Box>
    );
}

export default Topbar;