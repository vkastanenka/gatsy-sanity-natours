// React
import React from "react"
import { graphql } from "gatsby"

/** @jsx jsx */
import { jsx } from "theme-ui"

// Components
import Layout from "../components/layout/layout/layout"
import SEO from "../components/seo"
import TourCard from "../components/tour-card"

// Utilities
import { months } from "../utils/date"

const IndexPage = ({ data }) => {
  const { nodes } = data.allSanityTour

  const tours = nodes.map((tour, i) => {
    const startDate = new Date(tour.startDates[0])
    return (
      <TourCard
        key={i}
        slug={tour.slug.current}
        name={tour.name}
        image={tour.imageCover}
        duration={tour.duration}
        difficulty={tour.difficulty}
        summary={tour.summary}
        startLocation={tour.startLocation.description}
        date={`${months[startDate.getMonth()]}, ${startDate.getFullYear()}`}
        stops={tour.locations.length}
        participants={tour.maxGroupSize}
        price={tour.price}
        ratingsAverage={tour.ratingsAverage}
        ratingsQuantity={tour.ratingsQuantity}
      />
    )
  })

  return (
    <Layout>
      <SEO title="Natours | Exciting tours for adventurous people" />
      <section sx={{ variant: "utilities.layout" }}>
        <div
          sx={{
            maxWidth: [
              null,
              null,
              "100%",
              "80%",
              "100%",
              "100%",
              "100%",
              "82%",
            ],
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: [null, null, null, "1fr", "repeat(3, 1fr)"],
            gridGap: [
              "4rem",
              null,
              null,
              null,
              "3rem",
              "3rem",
              "5rem",
              "5rem",
              "7rem",
            ],
          }}
        >
          {tours}
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allSanityTour {
      nodes {
        description
        difficulty
        duration
        guides {
          email
          name
          role
          photo {
            asset {
              fluid {
                base64
                srcWebp
                srcSetWebp
              }
            }
          }
        }
        maxGroupSize
        name
        price
        ratingsAverage
        ratingsQuantity
        slug {
          current
        }
        startDates
        startLocation {
          address
          description
          coordinates {
            lat
            lng
          }
        }
        summary
        reviews {
          rating
          review
          tour
          user {
            name
            photo {
              asset {
                fluid {
                  base64
                  srcWebp
                  srcSetWebp
                }
              }
            }
          }
        }
        imageCover {
          asset {
            childImageSharp {
              id
            }
            fluid {
              base64
              srcWebp
              srcSetWebp
            }
          }
        }
        images {
          asset {
            fluid {
              base64
              srcWebp
              srcSetWebp
            }
          }
        }
        locations {
          day
          description
          coordinates {
            lat
            lng
          }
        }
      }
    }
  }
`
