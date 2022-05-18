import React from "react";
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const SocialShare = [
  {
    Social: <MdEmail />,
    link: "mailto:clarenceywz@gmail.com?subject=Re:%20Interview%20Invitation%20",
  },
  {
    Social: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/clarence-yeo-b56481207/",
  },
  {
    Social: <FaWhatsapp />,
    link: "https://api.whatsapp.com/send?phone=6598201197",
  },
];

const FooterTwo = () => {
  return (
    <div
      className="footer-style-2 ptb--30 bg_image bg_image--1"
      data-black-overlay="6"
    >
      <div className="wrapper plr--50 plr_sm--20">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="inner">
              <div className="logo text-center text-sm-left mb_sm--20">
                <a href="/home-one">
                  <img
                    src="/assets/images/logo/logo.png"
                    alt="Logo images"
                    height="100px"
                    width="100px"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="inner text-center">
              <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                {SocialShare.map((val, i) => (
                  <li key={i}>
                    <a href={`${val.link}`}>{val.Social}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="inner text-lg-right text-center mt_md--20 mt_sm--20">
              <div className="text">
                <p>Copyright © 2022 Clarence-portfolio-page. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterTwo;
