import React from "react"
import Img from "gatsby-image"

/** @jsx jsx */
import { jsx } from "theme-ui"

const allImgStyle = {
  display: "block",
  width: "100%",
  height: ["100%", "100%", "100%", "100%", "110%"],
  objectFit: "cover",
  p: ["2rem 3rem", "2rem 3rem", "2rem 5rem", "2rem 5rem", "0"],
}

const allBoxStyle = {
  width: ["80%", "80%", "80%", "80%", "33.3333%"],
  margin: ["0 auto", "0 auto", "0 auto", "0 auto", "0"],
  height: ["25rem", "25rem", "25rem", "25rem", "45rem"],
}

const Pictures = props => {
  const galleryPhotos = props.images.map((photo, i) => {
    let imgStyle = { ...allImgStyle }
    let boxStyle = { ...allBoxStyle }

    if (i === 0 || i === 1) {
      boxStyle.pb = ['2rem', '2rem', '2rem', '2rem', '0'];
    }

    return (
      <div key={i} sx={ boxStyle }>
        <Img sx={imgStyle} fluid={photo.asset.fluid} alt={`Tour Image ${i + 1}`} />
      </div>
    )
  })

  return (
    <section
      sx={{
        display: "flex",
        clipPath: [
          "none",
          "none",
          "none",
          "none",
          theme => theme.clipPaths.secondary,
        ],
        mt: "calc(0px - 9vw)",
        position: "relative",
        zIndex: "10000",
        flexDirection: ["column", "column", "column", "column", "row"],
        pb: ["10rem", "10rem", "10rem", "10rem", "0"]
      }}
    >
      {galleryPhotos}
    </section>
  )
}

export default Pictures
