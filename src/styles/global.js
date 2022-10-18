/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "./colors";
import { fonts } from "./typography";
import bgImg from "../assets/bg-image.png";

export const reset = css`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }
  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role="list"],
  ol[role="list"] {
    list-style: none;
  }
  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }
  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    background-color: ${colors.lightgray};
  }
  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }
  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    /* display: block; */
  }
  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  #root {
    margin: 0 auto;
  }
`;

export const global = css`
  body {
    color: ${colors.white};
    font-family: ${fonts.primary};
    font-weight: 300;
    background-image: url(${bgImg});
    background-size: cover;
    /* background-image: linear-gradient(
      to top,
      #18181d,
      #1c1c23,
      #202029,
      #25252f,
      #292935,
      #2b2b3a,
      #2c2e3f,
      #2e3044,
      #2d3149,
      #2a324f,
      #273354,
      #23345a
    ); */
  }
`;
