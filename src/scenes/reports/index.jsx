import InfoCard from "../../components/InfoCard";
import { tokens } from "../../theme";
import {Box, useTheme} from "@mui/material";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PieChart from "../../components/PieChart";

export const Reports = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <div>
            <h1>Reports</h1>
            <Box display="flex" flexDirection="row" justifyContent="space-evenly">
                <InfoCard
                    height={210}
                    width={300}
                    bgcolor={colors.primary[500]}
                    title="Asd"
                    textcolor={colors.primary[100]}
                    subtitle="asdasda"
                    icon={<PersonOutlineOutlinedIcon/>}
                />
                <Box display="flex" flexDirection="column" justifyContent="space-between">
                    <InfoCard
                        height={100}
                        width={300}
                        bgcolor={colors.primary[100]}
                        title="Asd"
                        textcolor={colors.primary[500]}
                        subtitle="asdasda"
                        icon={<PersonOutlineOutlinedIcon/>}
                    />
                    <InfoCard
                        height={100}
                        width={300}
                        bgcolor={colors.primary[100]}
                        title="Asd"
                        textcolor={colors.primary[500]}
                        subtitle="asdasda"
                        icon={<PersonOutlineOutlinedIcon/>}
                    />
                </Box>
                <InfoCard
                    height={210}
                    width={300}
                    bgcolor={colors.primary[500]}
                    title="Asd"
                    textcolor={colors.primary[100]}
                    subtitle="asdasda"
                    icon={<PersonOutlineOutlinedIcon/>}
                />
                <Box display="flex" flexDirection="column" justifyContent="space-between">
                    <InfoCard
                        height={100}
                        width={300}
                        bgcolor={colors.primary[100]}
                        title="Asd"
                        textcolor={colors.primary[500]}
                        subtitle="asdasda"
                        icon={<PersonOutlineOutlinedIcon/>}
                    />
                    <InfoCard
                        height={100}
                        width={300}
                        bgcolor={colors.primary[100]}
                        title="Asd"
                        textcolor={colors.primary[500]}
                        subtitle="asdasda"
                        icon={<PersonOutlineOutlinedIcon/>}
                    />
                </Box>
            </Box>
            <PieChart/>
        </div>
    );
}

export default Reports;