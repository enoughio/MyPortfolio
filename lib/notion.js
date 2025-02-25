import "server-only";
import { Client } from "@notionhq/client";
import React from "react";

export const notion = new Client({
    auth: process.env.NOTION_TOKEN
});


// fetches all pages with a Live status
export async function fetchPages(limit = null) {
    // return laaa
    return notion.databases.query({

        database_id: process.env.NOTION_DATABSE_ID,
        filter: {
            property: 'Status',
            status : {
                equals: 'Live'
            }
        },
        sorts: [
            {
              property: "Date",
              direction: "descending",
            },
          ],
          page_size: limit || 100, // Use the limit if provided, otherwise fetch all (up to 100)        
    })
};


// fatches a single page(post) ID with the slug == arg
export const fetchBySlug = async (arg) => {
    // return laa
    return await notion.databases.query({
        database_id: process.env.NOTION_DATABSE_ID,
        filter: {
            property: 'slug',
            rich_text: {
                equals: arg
            }
        }
    })
      .then((res) => res.results[0]);
}


// this fatches an actual page(post)
export const fetchPageBlocks = React.cache((pageId) => {
    // return laa
    return notion.blocks.children.list({
        block_id: pageId
        }).then((res) => res.results);
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