import Blog from "./Blog";

const Highlight = () => {
  return (
    <div className="w-full">
      <h1 className="text-5xl font-semibold my-5">MY Latest blogs</h1>
      <div className="flex flex-col gap-2">
        <Blog />
        <Blog />
        <Blog />
      </div>
    </div>
  );
};

export default Highlight;
