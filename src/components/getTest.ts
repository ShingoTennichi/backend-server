import { prisma } from "../../prisma/globalPrismaClient";

export const fetchCache = 'force-no-store';

export async function getTest() {
  const data = await prisma.user.findMany();
  return data;
}