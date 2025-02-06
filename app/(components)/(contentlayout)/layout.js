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
    <>
      <Fragment>
        <div style={{ display: `${lateLoad ? 'block' : 'none'}` }}>
          <Swicther />
          <div className="page">
            <Header />
            {/* <Sidebar /> */}
            <div style={{marginTop:"120px"}}>
              <div >
                {children}
              </div>
            </div>
            {/* <Footer /> */}
            <p className='flex py-3 flex mx-auto'> Copyright © 2025 NTDP All rights reserved </p>
          </div>
          {/* <Backtotop /> */}
        </div>
      </Fragment>
    </>
  );
};

const mapStateToProps = (state) => ({
  local_varaiable: state
});

export default connect(mapStateToProps, {})(ContentLayout);
