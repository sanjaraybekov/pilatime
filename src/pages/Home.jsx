import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.user.user);
  useEffect(() => {
    if (token) {
      return navigate("/dashboard");
    }
    return navigate("/login");
  }, [token, navigate]);
}
