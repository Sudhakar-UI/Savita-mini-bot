"use client";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Homeheader from "./components/Homeheader";
import Homefooter from "./components/Homefooter";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "./context/ThemeContext";
import { Image, Container } from "react-bootstrap";

export default function RootLayout({ children }) {

  const [loading, setLoading] = useState(false)
  const pathname = usePathname();

  useEffect(() => {
    const interval = setInterval(() => {
      const portal = document.querySelector("nextjs-portal");
      if (portal) portal.remove();
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="assets/images/favicon.png" type="image/png" sizes="32x32" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="nightmode">
        <main>

          {/* {loading ? (
            <React.Fragment>
            </React.Fragment>
          ) : (
            <div className="pageloaderbox">
              <div className="loader">
                 <div><Image src="assets/images/loader.gif" /></div> 
              </div>
            </div>
          )}  */}
          <div className="bg add-token-page blue-bg-main-x">
            <div className="panelboxbg align-items-auto alig-nor">
              <ThemeProvider>
                <Homeheader />
                <div className="page-content">
                  {children}
                </div>
                {/* <Homefooter /> */}
              </ThemeProvider>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}