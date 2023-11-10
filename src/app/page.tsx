import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import SkillComponent from "@/components/SkillComponent";
import { projects, skills } from "@/utils/data";
import Link from "next/link";

function HomePage() {
  return (
    <>
      <section className="flex flex-col my-5 sm:flex-row gap-5">
        <Header />
        <div className="border p-5 w-full">
          <h3 className="text-center text-2xl font-semibold mb-5 sm:text-3xl sm:text-left">
            Skills
          </h3>
          <div className="flex flex-col gap-5">
            {skills.map((value, index) => (
              <SkillComponent key={index} value={value} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 text-gray-950 p-5">
        <h3 className="text-center text-2xl font-semibold sm:text-3xl mb-5">
          Portfolio
        </h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((value, index) => (
            <ProjectCard key={index} value={value} />
          ))}
        </div>
        <Link
          href="https://github.com/adore1968?tab=repositories"
          target="_blank"
          className="mt-5 block mx-auto w-fit px-4 py-2 bg-red-600 hover:bg-red-500 transition-colors text-gray-50 rounded ease-in text-lg sm:text-xl"
        >
          More projects
        </Link>
      </section>
    </>
  );
}

export default HomePage;
