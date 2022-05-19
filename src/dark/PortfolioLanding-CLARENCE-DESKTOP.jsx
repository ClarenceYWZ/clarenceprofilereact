import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import { motion } from "framer-motion";
import { Button, Card, Rating, Grid, Typography } from "@mui/material";
import { StarBorder, Star } from "@mui/icons-material";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Carousel } from "@trendyol-js/react-carousel";
import { autoPlay } from "react-swipeable-views-utils";
import Helmet from "../component/common/Helmet";
import TextLoop from "react-text-loop";
import HeaderThree from "../component/header/HeaderThree";
import FooterTwo from "../component/footer/FooterTwo";
import TabTwo from "../elements/tab/TabTwo";
import ContactThree from "../elements/contact/ContactThree";
import PortfolioList from "../elements/portfolio/PortfolioList";
import ServiceList from "../elements/service/ServiceList";
// import BlogContent from "../elements/blog/BlogContent";
import RatingLabels from "./RatingLabels";

const SlideList = [
  {
    textPosition: "text-left",
    category: "Welcome to my World",
    // description: "abcdefg",
    // buttonText: "testing",
    // buttonLink: "",
  },
];

const PortfolioLanding = () => {
  const [userData, setUserData] = useState({});
  const [porfolioProjects, setPorfolioProjects] = useState([]);
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [testimonialList, setTestimonialList] = useState([]);
  const contactRef = useRef();
  const { loginType, tokenId } = useParams();

  function connectOnClick() {
    const contactPage = contactRef.current;
    if (contactPage) {
      contactPage.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  const AutoPlayCarousel = autoPlay(Carousel);

  const history = useHistory();
  useEffect(() => {
    fetch("https://api.clarenceyeoprofile.com/getUserProfile", {
      method: "POST",
      body: JSON.stringify({
        value: JSON.stringify({ loginType: loginType, tokenId: tokenId }),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        data === "error" ? history.push("/login") : setUserData(data);
      })
      .catch((error) => {
        console.log(error);
        history.push("/login");
      });
    fetch("https://api.clarenceyeoprofile.com/getPorfolioProjects")
      .then((res) => res.json())
      .then((data) => {
        setPorfolioProjects(data);
      });
  }, []);

  useEffect(() => {
    Object.keys(userData).length &&
      setWelcomeMessage(`Hi, ${userData.displayname}`);
  }, [userData]);

  useEffect(() => {
    fetch("https://api.clarenceyeoprofile.com/getTestimonial")
      .then((res) => res.json())
      .then((data) => {
        setTestimonialList(data);
      });
  }, [snackbarOpen]);

  function handleClose() {
    setSnackbarOpen(false);
  }

  const welcomeVariant = {
    hidden: {
      //   x: "-100vw",
      opacity: 1,
    },
    visible: {
      //   x: 0,
      opacity: 1,
      transition: {
        // duration: 2,
        delay: 0.5,
        when: "afterChildren",
        staggerChildren: 1.8,
      },
    },
  };

  const welcomeUserVariant = {
    hidden: {
      //   x: "-100vw",
      opacity: 1,
    },
    visible: {
      //   x: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const welcomeLetterVariant = {
    hidden: {
      //   x: "-100vw",
      opacity: 0,
      y: 50,
    },
    visible: {
      //   x: 0,

      opacity: 1,
      y: 0,
    },
  };

  const welcomePorfolioVariant = {
    hidden: {
      //   x: "-100vw",
      opacity: 0,
      //   y: 50,
    },
    visible: {
      //   x: 0,
      delay: 3,
      opacity: 1,
      transition: { duration: 2 },
    },
  };

  let title = "About Me",
    description =
      "A motivated individual who masters and develops programming skills through self-teaching and build system which benefit the company and field. Consistently recognized as a competent leader who bring motivation and cohesiveness to his team.";
  // const PostList = BlogContent.slice(0, 3);
  return Object.keys(userData).length ? (
    <div className="active-dark">
      <Helmet pageTitle="Portfolio Landing" />

      <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />
      {/* Start Slider Area   */}
      <div id="home" className="fix">
        <div className="slider-wrapper">
          {/* Start Single Slide */}
          {SlideList.map((value, index) => (
            <div
              className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25"
              key={index}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    {welcomeMessage && (
                      <motion.div
                        variants={welcomeVariant}
                        initial="hidden"
                        animate="visible"
                        className={`inner ${value.textPosition}`}
                      >
                        {value.category ? <span>{value.category}</span> : ""}
                        <div>
                          <motion.h1
                            className="title"
                            variants={welcomeUserVariant}
                          >
                            {welcomeMessage.split("").map((char, index) => {
                              return (
                                <motion.span
                                  key={`${char}-${index}`}
                                  variants={welcomeLetterVariant}
                                >
                                  {char}
                                </motion.span>
                              );
                            })}
                          </motion.h1>
                        </div>
                        <br />
                        <motion.h1
                          variants={welcomePorfolioVariant}
                          className="title"
                        >
                          Welcome to Clarence Portfolio <br />
                          <TextLoop>
                            <span> A Full Stack Developer.</span>
                            <span> Specialize in Python.</span>
                            <span> A React.js Designer.</span>
                            {/* <span> Content Writter.</span> */}
                          </TextLoop>{" "}
                        </motion.h1>
                        <motion.h2 variants={welcomePorfolioVariant}>
                          based in Singapore.
                        </motion.h2>
                        {value.description ? (
                          <p className="description">{value.description}</p>
                        ) : (
                          ""
                        )}
                        {value.buttonText ? (
                          <div className="slide-btn">
                            <a
                              className="rn-button-style--2 btn-primary-color"
                              href={`${value.buttonLink}`}
                            >
                              {value.buttonText}
                            </a>
                          </div>
                        ) : (
                          ""
                        )}
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* End Single Slide */}
        </div>
      </div>
      {/* End Slider Area   */}

      {/* Start About Area */}
      <div id="about" className="fix">
        <div className="about-area ptb--120  bg_color--1">
          <div className="about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-center">
                <div className="col-lg-5">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src="/assets/images/bg/bg-image-34.gif"
                      alt="About Images"
                    />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">{title}</h2>
                      <p className="description">{description}</p>
                    </div>
                    <div className="row mt--30">
                      <TabTwo tabStyle="tab-style--1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End About Area */}

      {/* Start Service Area  */}
      <div id="portfolio" className="fix">
        <div className="service-area creative-service-wrapper ptb--120 bg_color--5">
          <div className="portfolio-sacousel-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                    <h2 className="title">My Latest Project</h2>
                    <p>Do view and rate my projects.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <PortfolioList
                  styevariation="text-center mt--40"
                  column="col-lg-4 col-md-6 col-sm-6 col-12"
                  porfolioProjects={porfolioProjects}
                  userData={userData}
                  setUserData={setUserData}
                  setSnackbarMessage={setSnackbarMessage}
                  setSnackbarOpen={setSnackbarOpen}
                />
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="view-more-btn mt--60 mt_sm--30 text-center">
                    {/* <a className="rn-button-style--2 btn-solid" href="/blog">
                      <span>View More</span>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Area  */}

      {/* Start Portfolio Area */}
      <div id="testimonial" className="fix">
        <div className="portfolio-area ptb--120 bg_color--1">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="section-title text-center">
                  <h2>Testimonial/Review</h2>
                  <p>
                    Below are Testimonial and Review from vistors of this site
                    <br />
                    Feel free to contribute your review by clicking on the
                    button below
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="row mt--60 mt_sm--40"> */}
            {/* <div className="row creative-service"> */}
            <Grid container sx={{ my: 5 }}>
              <AutoPlayCarousel
                show={2.5}
                slide={2}
                transition={0.5}
                leftArrow={
                  <ArrowLeftIcon
                    sx={{ color: "#fafafa", fontSize: 100, mt: 10 }}
                  />
                }
                rightArrow={
                  <ArrowRightIcon
                    sx={{ color: "#fafafa", fontSize: 100, mt: 10 }}
                  />
                }
              >
                {testimonialList.map((value, i) => (
                  // <Grid item xs={12} md={4} sm={6}>
                  <Card
                    elevation={5}
                    sx={{
                      backgroundColor: i % 2 ? "#434343" : "#37474f",
                      borderColor: "#eeeeee",
                      width: { xs: "200px", lg: "350px" },
                      height: { xs: "300px", lg: "400px" },
                      color: "#fafafa",
                      mx: { xs: 1, lg: 5 },
                      p: 3,
                      borderRadius: "16px",
                    }}
                  >
                    <Typography
                      gutterBottom
                      component="Legend"
                      sx={{
                        color: "#fafafa",
                        fontSize: { xs: 15, lg: 25 },
                        hidden: { xs: true, lg: false },
                      }}
                      height={{ xs: "50px", lg: "80px" }}
                    >
                      {value.testimonial_rating
                        ? RatingLabels[value.testimonial_rating]
                        : "No Rating"}
                    </Typography>
                    <Rating
                      value={value.testimonial_rating}
                      readOnly={true}
                      height={{ xs: "40px", lg: "50px" }}
                      emptyIcon={
                        <StarBorder
                          sx={{
                            color: "#fafafa",
                            fontSize: { xs: 25, lg: 50 },
                          }}
                        />
                      }
                      icon={
                        <Star
                          sx={{
                            fontSize: { xs: 25, lg: 50 },
                            color: "#ab003c",
                          }}
                        />
                      }
                    />
                    <Typography
                      sx={{ color: "#fafafa", fontSize: { xs: 16, lg: 20 } }}
                      height={{ xs: "100px", lg: "180px" }}
                    >
                      {value.testimonial_text}
                    </Typography>
                    <Typography
                      sx={{ color: "#fafafa", fontSize: 14 }}
                      height="20px"
                    >
                      {value.testimonial_user}
                    </Typography>
                    <Typography
                      sx={{ color: "#fafafa", fontSize: 14 }}
                      height="20px"
                    >
                      {value.testimonial_date}
                    </Typography>
                  </Card>
                  // </Grid>
                ))}
              </AutoPlayCarousel>
            </Grid>
            <Grid container justifyContent="center">
              <Button
                // class="rn-button-style--2 btn-solid"
                variant="contained"
                value="submit"
                name="submit"
                onClick={(event) => connectOnClick()}
                size="large"
                sx={{
                  color: "#fafafa",
                  backgroundColor: "#ab003c",
                  my: 3,
                  "&:hover": {
                    backgroundColor: "#ab003c",
                    opacity: [0.3],
                  },
                }}
              >
                Leave a testimonial/review
              </Button>
            </Grid>
          </div>
        </div>
      </div>
      {/* End Portfolio Area */}

      {/* Start Blog Area */}
      <div id="service" className="fix">
        <div className="rn-blog-area ptb--120 bg_color--5 mb-dec--30">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                  <h2 className="title">My Awesome Service</h2>
                  <p>Services and skillset for engagement</p>
                </div>
              </div>
            </div>
            <div className="row creative-service">
              <div className="col-lg-12">
                <ServiceList
                  item="6"
                  column="col-lg-4 col-md-6 col-sm-6 col-12 text-left"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Blog Area */}

      {/* Start COntact Area */}
      <div id="contact" className="fix" ref={contactRef}>
        <div className="rn-contact-area ptb--120 bg_color--1">
          <ContactThree
            contactImages="/assets/images/about/about-9.gif"
            contactTitle="Hire/ Connect Me."
            userData={userData}
            setSnackbarMessage={setSnackbarMessage}
            setSnackbarOpen={setSnackbarOpen}
          />
        </div>
      </div>
      {/* End COntact Area */}

      <FooterTwo />
      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}
      <Snackbar
        open={snackbarOpen}
        onClose={handleClose}
        autoHideDuration={3000}
      >
        <Alert
          variant="filled"
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  ) : null;
};

export default PortfolioLanding;
