import InfoCard from "../../components/InfoCard";
import { tokens } from "../../theme";
import {Box, Typography, useTheme} from "@mui/material";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PieChart from "../../components/PieChart";
import LineChart from "../../components/LineChart";

export const Reports = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <div>
            <Box display="flex" flexDirection="row" justifyContent="space-between" m={2}>
                <Box display="flex" flexDirection="row">
                    <InfoCard
                        height={140}
                        width={290}
                        bgcolor={colors.primary[500]}
                        title="Asd"
                        textcolor={colors.primary[100]}
                        subtitle="asdasda"
                        icon={<PersonOutlineOutlinedIcon/>}
                    />
                    <Box display="flex" flexDirection="column" justifyContent="space-between" ml={2}>
                        <InfoCard
                            height={65}
                            width={290}
                            bgcolor={colors.primary[100]}
                            title="Asd"
                            textcolor={colors.primary[500]}
                            subtitle="asdasda"
                        />
                        <InfoCard
                            height={65}
                            width={290}
                            bgcolor={colors.primary[100]}
                            title="Asd"
                            textcolor={colors.primary[500]}
                            subtitle="asdasda"
                        />
                    </Box>
                </Box>
                <Box display="flex" flexDirection="row">
                    <InfoCard
                        height={140}
                        width={290}
                        bgcolor={colors.primary[500]}
                        title="Asd"
                        textcolor={colors.primary[100]}
                        subtitle="asdasda"
                    />
                    <Box display="flex" flexDirection="column" justifyContent="space-between" ml={2}>
                        <InfoCard
                            height={65}
                            width={290}
                            bgcolor={colors.primary[100]}
                            title="Asd"
                            textcolor={colors.primary[500]}
                            subtitle="asdasda"
                        />
                        <InfoCard
                            height={65}
                            width={290}
                            bgcolor={colors.primary[100]}
                            title="Asd"
                            textcolor={colors.primary[500]}
                            subtitle="asdasda"
                        />
                    </Box>
                </Box>
            </Box>
            <Box height="35vh" backgroundColor={colors.white} m={2}>
                <LineChart xlabel="Count" ylabel="Month"/>
            </Box>
            <Box display="flex" flexDirection="row" height="30vh">
                <Box width="40vw" backgroundColor={colors.white} m={2} mt={0}>
                    <Typography variant="h4" color={colors.primary[500]}>
                        TOP 5 BARANGGAY VISITORS
                    </Typography>
                    <Typography variant="h4" color={colors.primary[500]}>
                        (for the month of: November)
                    </Typography>
                    <Typography variant="h4" color={colors.primary[500]}>
                        1. Marulas
                        2. Malinta
                        3. Karuhatan
                        4. Lingunan
                        5. Gen T
                    </Typography>
                </Box>
                <Box width="30vw" backgroundColor={colors.white} m={2} mt={0} alignItems="flex-end">
                    <PieChart/>
                </Box>
            </Box>
        </div>
    );
}

export default Reports;