import React from "react";
// material-ui
import { useTheme } from "@mui/material/styles";
import { Typography, Grid } from "@mui/material";
/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={logo} alt="Berry" width="100" />
     *
     */
    <Grid>
      <Typography
        color={theme.palette.secondary.main}
        // gutterBottom
        // alignContent="center"
        variant={"h2"}
      >
        <img
          src="/assets/images/logo/logo.png"
          alt="Linkedin"
          width={250}
          height={250}
          style={{ marginRight: 16 }}
        />
        {/* Clarence Portfolio Page */}
      </Typography>
    </Grid>
  );
};

export default Logo;
