import * as prismic from "@prismicio/client";

export type PostDocumentWithAuthor = prismic.Content.PostDocument & {
  data: {
    author: AuthorContentRelationshipField;
  };
};

export type AuthorContentRelationshipField = prismic.ContentRelationshipField<
  "author",
  string,
  {
    name: prismic.TitleField;
    picture: prismic.ImageField;
  }
>;
