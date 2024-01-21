import slugify from "slugify";

export const slugToId = (slug: string) => {
  return slug.split("-")[0];
};

export const toBlogSlug = (name: string, id: string) => {
  return `/blog/${id}-${slugify(name)}`;
};
