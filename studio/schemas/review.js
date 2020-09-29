export default {
  name: "review",
  title: "Review",
  type: "object",
  fields: [
    {
      name: "id",
      title: "ID",
      type: "string",
    },
    {
      name: "review",
      title: "Review",
      type: "string",
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
    },
    {
      name: "user",
      title: "User",
      type: "user",
    },
    {
      name: "tour",
      title: "Tour",
      type: "string",
    },
    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
    },
  ],
};
