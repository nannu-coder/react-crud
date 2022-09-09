import { useContext } from "react";
import { userContext } from "../Context/ContextProvider";

const useUsers = () => {
  return useContext(userContext);
};

export default useUsers;
