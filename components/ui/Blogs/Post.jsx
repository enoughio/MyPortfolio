import React from "react";

export default function Post({ title, date, htmlContent }) {
  return (
    <div className="w-full max-w-4xl mx-auto py-6 ">
      <h1 className="text-3xl italic">{title || "Untitled"}</h1>
      <p className="text-sm text-gray-500 mb-2">
        {date}
      </p>
      <hr />
      <div className="prose mt-10  dark:prose-headings:text-white max-w-none" dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}
