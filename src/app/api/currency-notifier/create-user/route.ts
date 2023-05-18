import { prisma } from "../../../../../prisma/globalPrismaClient";
import { User } from "../../../../../types/types";

export async function POST(request: Request) {
  try {
    const body: User = await request.json();
    const data = await prisma.user.create({
      data: body,
    });
    return new Response(JSON.stringify({ data: data }));
  } catch(e) {
    console.log(e);
    throw new Error("An Error has occurred")
  }
}
