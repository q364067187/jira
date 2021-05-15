import { Link, Navigate, Route, Routes } from "react-router-dom";
import ProjectEpic from "../epic";
import ProjectKanban from "../kanban";

const ProjectDetail = () => {
  return (
    <div>
      projectScreen
      <Link to="kanban">看板</Link>
      <Link to="epic">任务组</Link>
      <Routes>
        <Route path="kanban" element={<ProjectKanban />} />
        <Route path="epic" element={<ProjectEpic />} />
        <Navigate to="kanban" />
      </Routes>
    </div>
  );
};

export default ProjectDetail;
