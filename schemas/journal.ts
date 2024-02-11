import type { Rule } from "sanity";

export default {
  name: "journal",
  type: "document",
  title: "Journal",
  fields: [
    {
      name: "metaDescription",
      type: "string",
      title: "Meta Description",
      validation: (Rule: Rule) => Rule.required().min(140).max(150),
    },
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "body",
      title: "Body",
      type: "markdown",
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};
