import { fetchBySlug, fetchPageBlocks } from "@/lib/notion";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import { notFound } from "next/navigation";

// import { NotionRenderer }
// : {params : { slug: string}}
export default async function Page({params}) {
    const post = await fetchBySlug(params.slug);

    if (!post) {
        return <div>Post not found</div>
    }

    const blocks = await fetchPageBlocks(post.id);

    const renderer = new NotionRenderer({
        client: notion,
    })

    renderer.use(hljsPlugin({}));
    renderer.use(bookmarkPlugin({undefined}));

    const html = await renderer.render(...blocks);

        
    return (
        <div dangerouslySetInnerHTML={{_html: html }}></div>
    )

}