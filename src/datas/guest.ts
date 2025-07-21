import { loadUserData } from "@/api/user";

const guestData = await loadUserData();
export const guest = guestData.map((user) => ({
  id: user.id,
  name: user.name,
  comment: user.comment,
}));
console.log(guest);
