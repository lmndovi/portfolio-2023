import { defineField, defineType } from "sanity";

export default defineType({
  name: "language",
  title: "Language",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "Title of the language",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
