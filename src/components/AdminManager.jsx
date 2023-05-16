import { useSelector } from "react-redux";

export default function AdminManager({ children }) {
  const userRole = useSelector((state) => state.user.user.userRole);
  if (
    userRole &&
    (userRole === "ROLE_ADMIN" ||
      userRole === "ROLE_SUPERADMIN" ||
      userRole === "ROLE_MANAGER")
  ) {
    return children;
  }
  return "NOT ALLOWED";
}
