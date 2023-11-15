import { type SchemaTypeDefinition } from "sanity";

import skill from "./schemas/skill";
import experience from "./schemas/experience";
import project from "./schemas/project";
import pageInfo from "./schemas/pageInfo";
import social from "./schemas/social";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, project, experience, skill, social],
};
