export default {
  name: "journal",
  type: "document",
  title: "Journal",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "body",
      title: "Body",
      type: "markdown",
    },
  ],
};
