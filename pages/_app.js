/**
 * Copied from styled-components example from next.js
 * Wraps every page around a theme provider
 */

import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components';
import theme from "../components/theme";
import Nav from '../components/molecules/Nav';

const navItems = [
  {
    name: "Explore", link: "/"
  },
  {
    name: "The Team", link: "/team",
  },
  {
    name: "Meetings", link: "/meetings"
  },
  {
    name: "Discover", link: "/discover"
  },
  {
    name: "Account", link: "/account"
  }
];

export default class MyApp extends App {
  render () {
    const { Component, pageProps, router } = this.props;

    let index = -1;
    if (router && router.route) {
      const split = router.route.split("/")[1];
      if (split) index = navItems.findIndex(item => item.link === "/" + split[1]);
      else index = navItems.findIndex(item => item.link === "/");
    }
    return (
      <ThemeProvider theme={theme}>
        <Nav navItems={navItems} index={index}/>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}