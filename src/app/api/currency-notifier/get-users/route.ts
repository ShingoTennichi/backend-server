import { prisma } from "../../../../../prisma/globalPrismaClient";

export async function GET() {
  const data = await prisma.user.findMany();
  return new Response(JSON.stringify({ data: data }));
}