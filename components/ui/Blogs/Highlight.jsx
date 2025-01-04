import Blog, { Bloger } from "./Blog";

const Highlight = () => {
  return (
    <div className="w-full mt-10">
      <h1 className="text-4xl font-bold self-start my-5">MY Latest blogs</h1>
      <div className="flex flex-col gap-5">


        <Bloger />
        <Bloger />
        <Bloger />

      </div>
    </div>
  );
};

export default Highlight;
