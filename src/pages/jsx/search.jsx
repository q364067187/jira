const Search = ({ param, setParam, users }) => {
  return (
    <form>
      <input
        onChange={(ev) =>
          setParam({
            ...param,
            name: ev.target.value,
          })
        }
      />
      <select
        onChange={(ev) =>
          setParam({
            ...param,
            personId: ev.target.value,
          })
        }
      >
        <option value="">请选择负责人</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </form>
  );
};

export default Search;
