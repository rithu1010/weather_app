import React from "react";
import { Box, Grid, Typography, Divider } from "@mui/material";
import styles from "../style";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";

const WeatherIndex = () => {
  const theme = useTheme();
  const style = styles(theme);
  const forecastData = [
    { time: "Now", temperature: 25 },
    { time: "2 AM", temperature: 25 },
    { time: "3 AM", temperature: 23 },
    { time: "4 AM", temperature: 22 },
    { time: "6 AM", temperature: 20 },
    { time: "7 AM", temperature: 25 },
    { time: "8 AM", temperature: 25 },
    { time: "9 AM", temperature: 22 },
    { time: "10 AM", temperature: 20 },
  ];
  return (
    <>
      <div>
        <Box sx={style.paddingBox}>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              lg={5}
              xl={5}
              md={6}
              sm={7}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Box sx={style.WeatherBox}>
                <Box>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box>
                      <Typography sx={style.TodayTypo}>Today</Typography>
                    </Box>
                    <Box>
                      <KeyboardArrowDownIcon sx={style.arrowdownicon} />
                    </Box>
                  </Box>
                  <Box sx={style.display1}>
                    <WbSunnyIcon sx={style.sunIcon} />
                    <Typography sx={style.countTypo}>32</Typography>
                  </Box>
                  <Box sx={style.display}>
                    <Typography sx={style.TodayTypo1}>Sunny</Typography>
                  </Box>
                  <Box sx={style.display}>
                    <Typography sx={style.addresstypo}>
                      California, Los Angeles
                    </Typography>
                  </Box>
                  <Box sx={style.display}>
                    <Typography sx={style.addresstypo}>21 Oct 2019</Typography>
                  </Box>
                  <Box sx={style.display}>
                    <Box>
                      <Typography sx={style.addresstypo}>
                        California, Los Angeles
                      </Typography>
                    </Box>
                    <Divider
                      orientation="vertical"
                      flexItem={1}
                      sx={style.divider}
                    />
                    <Box>
                      <Typography sx={style.addresstypo}>
                        California, Los Angeles
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} xl={6} md={5} sm={4}>
              <Box sx={style.WeatherBox1}>
                <Box>
                  <Box sx={style.display3}>
                    {forecastData.slice(0, 5).map((data, index) => (
                      <Box key={index}>
                        <Typography sx={style.forcastdata}>
                          {data.time}
                        </Typography>
                        <Box style={{ display: "flex" }}>
                          <CloudIcon sx={style.weathericon} />

                          <Typography sx={style.forcastdata}>
                            {data.temperature}°
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                  <Divider flexItem={1} sx={style.divider1} />
                  <Box sx={{ ...style.display3, marginTop: "12px" }}>
                    {forecastData.slice(0, 5).map((data, index) => (
                      <Box key={index}>
                        <Typography sx={style.forcastdata}>
                          {data.time}
                        </Typography>
                        <Box style={{ display: "flex" }}>
                          <CloudIcon sx={style.weathericon} />
                          <Typography sx={style.forcastdata}>
                            {data.temperature}°
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box>
                  <Typography sx={style.randomText}>Random Text</Typography>
                </Box>
                <Box>
                  <Typography sx={style.randomText1}>
                    Improve him believe opinion offered met and end cheered
                    forbade. Friendly as stronger speedily by recurred. Son
                    interest wandered sir addition end say. Manners beloved
                    affixed picture men ask.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default WeatherIndex;
