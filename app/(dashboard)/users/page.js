import UserFilter from "@/components/users/UserFilter";
import UserTable from "@/components/users/UserTable";

export default function UsersPage() {
  return (
    <div className="space-y-5">
      <UserFilter />
      <UserTable />
    </div>
  );
}