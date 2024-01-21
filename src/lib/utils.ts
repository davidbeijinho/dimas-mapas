import slugify from "slugify";

export const slugToId = (slug: string) => {
  return slug.split("-")[0];
};

export const toBlogSlug = ({ id, name }: { id: string; name: string }) => {
  return `/blog/${id}-${slugify(name)}`;
};
