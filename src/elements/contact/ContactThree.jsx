import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Button,
  Box,
  Stack,
  Typography,
  Divider,
  Grid,
  Rating,
  Card,
} from "@mui/material";
import { StarBorder, Star } from "@mui/icons-material";
import RatingLabels from "../../dark/RatingLabels";

const connectVariant = {
  hover: {
    scale: 2,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    rotate: 360,
  },
};

function connectOnClick(href) {
  window.open(href, "_blank").focus();
}

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${RatingLabels[value]}`;
}
const connectList = [
  {
    src: "logo_email.png",
    connectType: "Email",
    href: "mailto:clarenceywz@gmail.com?subject=Re:%20Interview%20Invitation%20",
  },
  {
    src: "logo_Whatsapp.png",
    connectType: "Whatsapp",
    href: "https://api.whatsapp.com/send?phone=6598201197",
  },
  {
    src: "logo_Linkedin.png",
    connectType: "Linkedin",
    href: "https://www.linkedin.com/in/clarence-yeo-b56481207/",
  },
];

export default function ContactThree(props) {
  const {
    contactTitle,
    contactImages,
    userData,
    setSnackbarMessage,
    setSnackbarOpen,
  } = props;
  const [testimonialText, setTestimonialText] = useState("");
  const [testRating, setTestRating] = useState(0);
  const [hover, setHover] = useState(-1);
  const [buttonDisable, setButtonDisable] = useState(false);

  function onClickTesti() {
    setButtonDisable(true);
    fetch("http://localhost:5000/postTestimonial", {
      method: "POST",
      body: JSON.stringify({
        value: JSON.stringify({
          portfolio_user_id: userData.id,
          testimonial_text: testimonialText,
          testimonial_rating: testRating,
        }),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTestimonialText("");
        setTestRating(-1);
        setSnackbarMessage("Testimonial Submitted, Thanks for the review ");
        setSnackbarOpen(true);
        setButtonDisable(false);
      });
  }

  return (
    <div className="contact-form--1">
      <div className="container">
        <div className="row row--50 align-items-start">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="section-title text-left mb--50">
              <h2 className="title">{contactTitle}</h2>
              <p className="description">
                I am open to Job / Freelance opportunities <br /> You may
                contact me through
              </p>
            </div>
            <Stack spacing={3} direction="column">
              {connectList.map((connectItem) => (
                <motion.div whileHover="hover" key={connectItem.connectType}>
                  <Button
                    disableElevation
                    fullWidth
                    size="large"
                    target="_blank"
                    variant="outlined"
                    sx={{
                      color: "#fafafa",
                      backgroundColor: "#757575",
                      borderColor: "#424242",
                    }}
                    onClick={(event) => connectOnClick(connectItem.href)}
                  >
                    <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
                      <motion.img
                        src={`/assets/images/logo/${connectItem.src}`}
                        alt={connectItem.connectType}
                        width={16}
                        height={16}
                        style={{ marginRight: 8 }}
                        variants={connectVariant}
                      />
                    </Box>

                    {`Connect with ${connectItem.connectType}`}
                  </Button>
                </motion.div>
              ))}
            </Stack>
            <Divider variant="middle" sx={{ color: "#fafafa" }} light={true} />
            <Box sx={{ my: 6, mx: 2 }}>
              <Grid container alignItems="center">
                <Grid item xs={12}>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    sx={{ color: "#fafafa" }}
                  >
                    Write a Testimonial/Review
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <div class="form-wrapper">
                    <Stack spacing={2}>
                      <label for="item04">
                        <textarea
                          type="text"
                          id="testi-textbox"
                          name="message"
                          value={testimonialText}
                          onChange={(event) =>
                            setTestimonialText(event.target.value)
                          }
                          placeholder="Your Message"
                        ></textarea>
                      </label>
                      <Typography
                        gutterBottom
                        component="Legend"
                        sx={{ color: "#fafafa" }}
                      >
                        Give a Rating
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                        }}
                      >
                        <Rating
                          name="test-rating"
                          value={testRating}
                          getLabelText={getLabelText}
                          onChangeActive={(event, newHover) => {
                            setHover(newHover);
                          }}
                          precision={0.5}
                          emptyIcon={
                            <StarBorder
                              sx={{ color: "#fafafa", fontSize: 50 }}
                            />
                          }
                          icon={<Star sx={{ fontSize: 50 }} />}
                          onChange={(event, newValue) =>
                            setTestRating(newValue)
                          }
                          sx={{ color: "#2a3eb1", by: 5 }}
                        />
                        {testRating !== null && (
                          <Box
                            sx={{
                              ml: 4,
                              mt: 2,
                              color: "#fafafa",
                              fontSize: 16,
                            }}
                          >
                            {RatingLabels[hover !== -1 ? hover : testRating]}
                          </Box>
                        )}
                      </Box>
                      <Button
                        variant="contained"
                        value="submit"
                        name="submit"
                        id="mc-embedded-subscribe"
                        onClick={onClickTesti}
                        disabled={buttonDisable}
                        size="large"
                        sx={{
                          backgroundColor: "#ab003c",
                          "&:hover": {
                            backgroundColor: "#ab003c",
                            opacity: [0.3],
                          },
                        }}
                      >
                        Submit
                      </Button>
                    </Stack>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="thumbnail mb_md--30 mb_sm--30">
              <img src={`${contactImages}`} alt="trydo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
