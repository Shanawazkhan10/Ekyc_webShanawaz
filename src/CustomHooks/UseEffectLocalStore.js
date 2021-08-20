import { useEffect, useState } from "react";

function getProfileData() {
  return JSON.parse(localStorage.getItem("profile"));
}

export default function useProfileData() {
  const [profile, setProfile] = useState(getProfileData());

  useEffect(() => {
    function handleChangeStorage() {
      setProfile(getProfileData());
    }

    window.addEventListener("storage", handleChangeStorage);
    return () => window.removeEventListener("storage", handleChangeStorage);
  }, []);

  return profile;
}
