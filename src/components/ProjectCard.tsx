import { Project } from "@/utils/interfaces";
import Image from "next/image";
import Link from "next/link";

interface Props {
  value: Project;
}

function ProjectCard({ value }: Props) {
  return (
    <div className="flex flex-col gap-5 text-center bg-gray-950 text-gray-50 p-5 rounded sm:text-left">
      <div className="overflow-hidden">
        <Link href={value.hrefImage} target="_blank">
          <Image
            src={value.image}
            alt={value.title}
            className="hover:scale-125 transition-transform ease-in rounded type"
          />
        </Link>
      </div>
      <div>
        <h4 className="text-xl font-medium mb-2 sm:text-2xl">{value.title}</h4>
        <p className="text-lg mb-5 text-gray-200 sm:text-xl">
          {value.description}
        </p>
        <Link
          href={value.url}
          target="_blank"
          className="inline-block px-4 py-2 bg-red-600 hover:bg-red-500 transition-colors text-gray-50 rounded ease-in text-lg sm:text-xl"
        >
          See repository
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
