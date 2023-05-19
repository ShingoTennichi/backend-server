import { prisma } from "../../../../../prisma/globalPrismaClient";

export async function POST(request: Request, response: Response) {
  const data = await prisma.user.findMany();
  return new Response(JSON.stringify({ data: data }));
}