import "server-only";
import { Client } from "@notionhq/client";
import React from "react";

export const notion = new Client({
    auth: process.env.NOTION_TOKEN_ID
});

export const fatchPages = React.cache(() => {
    return notion.databases.query({

        database_id: process.env.NOTION_DATABSE_ID,
        filter: {
            property: 'Status',
            status : {
                equals: 'Done'
            }
        }
    })
});

export const fetchBySlug = React.cache((slug) => {
    return notion.databases.query({
        database_id: process.env.NOTION_DATABSE_ID,
        filter: {
            property: 'slug',
            rich_text: {
                equals: slug
            }
        }
    })
        .then((res) => res.results[0] );
        // .then((res) => res.results[0] as PageObjectResponse | undefined);
})


export const fetchPageBlocks = React.cache((pageId) => {
    return notion.blocks.children.list({
        block_id: pageId
        }).then((res) => res.results[0]);
        // }).then((res) => res.results[0] as BlockObjectResponse[] | undefined);
    }) 