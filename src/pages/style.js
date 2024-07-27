import weatherimg from "../assets/background.jpg";

const styles = () => ({
  WeatherBox: {
    "&.MuiBox-root": {
      backgroundColor: "#FAE2BD",
      padding: "40px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "16.78px",
      width: "fit-content",
    },
  },
  MainBoxWeather: {
    "&.MuiBox-root": {
      height: "100vh",
      backgroundImage: `url(${weatherimg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },

  paddingBox: {
    "&.MuiBox-root": {
      padding: "70px 70px 70px 70px",
    },
  },

  TodayTypo: {
    "&.MuiTypography-root": {
      color: "#EFAA82",
      fontSize: "18PX",
      fontWeight: "600",
      fontFamily: "'Poppins', Arial, sans-serif",
    },
  },
  TodayTypo1: {
    "&.MuiTypography-root": {
      color: "#EFAA82",
      fontWeight: "600",
      fontSize: "18PX",
      fontFamily: "'Poppins', Arial, sans-serif",
    },
  },
  addresstypo: {
    "&.MuiTypography-root": {
      color: "#EFAA82",
      fontWeight: "500",
      fontSize: "16PX",
      fontFamily: "'Poppins', Arial, sans-serif",
    },
  },
  arrowdownicon: {
    "&.MuiSvgIcon-root": {
      fontSize: "28px",
      color: "#EFAA82",
      marginLeft: "5px",
    },
  },
  sunIcon: {
    "&.MuiSvgIcon-root": {
      fontSize: "64px",
      color: "#EFAA82",
      marginLeft: "0px",
      marginTop: "12px",
      marginRight: "10px",
    },
  },
  countTypo: {
    "&.MuiTypography-root": {
      color: "#EFAA82",
      fontSize: "64px",
      fontWeight: "600",
      fontFamily: "'Poppins', Arial, sans-serif",
    },
  },
  display: {
    "&.MuiBox-root": {
      display: "flex",
      justifyContent: "center",
      marginTop: "12px",
    },
  },
  display3: {
    "&.MuiBox-root": {
      display: "flex",
      justifyContent: "center",
      marginTop: "5px",
    },
  },
  display1: {
    "&.MuiBox-root": {
      display: "flex",
      justifyContent: "center",
      marginBottom: "-18px",
    },
  },
  divider: {
    "&.MuiDivider-root": {
      //   height: 10,
      color: "#EFAA82",
      marginLeft: "4px",
      marginRight: "4px",
      backgroundColor: "#EFAA82",
      opacity: "0.8",
    },
  },
  divider1: {
    "&.MuiDivider-root": {
      //   height: 10,
      color: "#fff",
      marginRight: "4px",
      marginTop: "22px",
      marginBottom: "20px",
      backgroundColor: "#fff",
      opacity: "0.8",
    },
  },
  suniconbox: {
    "&.MuiBox-root": {
      marginBottom: "-8px",
      display: "flex",
    },
  },
  WeatherBox1: {
    "&.MuiBox-root": {
      marginBottom: "-8px",
      display: "flex",
      padding: "40px",
      borderRadius: "11.99px",
      width: "fit-content",
      backgroundColor: "rgba(250, 226, 189, 0.325)",
    },
  },
  forcastdata: {
    "&.MuiTypography-root": {
      color: "#fff",
      fontSize: "14px",
      marginRight: "8px",
      fontFamily: "'Poppins', Arial, sans-serif",

      marginTop: "3px",
    },
  },
  weathericon: {
    "&.MuiSvgIcon-root": {
      fontSize: "20px",
      color: "#fff",
      paddingTop: "0px",
      marginTop: "3px",
      marginRight: "3px",
    },
  },
  randomText: {
    "&.MuiTypography-root": {
      color: "#fff",
      fontSize: "20px",
      marginRight: "8px",
      fontWeight: "600",
      marginTop: "22px",
      fontFamily: "'Poppins', Arial, sans-serif",
    },
  },
  randomText1: {
    "&.MuiTypography-root": {
      fontSize: "18px",
      fontWeight: "400",
      color: "#fff",
      marginTop: "12px",
      fontFamily: "'Poppins', Arial, sans-serif",
    },
  },
});

export default styles;
