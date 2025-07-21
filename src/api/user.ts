import { supabase } from "@/config";

export interface User {
  id: number;
  name: string;
  comment: string;
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
