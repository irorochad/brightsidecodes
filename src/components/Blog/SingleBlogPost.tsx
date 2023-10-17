import React from 'react';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'react-share';

import { PostDocumentWithAuthor } from '../../lib/types';

import PostBody from './post-body';
import PostHeader from './post-header';

type PostProps = {
  post: PostDocumentWithAuthor;
};

function SingleBlogPage({ post }: PostProps) {
  const postURL = `https://brightsidecodes.com${post.url}`;
  return (
    <div className="w-full xl:w-11/12 mx-auto xl:col-span-2 space-y-7 text-blog-text-light dark:text-blog-text-dark">
      <div className="xl:-ml-12">
        <PostHeader
          title={post.data.title}
          coverImage={post.data.cover_image}
          date={post.data.date}
          author={post.data.author}
        />
      </div>
      <div className="flex flex-col-reverse xl:flex-row ">
        <PostBody slices={post.data.slices} />

        {/* social share media */}
        <div className="mb-10 xl:mb-0">
          <h3 className="pb-6">Share This Post!</h3>
          <div className="flex space-x-4">
            <FacebookShareButton url={postURL} quote={post.data.title.toString()}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>

            <TwitterShareButton url={postURL} title={post.data.title.toString()}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>

            <LinkedinShareButton url={postURL}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>

            <EmailShareButton url={postURL} subject={post.data.title.toString()} body="">
              <EmailIcon size={32} round />
            </EmailShareButton>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SingleBlogPage;
