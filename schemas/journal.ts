import type { Rule } from "sanity";

export default {
  name: "journal",
  type: "document",
  title: "Journal",
  preview: {
    select: {
      title: "title",
    },
  },
  fields: [
    {
      name: "publishDate",
      type: "datetime",
      title: "Publish Date",
      initialValue: new Date().toISOString(),
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        auto: true,
      },
    },
    {
      name: "authors",
      title: "Authors",
      type: "array",
      of: [{ type: "reference", to: [{ type: "author" }] }],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt Text",
        },
      ],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "metaDescription",
      type: "text",
      title: "Meta Description",
      validation: (Rule: Rule) => Rule.required().max(150),
    },
    {
      name: "body",
      title: "Body",
      type: "markdown",
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};
