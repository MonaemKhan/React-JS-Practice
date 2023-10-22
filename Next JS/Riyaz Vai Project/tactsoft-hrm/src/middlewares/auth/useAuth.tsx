// middleware.js
import { useEffect } from "react";
import { useRouter } from "next/router";
import tokenService from "@/services/tokenService";

function useAuth(required = true) {
  const router = useRouter();
  useEffect(() => {
    if (required && tokenService.isTokenExpired()){
      router.push("/dashboard");
    } else if (!required &&!tokenService.isTokenExpired()) {
      router.push("/login"); 
    }
  }, []);
}
export default useAuth;
