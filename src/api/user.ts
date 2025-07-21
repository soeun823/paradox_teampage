import { supabase } from "@/config";
import type { PostgrestError } from "@supabase/supabase-js";
interface sendUser {
  name: string;
  comment: string;
}
interface User extends sendUser {
  id: number;
}
const userData: User[] = [];
export async function loadUserData(): Promise<User[]> {
  const { data, error } = await supabase.from("User").select("*");
  if (error) {
    console.error("수파베이스 에러", error);
    return userData;
  }
  if (data) {
    userData.length = 0;
    userData.push(...data);
    console.log("데이터 로드됨:", userData);
  }
  return userData;
}

export const insertUserData = async ({
  name,
  comment,
}: sendUser): Promise<sendUser | PostgrestError | null> => {
  const { data, error } = await supabase
    .from("User")
    .insert([{ name: name, comment: comment }])
    .select();
  if (error) {
    console.error("Error inserting user:", error);
    throw error;
  }
  return data ? data[0] : null;
};
