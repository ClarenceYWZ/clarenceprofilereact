import React from "react";
import { useState } from "react";
// import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

// third party
import * as Yup from "yup";
import { Formik } from "formik";

// project imports
import useScriptRef from "./useScriptRef";
import AnimateButton from "./AnimateButton";

// assets
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// import Google from "assets/images/icons/social-google.svg";
import { Google } from "@mui/icons-material";

// ============================|| FIREBASE - LOGIN ||============================ //

const FirebaseLogin = ({ ...others }) => {
  const theme = useTheme();
  const scriptedRef = useScriptRef();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));
  const history = useHistory();
  // const customization = useSelector((state) => state.customization);
  const [checked, setChecked] = useState(true);
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }
  function onChangeDisplayName(event) {
    setDisplayName(event.target.value);
  }

  function onClickSignIn() {
    fetch("https://api.clarenceyeoprofile.com/emailauthorized", {
      method: "POST",
      body: JSON.stringify({
        value: JSON.stringify({ email: email, displayName: displayName }),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(`/email`);
        history.push(`/email/${data.encryptUrl}`);
      });
  }
  function linkedinHandler() {
    window.location.href = "https://api.clarenceyeoprofile.com/linkedinlogin";
  }

  function googleHandler() {
    window.location.href = "https://api.clarenceyeoprofile.com/googlelogin";
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <AnimateButton>
            <Button
              disableElevation
              fullWidth
              onClick={linkedinHandler}
              size="large"
              variant="outlined"
              sx={{
                color: "grey.700",
                backgroundColor: theme.palette.grey[50],
                borderColor: theme.palette.grey[100],
              }}
            >
              <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
                <img
                  src="/assets/images/logo/logo_Linkedin.png"
                  alt="Linkedin"
                  width={16}
                  height={16}
                  style={{ marginRight: matchDownSM ? 8 : 16 }}
                />
              </Box>
              Sign in with Linkedin
            </Button>
          </AnimateButton>
        </Grid>
        <Grid item xs={12}>
          <AnimateButton>
            <Button
              disableElevation
              fullWidth
              onClick={googleHandler}
              size="large"
              variant="outlined"
              sx={{
                color: "grey.700",
                backgroundColor: theme.palette.grey[50],
                borderColor: theme.palette.grey[100],
              }}
            >
              <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
                <img
                  src="/assets/images/logo/logo_google.png"
                  alt="google"
                  width={16}
                  height={16}
                  style={{ marginRight: matchDownSM ? 8 : 16 }}
                />
              </Box>
              Sign in with Google
            </Button>
          </AnimateButton>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
            }}
          >
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />

            <Button
              variant="outlined"
              sx={{
                cursor: "unset",
                m: 2,
                py: 0.5,
                px: 7,
                borderColor: `${theme.palette.grey[100]} !important`,
                color: `${theme.palette.grey[900]}!important`,
                fontWeight: 500,
                // borderRadius: `${customization.borderRadius}px`,
              }}
              disableRipple
              disabled
            >
              OR
            </Button>

            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          container
          alignItems="center"
          justifyContent="center"
        >
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1">
              Sign in with Email address
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Formik
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email("Must be a valid email").max(255),
          firstName: Yup.string().max(255).required("First name is required"),
          lastName: Yup.string().max(255).required("Last name is required"),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            if (scriptedRef.current) {
              setStatus({ success: true });
              setSubmitting(false);
            }
            console.log(values);
          } catch (err) {
            console.error(err);
            if (scriptedRef.current) {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>
            <FormControl
              fullWidth
              error={Boolean(touched.email && errors.email)}
              sx={{ ...theme.typography.customInput }}
            >
              <InputLabel htmlFor="outlined-adornment-email-login">
                Email Address
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-email-login"
                type="email"
                value={email}
                name="email"
                onBlur={handleBlur}
                onChange={onChangeEmail}
                label="Email Address"
                inputProps={{}}
              />
              {touched.email && errors.email && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-email-login"
                >
                  {errors.email}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl
              fullWidth
              error={Boolean(touched.email && errors.email)}
              sx={{ ...theme.typography.customInput }}
            >
              <InputLabel htmlFor="outlined-adornment-email-login">
                Display Name
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-email-login"
                type="string"
                onChange={onChangeDisplayName}
                value={displayName}
                name="Display Name"
                onBlur={handleBlur}
                label="Display Name"
                inputProps={{}}
              />
            </FormControl>

            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <Button
                  disableElevation
                  disabled={isSubmitting}
                  fullWidth
                  onClick={onClickSignIn}
                  size="large"
                  type="submit"
                  variant="contained"
                  color="secondary"
                >
                  Sign in
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FirebaseLogin;
