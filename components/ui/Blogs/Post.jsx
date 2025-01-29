// import React from "react";

// export default function Post({ title, date, htmlContent }) {
//   return (
//     <div className="w-full max-w-4xl mx-auto py-6 ">
//       <h1 className="text-3xl italic">{title || "Untitled"}</h1>
//       <p className="text-sm text-gray-500 mb-2">
//         {date}
//       </p>
//       <hr />
//       <div
//         className="prose mt-10 max-w-none text-primary dark:prose-invert 
//                    prose-img:rounded-xl prose-img:mx-auto"
//         dangerouslySetInnerHTML={{ __html: htmlContent }}
//       />
//     </div>
//       // <div className="prose mt-10  dark:prose-headings:text-white max-w-none" dangerouslySetInnerHTML={{ __html: htmlContent }} />
//     // </div>
//   );
// }

"use client"

import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // Change theme as needed
import "prismjs/components/prism-javascript"; // Ensure JavaScript support

export default function Post({ title, date, htmlContent }) {
  useEffect(() => {
    Prism.highlightAll(); // Apply syntax highlighting on content update
  }, [htmlContent]);

  return (
    <div className="w-full max-w-4xl mx-auto py-6">
      <h1 className="text-3xl italic">{title || "Untitled"}</h1>
      <p className="text-sm text-gray-500 my-2">{date}</p>
      <hr />
      <div
        className="prose mt-10 max-w-none text-primary dark:prose-invert prose-img:rounded-xl prose-img:mx-auto"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}
