import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

class TabsTwo extends Component {
  render() {
    let tab1 = "Main skills",
      //   tab2 = "Awards",
      tab3 = "Experience",
      tab4 = "Education & Certification";
    const { tabStyle } = this.props;
    return (
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs>
                  <TabList className={`${tabStyle}`}>
                    <Tab>{tab1}</Tab>
                    {/* <Tab>{tab2}</Tab> */}
                    <Tab>{tab3}</Tab>
                    <Tab>{tab4}</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            Python <span> - automation & data analysis</span>
                          </a>
                          Framework/skills - Flask, msal, Web scraping, <br />
                          Library - Pandas, Sqlachlemy, Selenium, Request,
                          Beautifulsoup, Pillow, fitz, xlrd
                        </li>
                        <li>
                          <a href="/service">
                            React.js
                            <span> - Web and user interface design</span>
                          </a>
                          Websites, web experiences, Interaction design,
                          Material Ui, Animation
                        </li>
                        <li>
                          <a href="/service">
                            Data Struture
                            <span> - Design and maintain data </span>
                          </a>
                          SQL, graphQL, Relational Database
                        </li>
                        <li>
                          <a href="/service">
                            Infrastructure & Deployment
                            <span> - Azure Infrastructure</span>
                          </a>
                          Continuous Integration and deployment,Automated
                          testing
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  {/* <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            Awwwards.com <span>- Winner</span>
                          </a>{" "}
                          2019 - 2020
                        </li>
                        <li>
                          <a href="/service">
                            CSS Design Awards <span>- Winner</span>
                          </a>{" "}
                          2017 - 2018
                        </li>
                        <li>
                          <a href="/service">
                            Design nominees <span>- site of the day</span>
                          </a>{" "}
                          2013- 2014
                        </li>
                      </ul>
                    </div>
                  </TabPanel> */}

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            Full Stack Software Engineer
                            <span> - Smart Property Singapore </span>
                          </a>{" "}
                          2020 - Current
                        </li>
                        <li>
                          <a href="/service">
                            Accounts Manager
                            <span> - Smart Property Singapore</span>
                          </a>{" "}
                          2015 - 2020
                        </li>
                        <li>
                          <a href="/service">
                            Accounts Executive
                            <span> - Smart Property Singapore </span>
                          </a>{" "}
                          2014- 2015
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            BSc In Maths and Economics
                            <span> - NTU, Singapore</span>
                          </a>{" "}
                          2012
                        </li>
                        {/* <li>
                          <a href="/service">
                            Diploma in Computer Science
                            <span> - Gamma Technical Institute</span>
                          </a>{" "}
                          2009
                        </li>
                        <li>
                          <a href="/service">
                            Graphic Designer
                            <span> - ABC Institute, Los Angeles, CA</span>
                          </a>{" "}
                          2007
                        </li> */}
                      </ul>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    );
  }
}

export default TabsTwo;
