import React from "react"
import Img from "gatsby-image"

/** @jsx jsx */
import { jsx } from "theme-ui"

import Icon from "../../../icon"

const detailStyle = {
  fontSize: "1.5rem",
  fontWeight: "bold",
  textTransform: "uppercase",
  display: "flex",
  alignItems: "center",
  textShadow: theme => theme.textShadows.primary,
  "& svg": { mr: "0.8rem" },
  "&:not(:last-child)": { mr: "4rem" },
}

const iconStyle = {
  height: "2rem",
  width: "2rem",
  fill: "currentColor",
  filter: "drop-shadow(0 0.75rem 0.5rem rgba(0, 0, 0, 0.25))",
}

type Props = {
  // TODO: What is the proper type for props.image.childImageSharp.fluid?
  image: any
  name: string
  duration: string
  startLocation: string
}

const Header: React.FC<Props> = props => (
  <section
    sx={{
      position: "relative",
      height: "75.5vh",
      clipPath: theme => theme.clipPaths.primary,
    }}
  >
    <div sx={{ height: "100%" }}>
      <div
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: "20",
          backgroundImage: theme => theme.gradients.primaryFaded,
        }}
      >
        &nbsp;
      </div>
      <Img
        sx={{
          objectFit: "cover",
          height: "100%",
          width: "100%",
          objectPosition: "50% 25%",
        }}
        fluid={props.image}
        alt="Tour image"
      />
    </div>
    <div
      sx={{
        position: "absolute",
        zIndex: "30",
        bottom: "13vh",
        left: "50%",
        top: ["45%", "45%", "40%"],
        transform: "translate(-50%, -50%)",
        width: ["74%", "74%", "74%", "60%", "49%", "46%", "auto"],
      }}
    >
      <h1
        sx={{
          fontSize: "5rem",
          textAlign: "center",
          width: ["100%", "100%", "100%", "100%", "100%", "90%", "70%"],
          margin: "0 auto",
          color: "white",
          textTransform: "uppercase",
          fontWeight: "body",
        }}
      >
        <span
          sx={{
            padding: "1rem 1.5rem",
            lineHeight: "1",
            boxDecorationBreak: "clone",
            backgroundImage: theme => theme.gradients.primaryFaded,
          }}
        >{`${props.name} Tour`}</span>
      </h1>
      <div
        sx={{
          color: "greyLight1",
          mt: [null, "5rem", "3rem"],
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: "translateX(6px)",
        }}
      >
        {/* Ignoring because textTransform: uppercase is not assignable */}
        {/* @ts-ignore */}
        <div sx={detailStyle}>
          <Icon sx={iconStyle} type="clock" />
          <span>{`${props.duration} days`}</span>
        </div>
        {/* @ts-ignore */}
        <div sx={detailStyle}>
          <Icon sx={iconStyle} type="map-pin" />
          <span>{props.startLocation}</span>
        </div>
      </div>
    </div>
  </section>
)

export default Header
