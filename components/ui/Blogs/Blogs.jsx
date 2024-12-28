import React from 'react';
import Link from 'next/link';

const BlogPost = ({ post }) => {
  return (
    <div className="blog-post">
      <Link href={`/blog/${post.slug}`}>
        <a className="blog-post-title">{post.title}</a>
      </Link>
      <p className="blog-post-date">Posted on {post.date}</p>
      <p className="blog-post-excerpt">{post.excerpt}</p>
    </div>
  );
};

const Blog = ({ posts }) => {
  return (
    <div className="blog-page">
      <h1>Hey, its my Blog</h1>
      <p>I am Aniket Jatav</p>
      <p>
        It is a long established fact that a reader will be distracted
        by the readable content of a page when looking at its layout.
        The point of using Lorem Ipsum is that it has a more-or-less
        normal distribution of letters, as opposed to using 'Content
        here,
      </p>
      <p>
        It is a long established fact that a reader will be distracted
        by the readable content of a page when looking at its layout.
        The point of using Lorem Ipsum is that it has a more-or-less
        normal distribution of letters, as opposed,
      </p>
      <div className="blog-posts">
        {posts.map((post) => (
          <BlogPost key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;