import React from "react";
import { Box, Grid } from "@mui/material";
import Weather from "./components/weather";
import styles from "./style";
import { useTheme } from "@mui/material/styles";

const Index = () => {
  const theme = useTheme();
  const style = styles(theme);
  return (
    <>
      <div>
        <Box>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Box sx={style.MainBoxWeather}>
                <Weather />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default Index;
