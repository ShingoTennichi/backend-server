import { prisma } from "../../../../../prisma/globalPrismaClient";

export const fetchCache = 'force-no-store';

export async function GET(request: Request, response: Response) {
  const data = await prisma.user.findMany();
  return new Response(JSON.stringify({ data: data }));
}