"use client";
import { useEffect } from "react";
import Footer from "./components/footer/Footer";
import Page1 from "./page1/page";
import Page2 from "./page2/page";
import Page3 from "./page3/page";
import SignUp from "./components/signup/SignUp";
import NavMenu from "./components/navmenu/NavMenu";

export default function Home() {
  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      (localStorage && localStorage.theme === "dark") ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  /**
   * This is the Home Page
   * You can choose a multiple pages as show below
   * Or just one page using one of the templates, or your own
   *
   */

  return (
    <>
      <Page1 showNavMenu={false} showFooter={true} />
    </>
  );
}
