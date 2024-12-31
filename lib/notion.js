import "server-only";
import { Client } from "@notionhq/client";
import React from "react";

export const notion = new Client({
    auth: process.env.NOTION_TOKEN
});

export const fatchPages = React.cache(() => {
    return notion.databases.query({

        database_id: process.env.NOTION_DATABSE_ID,
        filter: {
            property: 'Status',
            status : {
                equals: 'Live'
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
});


export const fetchPageBlocks = React.cache((pageId) => {
    return notion.blocks.children.list({
        block_id: pageId
        }).then((res) => res.results);
        // }).then((res) => res.results[0] as BlockObjectResponse[] | undefined);
    }) 



    export async function fetchAllLivePages() {
        try {
          const response = await notion.databases.query({
            database_id: process.env.NOTION_DATABSE_ID,
            filter: {
              property: "Status",
              status: {
                equals: "Live",
              },
            },
          });
      
          // Return the results
          console.log(response.results);
          return response.results;
        } catch (error) {
          console.error("Error fetching live pages:", error);
          return [];
        }
      }