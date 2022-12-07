import { ResponsiveLine } from '@nivo/line';
import { lineChartData as data} from "../data/mockData";
import { useTheme } from "@mui/material";
import { tokens} from "../theme";

const LineChart = ({xlabel, ylabel}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return(
        <ResponsiveLine
            data={data}
            theme={{
                axis: {
                    domain: {
                        line: {
                            stroke: colors.black,
                        }
                    },
                    legend: {
                        text: {
                            fill: colors.black,
                        }
                    },
                    ticks: {
                        line: {
                            stroke: colors.black,
                            strokeWidth: 1,
                        },
                        text: {
                            fill: colors.black,
                        }
                    }
                },
                legends: {
                    text: {
                        fill: colors.black,
                    }
                },
                tooltip: {
                    container: {
                        color: colors.black
                    }
                }
            }}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: ylabel,
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickValues: 5,
                tickSize: 3,
                tickPadding: 5,
                tickRotation: 0,
                legend: xlabel,
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            enableGridX={false}
            pointSize={5}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor', modifiers: [] }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: 'right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
            motionConfig="stiff"
        />
    );
}

export default LineChart;