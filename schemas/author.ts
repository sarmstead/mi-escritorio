import type { Rule } from "sanity";

export default {
  name: "author",
  type: "document",
  title: "Author",
  preview: {
    select: {
      firstName: "firstName",
      lastName: "lastName",
    },
    prepare(selection: Record<"firstName" | "lastName", string>) {
      const { firstName, lastName } = selection;
      return {
        title: `${firstName} ${lastName}`,
      };
    },
  },
  fields: [
    {
      name: "firstName",
      type: "string",
      title: "First Name",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "lastName",
      type: "string",
      title: "Last Name",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "bio",
      type: "text",
      title: "Bio",
    },
    {
      name: "photo",
      type: "image",
      title: "Head Shot",
      options: {
        hotspot: true,
      },
    },
  ],
};
