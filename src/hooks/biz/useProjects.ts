import { useEffect } from "react";
import { Project } from "types/project";
import { useAsync } from "hooks/useAsync";
import { useHttp } from "hooks/useHttp";

export const useProjects = (param?: Partial<Project>) => {
  const { run, ...result } = useAsync<Project[]>();
  const client = useHttp();

  useEffect(() => {
    run(
      client("projects", {
        data: param,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param]);

  return result;
};
