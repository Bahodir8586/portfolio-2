import React from "react";
import { Link } from "react-router-dom";

import classes from "./Footer.module.css";
import * as images from "../../images";

const footer = (props) => {
  return (
    <footer>
      <div className={classes.footerNavbar}>
        <div className={classes.footerNavbarColumn + " " + classes.logo}>
          <img src={images.Logo} alt="Logo" />
        </div>
        <div className={classes.footerNavbarColumn}>
          <h5>Main</h5>
          <Link to="/">About company</Link>
          <Link to="/">Branches</Link>
          <Link to="/">For kids</Link>
        </div>
        <div className={classes.footerNavbarColumn}>
          <h5>Additional</h5>
          <Link to="/">Menu</Link>
          <Link to="/">Bonus card</Link>
          <Link to="/">How does it work</Link>
        </div>
        <div className={classes.footerNavbarColumn}>
          <h5>Contacts</h5>
          <p className={classes.phoneNumber}>(+998 97) 120-00-02</p>
          <p className={classes.address}>
            100011, Tashkent city, Shayxontohur region, Zarqaynar street 3B
          </p>
        </div>
      </div>
      <div
        style={{ margin: "40px 0 20px", borderBottom: "1px solid #ddd" }}
      ></div>
      <div className={classes.footerBottom}>
        <div className={classes.copyright}>&copy; Maxway, 2020</div>
        <div className={classes.socialMedia}>
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 8C20 8 20 4.28 19.543 2.498C19.292 1.516 18.55 0.742 17.605 0.476C15.896 0 10 0 10 0C10 0 4.107 0 2.395 0.476C1.454 0.738 0.711 1.513 0.457 2.498C0 4.28 0 8 0 8C0 8 0 11.72 0.457 13.502C0.708 14.484 1.45 15.258 2.395 15.524C4.107 16 10 16 10 16C10 16 15.896 16 17.605 15.524C18.546 15.262 19.289 14.487 19.543 13.502C20 11.72 20 8 20 8ZM14 8L8 11.5V4.5L14 8Z"
              fill="#222124"
            />
          </svg>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0C4.477 0 0 4.477 0 10C0 14.991 3.657 19.128 8.438 19.879V12.89H5.898V10H8.438V7.797C8.438 5.291 9.93 3.907 12.215 3.907C13.309 3.907 14.453 4.102 14.453 4.102V6.562H13.193C11.95 6.562 11.563 7.333 11.563 8.124V10H14.336L13.893 12.89H11.563V19.879C16.343 19.129 20 14.99 20 10C20 4.477 15.523 0 10 0Z"
              fill="#222124"
            />
          </svg>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.122 0.06C13.056 0.01 12.717 0 10 0C7.283 0 6.944 0.013 5.878 0.06C4.812 0.11 4.088 0.277 3.45 0.525C2.78243 0.775729 2.17767 1.16923 1.678 1.678C1.1688 2.17732 0.775236 2.78218 0.525 3.45C0.277 4.088 0.11 4.812 0.06 5.878C0.01 6.944 0 7.283 0 10C0 12.717 0.013 13.056 0.06 14.122C0.11 15.187 0.277 15.913 0.525 16.55C0.775931 17.2175 1.16941 17.8222 1.678 18.322C2.17753 18.8309 2.78233 19.2245 3.45 19.475C4.088 19.722 4.813 19.89 5.878 19.94C6.944 19.99 7.283 20 10 20C12.717 20 13.056 19.987 14.122 19.94C15.187 19.89 15.913 19.722 16.55 19.475C17.2173 19.2238 17.822 18.8303 18.322 18.322C18.8311 17.8226 19.2247 17.2178 19.475 16.55C19.722 15.912 19.89 15.187 19.94 14.122C19.99 13.056 20 12.717 20 10C20 7.283 19.987 6.944 19.94 5.878C19.89 4.813 19.722 4.087 19.475 3.45C19.224 2.78259 18.8305 2.1779 18.322 1.678C17.766 1.123 17.21 0.779 16.55 0.525C15.912 0.277 15.187 0.11 14.122 0.06ZM5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10C15 12.7614 12.7614 15 10 15C7.23858 15 5 12.7614 5 10ZM16.5 4.75C16.5 4.05964 15.9404 3.5 15.25 3.5C14.5596 3.5 14 4.05964 14 4.75C14 5.44036 14.5596 6 15.25 6C15.9404 6 16.5 5.44036 16.5 4.75ZM13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13C11.6569 13 13 11.6569 13 10Z"
              fill="#222124"
            />
          </svg>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 10C0 15.523 4.477 20 10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10ZM6.903 11.163L6.89 11.17V11.171L4.393 10.391C3.853 10.226 3.849 9.854 4.513 9.588L14.246 5.828C14.811 5.596 15.131 5.888 14.948 6.616L13.291 14.438C13.175 14.994 12.84 15.127 12.374 14.87L9.824 12.982L8.636 14.13C8.63155 14.1343 8.62713 14.1385 8.62273 14.1427C8.50572 14.2552 8.4072 14.3499 8.226 14.374C8.039 14.4 7.885 14.344 7.773 14.033L6.903 11.163Z"
              fill="#222124"
            />
          </svg>
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.2619 0H16.7381C17.9853 0 19 1.01469 19 2.2619V16.7381C19 17.9853 17.9853 19 16.7381 19H2.2619C1.01469 19 0 17.9853 0 16.7381V2.2619C0 1.01469 1.01469 0 2.2619 0ZM14.6191 8.30481C14.7234 8.30434 14.8275 8.29906 14.9313 8.28898H14.9331V6.17636C13.2977 6.0568 11.9827 4.78299 11.8112 3.15219H9.99264L9.97364 12.0161C9.97364 13.1037 9.01324 13.9605 7.92571 13.9605C6.8384 13.9605 5.95695 13.079 5.95695 11.9917C5.95695 10.9044 6.8384 10.023 7.92571 10.023C7.98626 10.023 8.04481 10.031 8.1034 10.039C8.12361 10.0417 8.14382 10.0445 8.16412 10.0469V8.14602C8.14532 8.14484 8.12654 8.14353 8.10776 8.14222C8.04746 8.13802 7.98711 8.13381 7.92571 8.13381C5.7953 8.13381 4.06826 9.86085 4.06826 11.9913C4.06826 14.1217 5.7953 15.8487 7.92571 15.8487C10.0561 15.8487 11.7832 14.1217 11.7832 11.9913V6.77214C12.4095 7.72867 13.4758 8.30497 14.6191 8.30481Z"
              fill="#222124"
            />
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default footer;
