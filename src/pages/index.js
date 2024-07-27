import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import Weather from "./components/weather";
import styles from "./style";
import { useTheme } from "@mui/material/styles";

const Index = () => {
  const theme = useTheme();
  const style = styles(theme);
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=7788888889`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, long]);

  return (
    <>
      <div>
        <Box>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Box sx={style.MainBoxWeather}>
                <Weather weatherdata={data} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default Index;
