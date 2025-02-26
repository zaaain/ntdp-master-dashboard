"use client";
import Header from '@/shared/layout-components/header/header';
import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Sidebar from '@/shared/layout-components/sidebar/sidebar';
import Footer from '@/shared/layout-components/footer/footer';
import Swicther from '@/shared/layout-components/swicther/swicther';
import Backtotop from '@/shared/layout-components/backtotop/backtotop';

const ContentLayout = ({ children }) => {

  const [lateLoad, setlateLoad] = useState(false);

  useEffect(() => {
    setlateLoad(true);
  });

  const [MyclassName, setMyClass] = useState("");

  const Bodyclickk = () => {
    if (localStorage.getItem("scifiverticalstyles") == "icontext") {
      setMyClass("");
    }
    if (window.innerWidth > 992) {
      let html = document.documentElement;
      if (html.getAttribute('data-icon-overlay') === 'open') {
        html.setAttribute('data-icon-overlay', "");
      }
    }
    document.querySelector(".search-result")?.classList.add("d-none");

  }

  return (
    <div style={{background:"#020627"}}>
      <Fragment>
        <div style={{ display: `${lateLoad ? 'block' : 'none'}` }}>
          <Swicther />
          <div className="page">
            <Header />
            {/* <Sidebar /> */}
            <div style={{marginTop:"120px"}}>
              <div className="">
                {children}
              </div>
            </div>
            {/* <Footer /> */}
          </div>
          {/* <Backtotop /> */}
        </div>
      </Fragment>
    </div>
  );
};

const mapStateToProps = (state) => ({
  local_varaiable: state
});

export default connect(mapStateToProps, {})(ContentLayout);
