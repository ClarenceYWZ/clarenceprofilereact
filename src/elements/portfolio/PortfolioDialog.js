import { Card, Dialog, Grid, Paper, CardContent } from "@mui/material";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";
import { Button, Chip } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { MobileStepper } from "@mui/material";
import Rating from "@mui/material/Rating";
import { CardHeader } from "@mui/material";
import Typography from "@mui/material/Typography";
import { StarBorder, Star } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import CloseIcon from "@mui/icons-material/Close";
import SwipeableViews from "react-swipeable-views";
import { RadarChart } from "../../component/radar/RadarChart";

const useStyles = makeStyles({
  black: { background: "black", color: "black" },
});

const radarVariant = {
  hidden: {
    //   x: "-100vw",
    opacity: 1,
    //   y: 50,
  },
  visible: {
    //   x: 0,
    delay: 5,
    opacity: 1,
  },
};

export default function PortfolioDialog(props) {
  const {
    dialogOpen,
    setDialogOpen,
    totalPorfolio,
    porfolioProjects,
    porfolioProject,
    userData,
    setSnackbarMessage,
    setSnackbarOpen,
  } = props;
  const [userRating, setUserRating] = useState([]);
  const [activeStep, setActiveStep] = useState();
  const [buttonDisable, setButtonDisable] = useState(false);
  const [selectedPorfolioProject, setSelectedPorfolioProject] =
    useState(porfolioProject);

  useEffect(() => {
    const porfolioIndex = porfolioProjects.findIndex(
      (item) => item.id === porfolioProject.id
    );
    setActiveStep(porfolioIndex);
  }, [props.porfolioProject]);

  useEffect(() => {
    let mapUserRating = {};
    userData.rating_records
      .filter(
        (item) => item.project_name === selectedPorfolioProject.project_name
      )
      .forEach((item) => (mapUserRating[item.rating_name] = item.rating_score));

    if (!Object.keys(mapUserRating).length) {
      const newUserRating = {};
      porfolioProject.rating_mean_score.map(
        (item) => (newUserRating[item.rating_name] = 0)
      );
      setUserRating(newUserRating);
    } else {
      setUserRating(mapUserRating);
    }
  }, [selectedPorfolioProject]);

  function closeDialog() {
    setDialogOpen(false);
  }
  function setRatingValue(newValue, rating_name) {
    setUserRating((prevState) => {
      return { ...prevState, [rating_name]: newValue };
    });
  }

  function onClickRatingSubmit() {
    setButtonDisable(true);
    fetch("https://api.clarenceyeoprofile.com/postPortfolioRating", {
      method: "POST",
      body: JSON.stringify({
        value: JSON.stringify({
          portfolio_user_id: userData.id,
          portfolio_project_id: selectedPorfolioProject.id,
          rating_dict: userRating,
        }),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setSnackbarMessage("Rating Submitted, Thanks for the review ");
        setSnackbarOpen(true);
        setButtonDisable(false);
      });
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSelectedPorfolioProject(porfolioProjects[activeStep + 1]);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setSelectedPorfolioProject(porfolioProjects[activeStep - 1]);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  //   const Transition = React.forwardRef(function Transition(
  //     props: TransitionProps & {
  //       children: React.ReactElement<any, any>,
  //     },
  //     ref: React.Ref<unknown>
  //   ) {
  //     return <Slide direction="right" ref={ref} {...props} />;
  //   });

  return (
    <Dialog fullScreen open={dialogOpen} onClose={closeDialog}>
      <Grid sx={{ backgroundColor: "#212121" }}>
        <IconButton
          // edge="end"
          onClick={closeDialog}
          aria-label="close"
          sx={{ backgroundColor: "#212121", position: "right" }}
        >
          <CloseIcon sx={{ color: "#f5f5f5", fontSize: 40 }} />
        </IconButton>
      </Grid>
      <SwipeableViews
        axis="x"
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {porfolioProjects.map((porfolioProject, index) => (
          <Box
            sx={{
              backgroundColor: "black",
              height: "100%",
              flexGrow: 1,
            }}
            key={porfolioProject.project_name}
          >
            {/* <Paper elevation={5}> */}
            <Box
              sx={{
                backgroundColor: "#9fa8da",
                mx: { lg: "15rem", xs: 0 },
                // height: "100%",
                justifyContent: "center",
              }}
              elevation={5}
            >
              <Grid container alignItems="stretch">
                <Grid item xs={12} lg={6}>
                  <Card
                    elevation={5}
                    sx={{
                      backgroundColor: "#5c6bc0",
                      height: "1000px",
                      p: 3,
                      m: 3,
                    }}
                  >
                    <CardHeader
                      title={`${porfolioProject.project_name}`}
                      subheader="Video illustration of sample app"
                      sx={{ backgroundColor: "#d1c4e9" }}
                    />
                    <CardContent sx={{ width: 1, height: 0.8 }}>
                      {/* <motion.div layout> */}
                      <iframe
                        src={porfolioProject.video_link}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                        height="100%"
                        width="100%"
                      />
                      {/* </motion.div> */}
                    </CardContent>
                    <CardContent sx={{ width: 1, height: 0.2, my: 3 }}>
                      {porfolioProject.project_tag.split(",").map((tag) => (
                        <Chip
                          label={tag}
                          sx={{
                            backgroundColor: "#7986cb",
                            color: "#e8f5e9",
                            fontSize: 24,
                            m: 2,
                            p: 2,
                            py: 3,
                          }}
                        />
                      ))}
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Card sx={{ m: 2, backgroundColor: "#bbdefb" }} elevation={5}>
                    <motion.div
                      variants={radarVariant}
                      initial="hidden"
                      animate="visible"
                    >
                      <RadarChart
                        radarDatafield={porfolioProject.rating_mean_score}
                      ></RadarChart>
                    </motion.div>
                  </Card>
                  <Card sx={{ m: 2, backgroundColor: "#b2ebf2" }} elevation={5}>
                    <CardHeader
                      title="Your Rating"
                      subheader="Please rate to improve the project"
                      sx={{ backgroundColor: "#80cbc4" }}
                    />
                    {userRating && (
                      <Box p={3}>
                        {porfolioProject.rating_mean_score.map((item) => (
                          <>
                            <Typography component="legend">{`${item.rating_name}`}</Typography>
                            <Rating
                              name={item.rating_name}
                              value={userRating[item.rating_name]}
                              onChange={(event, newValue) => {
                                setRatingValue(newValue, item.rating_name);
                              }}
                              emptyIcon={<StarBorder sx={{ fontSize: 35 }} />}
                              icon={
                                <Star sx={{ fontSize: 35, color: "#01579b" }} />
                              }
                            />
                          </>
                        ))}
                      </Box>
                    )}
                    <Grid p={3} item xs={12}>
                      <Button
                        variant="contained"
                        color="success"
                        size="large"
                        disabled={buttonDisable}
                        onClick={onClickRatingSubmit}
                      >
                        Confirm
                      </Button>
                    </Grid>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Box>
        ))}
      </SwipeableViews>
      <MobileStepper
        steps={totalPorfolio}
        position="static"
        sx={{ backgroundColor: "#424242" }}
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            sx={{ color: "#fafafa", fontSize: 18 }}
            disabled={activeStep === totalPorfolio - 1}
          >
            Next Project
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            sx={{ color: "#fafafa", fontSize: 18 }}
            disabled={activeStep === 0}
          >
            <KeyboardArrowLeft />
            Previous Project
          </Button>
        }
      />
    </Dialog>
  );
}
