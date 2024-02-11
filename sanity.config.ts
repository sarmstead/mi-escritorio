import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { markdownSchema } from "sanity-plugin-markdown";

import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "default",
  title: "Desk",

  projectId: "q3yrxlwb",
  dataset: "production",

  plugins: [structureTool(), visionTool(), markdownSchema()],

  schema: {
    types: schemaTypes,
  },
});
