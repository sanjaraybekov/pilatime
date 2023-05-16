import { useSelector } from "react-redux";

export default function Admins({ children }) {
  const superAdmin = useSelector((state) => state.user.user.userRole);
  if (
    superAdmin &&
    (superAdmin === "ROLE_ADMIN" || superAdmin === "ROLE_SUPERADMIN")
  ) {
    return children;
  }
  return "NOT ALLOWED";
}
