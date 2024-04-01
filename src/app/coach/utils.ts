import { cookies } from "next/headers";

export const category = cookies().get('category')?.value || "2011"