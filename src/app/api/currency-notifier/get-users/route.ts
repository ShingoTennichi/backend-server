import { getTest } from "@/components/getTest";
export const fetchCache = 'force-no-store';

export async function GET(request: Request, response: Response) {
  const data = await getTest();
  return new Response(JSON.stringify({ data: data }));
}