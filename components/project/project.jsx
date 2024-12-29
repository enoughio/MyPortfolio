import { Button } from "@/components/ui/button";
import { ImGithub } from "react-icons/im";
import Link from "next/link";
import { ProjectsData } from "@/utils/Data";

export default function ({data}) {

  if (!data) {    // To debug or track cases where data is not passed, you can log a warning:
    console.warn("Warning: No data passed to Project component");
  }
  
    // Use Default Props
  const {
    id = "N/A",
    Heading = "No Heading Available",
    Description = "No Description Available",
    isLive = false,
    LiveLink = "#",
    isOnGithub = false,
    SourceCode = "#",
    isDetailed = false,
  } = data;


  return (
    <div className="w-[45%] border-2 border-zinc-400 rounded-xl py-2 px-6 air:min-w-fit   min-w-min">
      <h1 className="text-2xl my-2 font-bold ">{Heading}</h1>
      <p className="opacity-80">
       {Description}
      </p>

      <div className="flex gap-2 ">

        {isOnGithub && <Button asChild className=" my-2 mx-1 md:mt-5">
          <div>
            <ImGithub />
            <Link href={SourceCode}>Sourc Code</Link>
          </div>
        </Button> }
       
      
          {
            isLive && <Button asChild className=" mt-3 md:mt-5">
            <div>
              <ImGithub />
              <Link href={LiveLink}>Live</Link>
            </div>
          </Button>
          }

          {
            isDetailed && 
          
          <Button asChild className=" mt-3 md:mt-5">
            <div>
              <ImGithub />
              <Link href={`/details/${id}`}>Details</Link>
            </div>
          </Button>
          }
        
        
      </div>
    </div>
  );
}
