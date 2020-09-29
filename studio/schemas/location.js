export default {
  name: "location",
  title: "Location",
  type: "object",
  fields: [
    {
      name: "id",
      title: "ID",
      type: "string",
    },
    {
      name: "coordinates",
      title: "Coordinates",
      type: "geopoint",
    },
    {
      name: "day",
      title: "Day",
      type: "number",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
  ],
};
