import React, { Component } from "react";
import { Typography } from "@mui/material";
import { FiCast, FiLayers, FiUsers, FiMonitor } from "react-icons/fi";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { VscGear } from "react-icons/vsc";
import { motion } from "framer-motion";

const svgVariants = {
  hidden: {
    opacity: 1,
  },
  hover: {
    opacity: 1,
  },
  hoverEnd: {
    opacity: 1,
    pathLength: 1,
  },
};

const pathVariants = {
  hover: {
    pathLength: [1, 0],
    transition: {
      duration: 1,
      yoyo: "Infinity",
      ease: "easeInOut",
    },
  },
};

const ServiceList = [
  {
    icon: <FiLayers />,
    title: "Full Stack Software Engineer",
    description: [
      "Developing front end website architecture.",
      "Designing user interactions on web pages.",
      "Developing back-end website applications.",
      "Creating servers and databases for functionality.",
      // "Ensuring cross-platform optimization for mobile phones.",
      // "Ensuring responsiveness of applications.",
      // "Working alongside graphic designers for web design features.",
      // "Seeing through a project from conception to finished product.",
      // "Designing and developing APIs.",
      // "Meeting both technical and consumer needs.",
      // "Staying abreast of developments in web applications and programming languages.",
    ],
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        width="1em"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <motion.path
          stroke-linecap="round"
          variants={pathVariants}
          stroke-linejoin="round"
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),
  },
  {
    icon: <FiLayers />,
    title: "Automation Software Engineer",
    description: [
      "Exploring and implementing new ways to automate systems",
      "Designing and testing automation equipment and processes",
      "Programming new automated components",
      "Identifying quality issues and writing reports,",
    ],
    svg: (
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        height="1em"
        width="1em"
      >
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
          variants={pathVariants}
        />
      </motion.svg>
    ),
  },
  {
    icon: <FiUsers />,
    title: "Strategy Management",
    description: [
      "Supporting the development of long-term organizational strategy",
      "Conducting research and analyses of operational effectiveness, processes, stakeholders, etc",
      "Aligning departmental goals, processes and resource allocation with the organizational strategy",
      "Assessing market trends and competitors.",
    ],
    svg: (
      <svg
        stroke="currentColor"
        fill="none"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          variants={pathVariants}
          d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
        />
        <motion.circle variants={pathVariants} cx="9" cy="7" r="4" />
        <motion.path variants={pathVariants} d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <motion.path variants={pathVariants} d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    icon: <RiMoneyDollarBoxLine />,
    title: "Accounting",
    description: [
      "Monitor and analyze accounting data and produce financial reports or statements",
      "Establish and enforce proper accounting methods, policies and principles",
      "Coordinate and complete annual audits",
    ],
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        width="1em"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <motion.path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          variants={pathVariants}
        />
      </svg>
    ),
  },
  // {
  //   icon: <FiUsers />,
  //   title: "Marketing & Reporting",
  //   description: [
  //     "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  //   ],
  // },
  // {
  //   icon: <FiMonitor />,
  //   title: "Mobile App Development",
  //   description: [
  //     "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  //   ],
  // },
];

export default function ServiceThree(props) {
  const { column, item } = props;
  const ServiceContent = ServiceList.slice(0, item);

  return (
    <div className="row">
      {ServiceContent.map((val, i) => (
        <div className={`${column}`} key={i}>
          <motion.div whileHover="hover" className="service service__style--2">
            <div className="icon">{val.svg ? val.svg : val.icon}</div>
            <div className="content">
              <h3 className="title">{val.title}</h3>
              {val.description.map((pointer) => (
                <p>
                  <VscGear />

                  {`  ${pointer}`}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
