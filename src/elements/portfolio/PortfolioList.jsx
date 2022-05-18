import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PortfolioDialog from "./PortfolioDialog";

export default function PortfolioList(props) {
  const {
    column,
    styevariation,
    porfolioProjects,
    item = null,
    userData = null,
    setUserData,
    setSnackbarMessage,
    setSnackbarOpen,
  } = props;
  const [dialogOpen, setDialogOpen] = useState(false);
  const [porfolioProject, setPorfolioProject] = useState();
  const totalPorfolio = porfolioProjects.length;
  const list =
    item != null ? porfolioProjects.slice(0, item) : porfolioProjects;

  function onClickDialog(value) {
    setDialogOpen(true);
    setPorfolioProject(value);
  }

  return (
    <>
      {list.map((value, index) => (
        <>
          <div className={`${column}`} key={index}>
            <div className={`portfolio ${styevariation}`}>
              <div className="thumbnail-inner">
                <motion.div layout className={`thumbnail ${value.image}`}>
                  <iframe
                    src={value.video_link}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    height="75%"
                    width="100%"
                  />
                </motion.div>
                <div className={`bg-blr-image ${value.image}`}></div>
              </div>
              <div className="content">
                <div className="inner">
                  <p>{value.category}</p>
                  <h4>
                    <a onClick={(event) => onClickDialog(value)}>
                      {value.project_name}
                    </a>
                  </h4>
                  <div className="portfolio-button">
                    <a
                      className="rn-btn"
                      onClick={(event) => onClickDialog(value)}
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <Link
                className="link-overlay"
                onClick={(event) => onClickDialog(value)}
              ></Link>
            </div>
          </div>
        </>
      ))}
      {porfolioProject && dialogOpen && (
        <PortfolioDialog
          porfolioProject={porfolioProject}
          dialogOpen={dialogOpen}
          setDialogOpen={setDialogOpen}
          totalPorfolio={totalPorfolio}
          porfolioProjects={porfolioProjects}
          setUserData={setUserData}
          userData={userData}
          setSnackbarMessage={setSnackbarMessage}
          setSnackbarOpen={setSnackbarOpen}
        />
      )}
    </>
  );
}
