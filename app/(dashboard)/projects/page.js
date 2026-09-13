import ProjectFilter from "@/components/projects/ProjectFilter";
import ProjectTable from "@/components/projects/ProjectTable";

export default function ProjectsPage() {
  return (
    <div className="space-y-5">
      <ProjectFilter />
      <ProjectTable />
    </div>
  );
}