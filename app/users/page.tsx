import ToggleText from "./components/ToggleText";
import { getUsers } from "./services/getUsers";

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div>
      <h1 className="pb-3 font-bold">Users</h1>
      <div className="space-y-6">
        {users?.slice(0, 5).map((user: any) => (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
      <ToggleText />
    </div>
  );
}
