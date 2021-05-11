import { User } from "types/user";
import { useAsync } from "hooks/useAsync";
import { useHttp } from "hooks/useHttp";
import { useMount } from "utils";

export const useUsers = (param?: Partial<User>) => {
  const { run, ...result } = useAsync<User[]>();
  const client = useHttp();

  useMount(() => {
    run(client("users"));
  });

  return result;
};
