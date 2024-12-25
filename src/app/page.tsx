import Image from "next/image";
import Section1 from "@/components/Section1";
import Latestposts from "@/components/Latestposts";
import Relatedposts from "@/components/Relatedposts";


export default function Home() {
  return (
   <div>
       <Section1 />
       <Latestposts/>
       <Relatedposts/>
   </div>
  );
}
