export default {
  title: "Start Location",
  name: "startLocation",
  type: "object",
  fields: [
    {
      name: "coordinates",
      title: "Coordinates",
      type: "geopoint",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
  ],
};
