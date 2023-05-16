import { useSelector } from "react-redux";

export default function SuperAdmin({ children }) {
  const superAdmin = useSelector((state) => state.user.user.userRole);
  if (superAdmin && superAdmin === "ROLE_SUPERADMIN") {
    return children;
  }
  return "NOT ALLOWED";
}
