import Projects from "@/components/Projects";
import { getProjects } from "@/utils/fetchProjects";
import { Project } from "@/typings";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type Props = {
  projects: Project[];
};

const ProjectsPage = ({ projects }: Props) => {
  return (
    <div>
      <Projects projects={projects} />
    </div>
  );
};

export default ProjectsPage;
