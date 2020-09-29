export default {
  name: "tour",
  title: "Tour",
  type: "document",
  fields: [
    {
      name: "id",
      title: "ID",
      type: "string",
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "difficulty",
      title: "Difficulty",
      type: "string",
    },
    {
      name: "summary",
      title: "Summary",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "duration",
      title: "Duration",
      type: "number",
    },
    {
      name: "maxGroupSize",
      title: "Max Group Size",
      type: "number",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "imageCover",
      title: "Image Cover",
      type: "image",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "name",
        slugify: (input) => input.toLowerCase().replace(/\s+/g, "-"),
      },
    },
    {
      name: "ratingsAverage",
      title: "Ratings Average",
      type: "number",
    },
    {
      name: "ratingsQuantity",
      title: "Ratings Quantity",
      type: "number",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "startDates",
      title: "Start Dates",
      type: "array",
      of: [{ type: "datetime" }],
    },
    {
      name: "secretTour",
      title: "Secret Tour",
      type: "boolean",
    },
    {
      title: "Start Location",
      name: "startLocation",
      type: "startLocation",
    },
    {
      name: "locations",
      title: "Locations",
      type: "array",
      of: [{ type: "location" }],
    },
    {
      name: "reviews",
      title: "Reviews",
      type: "array",
      of: [{ type: "review" }],
    },
    {
      name: "guides",
      title: "Guides",
      type: "array",
      of: [{ type: "guide" }],
    },
  ],
};
