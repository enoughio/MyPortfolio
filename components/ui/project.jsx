import { Button } from "@/components/ui/button";
import { LuTwitter } from "react-icons/lu";
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import Project from "./project";

export default function () {
  return (
    <div className="w-[40%] border-2 p-4 min-w-fit">
      <h1 className="text-xl font-bold ">heading</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni odio
        consectetur id debitis perspiciatis. Unde atque ducimus temporibus
        exercitationem assumenda?
      </p>

      <div className="flex gap-2 flex-wr ">
        <Button asChild className="mt-5">
          <div>
            <ImGithub />
            <Link href="/contact">view source</Link>
          </div>
        </Button>
        <Button asChild className="mt-5">
          <div>
            <ImGithub />
            <Link href="/contact"> source</Link>
          </div>
        </Button>
        <Button asChild className="mt-5">
          <div>
            <ImGithub />
            <Link href="/contact">view</Link>
          </div>
        </Button>
      </div>
    </div>
  );
}
