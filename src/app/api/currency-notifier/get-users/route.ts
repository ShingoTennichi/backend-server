import { getTest } from "@/components/getTest";
export const fetchCache = 'force-no-store';

export async function POST(request: Request, response: Response) {
  const body = request.json();
  console.log(body)
  const data = await getTest();
  return new Response(JSON.stringify({ data: data }));
}