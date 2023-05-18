import { prisma } from "../../../../../prisma/globalPrismaClient";

export async function POST(request: Request) {
  try {
    const body: { id: number } = await request.json();
    console.log(body);

    const data = await prisma.user.delete({ where: body });

    return new Response(JSON.stringify({ data: data }));
  } catch (e) {
    console.log(e);
    throw new Error("An Error occurred");
  }
}
