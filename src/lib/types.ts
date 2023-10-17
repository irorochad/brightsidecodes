import * as prismic from '@prismicio/client';

export type AuthorContentRelationshipField = prismic.ContentRelationshipField<
  'author',
  string,
  {
    name: prismic.TitleField;
    picture: prismic.ImageField;
  }
>;

export type PostDocumentWithAuthor = prismic.Content.PostDocument & {
  data: {
    author: AuthorContentRelationshipField;
  };
};
