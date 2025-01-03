// import { fetchBySlug, fetchPageBlocks } from "@/lib/notion";
// import { NotionRenderer } from "@notion-render/client";
// import hljsPlugin from "@notion-render/hljs-plugin";
// import bookmarkPlugin from "@notion-render/bookmark-plugin"; // Ensure this is correctly installed
// import { Client } from "@notionhq/client";

// // Initialize Notion client
// const notion = new Client({ auth: process.env.NOTION_API_KEY });

// export default async function Page({ params }) {
//   // Fetch post by slug
//   const post = await fetchBySlug(params.slug);
//   if (!post) {
//     return <div>Post not found</div>;
//   }

//   // Fetch page blocks
//   const blocks = await fetchPageBlocks(post.id);

//   // Initialize NotionRenderer
//   const renderer = new NotionRenderer({ client: notion });

//   // Add plugins
//   renderer.use(hljsPlugin({}));
//   renderer.use(bookmarkPlugin());

//   // Render HTML
//   const html = await renderer.render(...blocks);

//   // Return page
//   return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
// }



// import { fetchBySlug, fetchPageBlocks } from "@/lib/notion";
// import { NotionRenderer } from "@notion-render/client";
// import hljsPlugin from "@notion-render/hljs-plugin";
// import bookmarkPlugin from "@notion-render/bookmark-plugin";

// export default async function BlogDetailPage({ params }) {
//   const { slug } = params;

//   // Fetch post by slug
//   const post = await fetchBySlug(slug);

//   if (!post) {
//     return <div>Blog not found</div>;
//   }

//   // Fetch page blocks
//   const blocks = await fetchPageBlocks(post.id);

//   // Initialize NotionRenderer
//   const renderer = new NotionRenderer();

//   // Add plugins
//   renderer.use(hljsPlugin({}));
//   renderer.use(bookmarkPlugin());

//   // Render HTML
//   const html = await renderer.render(...blocks);

//   return (
//     <div>
//       <h1>{post.properties.Name.title[0]?.plain_text}</h1>
//       <div dangerouslySetInnerHTML={{ __html: html }}></div>
//     </div>
//   );
// }

// "use client"

import { fetchBySlug, fetchPageBlocks } from "@/lib/notion"
import { Suspense } from 'react'
import NotionContent from '@/components/NotionContent.jsx'

export default async function BlogDetailPage({ params }) {
  const { slug } = await params

  // Fetch post by slug
  const post = await fetchBySlug(slug)

  if (!post) {
    return <div>Blog not found</div>
  }

  // Fetch page blocks
  const blocks = await fetchPageBlocks(post.id)

  return (
    <article className="max-w-2xl mx-auto py-8">
      {/* <h1 className="text-3xl font-bold mb-4">{post.properties.Name.title[0]?.plain_text}</h1> */}
      <Suspense fallback={<div>Loading content...</div>}>
        <NotionContent blocks={blocks} />
      </Suspense>
    </article>
  )
}

