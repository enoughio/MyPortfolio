import React from 'react';
import { fetchBySlug, fetchPageBlocks } from "@/lib/notion";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";

export default async function Article({ params }) {
  const post = await fetchBySlug(params);

  if (!post) {
    return (
      <div>
        <h1>Post not found</h1>
      </div>
    );  
  }

  const content = await fetchPageBlocks(post.id);

  const renderer = new NotionRenderer({
    client: null,
  });

  renderer.use(hljsPlugin({}));
  renderer.use(bookmarkPlugin(""));

  const html = await renderer.render(...content);

  return (
    <div className='w-full max-w-4xl mx-auto py-6'>
      <h1 className='text-3xl italic'>{post.properties.Title.title[0]?.plain_text || "Untitled"}</h1>
      <p className="text-sm text-gray-500 mb-2">{new Date(post.properties.Date.date.start).toLocaleDateString()}</p>
      <hr></hr>
      <div className='prose max-w-none' dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}