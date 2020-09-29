import React from "react"
import Img from "gatsby-image"

/** @jsx jsx */
import { jsx } from "theme-ui"

import Icon from "../../../icon"

const headingStyle = {
  variant: ["headings.secondary", "headings.secondarySmall"],
  mb: "3rem",
}

const obDetailStyle = {
  fontSize: "1.5rem",
  display: "flex",
  alignItems: "center",
  fontWeight: "400",
  "& svg": { mr: "1.25rem" },
  "&:not(:last-child)": { mb: "2.25rem" },
}

const iconStyle = {
  variant: "icons.sizes.primaryM",
  fill: "primary",
}

const labelStyle = {
  fontWeight: "bold",
  mr: "2.25rem",
  textTransform: "uppercase",
  fontSize: "1.4rem",
}

const textStyle = {
  textTransform: "capitalize",
  fontWeight: "body",
}

const Description = props => {
  const guides = props.guides.map(guide => {
    let role
    if (guide.role === "lead-guide") role = "Lead guide"
    else if (guide.role === "guide") role = "Tour guide"

    return (
      <div key={guide.email} sx={obDetailStyle}>
        <div sx={{ width: "3.5rem", height: "3.5rem", mr: "1.25rem" }}>
          <Img
            fluid={guide.photo.asset.fluid}
            sx={{ borderRadius: "50%", width: "100%", height: "100%" }}
            alt={`Guide ${guide.name} photo`}
          />
        </div>
        {/* @ts-ignore => Ignored for textTransform */}
        <span sx={labelStyle}>{role}</span>
        {/* @ts-ignore => Ignored for textTransform */}
        <span sx={textStyle}>{guide.name}</span>
      </div>
    )
  })

  return (
    <section
      sx={{
        backgroundColor: "greyLight2",
        mt: "calc(0px - 9vw)",
        display: "flex",
        flexDirection: ["column", "column", "column", "column", "row"],
        "& > *": {
          padding: "14vw 8vw 10vw 8vw",
          flex: "0 0 50%",
        },
        "& > :first-child": {
          pt: ["20vw", "20vw", "20vw", "17vw", "14vw"],
          pb: ["14vh", "14vh", "12vh", "4vh", "10vw"],
        },
        "& > :last-child": {
          pt: ["12vw", "12vw", "12vw", "12vw", "14vw"],
          pb: ["14vh", "14vh", "14vh", "17vh", "10vw"],
        },
      }}
    >
      <div
        sx={{
          backgroundColor: "greyLight1",
          display: "flex",
          flexDirection: ["column", "column", "column", "row", "column"],
          alignItems: ["center", "center", "center", "flex-start", "center"],
          justifyContent: [
            "space-between",
            "space-between",
            "space-between",
            "space-between",
            "auto",
          ],
          "& > :not(:last-child)": { mb: "7rem" },
        }}
      >
        <div>
          <h2 sx={headingStyle}>Quick Facts</h2>
          <div sx={obDetailStyle}>
            <Icon sx={iconStyle} type="calendar" />
            {/* @ts-ignore => Ignored for textTransform */}
            <span sx={labelStyle}>Next date</span>
            {/* @ts-ignore => Ignored for textTransform */}
            <span sx={textStyle}>{`${props.nextDate.toLocaleString("default", {
              month: "long",
            })} ${props.nextDate.getFullYear()}`}</span>
          </div>
          <div sx={obDetailStyle}>
            <Icon sx={iconStyle} type="trending-up" />
            {/* @ts-ignore => Ignored for textTransform */}
            <span sx={labelStyle}>Difficulty</span>
            {/* @ts-ignore => Ignored for textTransform */}
            <span sx={textStyle}>{props.difficulty}</span>
          </div>
          <div sx={obDetailStyle}>
            <Icon sx={iconStyle} type="user" />
            {/* @ts-ignore => Ignored for textTransform */}
            <span sx={labelStyle}>Participants</span>
            {/* @ts-ignore => Ignored for textTransform */}
            <span sx={textStyle}>{`${props.maxGroupSize} people`}</span>
          </div>
          <div sx={obDetailStyle}>
            <Icon sx={iconStyle} type="star" />
            {/* @ts-ignore => Ignored for textTransform */}
            <span sx={labelStyle}>Rating</span>
            {/* @ts-ignore => Ignored for textTransform */}
            <span sx={textStyle}>{`${props.ratingsAverage} / 5`}</span>
          </div>
        </div>

        <div>
          <h2 sx={headingStyle}>Your Tour Guides</h2>
          {guides}
        </div>
      </div>

      <div sx={{ "& p": { fontSize: "1.7rem" } }}>
        <h2 sx={headingStyle}>{`About ${props.name} Tour`}</h2>
        <p sx={{ mb: "2rem" }}>{props.description[0]}</p>
        <p>{props.description[1]}</p>
      </div>
    </section>
  )
}

export default Description
