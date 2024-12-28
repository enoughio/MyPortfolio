import Blog from "./Blog"

const Blogs = () => {
  return (
    <div className="flex flex-col justify-center items-start gap-10 border mt-10">
      <h1 className="text-6xl font-semibold mb-10 p-5 ">My latest blogs</h1>

      <Blog />
      <Blog />
      <Blog />
      <Blog />
    </div>
  )
}

export default Blogs