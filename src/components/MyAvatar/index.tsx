// hooks
// import useAuth from '../hooks/useAuth';
// utils
import createAvatar from "../../utils/createAvatar";
//
import Avatar from "../Avatar";

import { useAtom } from "jotai";
import { ownerAtom } from "../../store/ownerStore";

// ----------------------------------------------------------------------

export default function MyAvatar({ ...other }) {
  //   const { user } = useAuth();
  const [owner, setOwner] = useAtom(ownerAtom);
  const user = {
    photoURL: "",
    displayName: owner.owner_name,
  };

  return (
    <Avatar
      src={user?.photoURL}
      alt={user?.displayName}
      color={user?.photoURL ? "default" : createAvatar(user?.displayName).color}
      {...other}
    >
      {createAvatar(user?.displayName).name}
    </Avatar>
  );
}
