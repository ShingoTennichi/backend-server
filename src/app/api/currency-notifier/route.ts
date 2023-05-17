import { prisma } from "../../../../prisma/globalPrismaClient";

export async function GET() {
  const data = await prisma.user.findMany();
  return new Response(JSON.stringify({ data: data }));
}

export async function POST(request: Request) {
  console.log("fired");
  const body = await request.json();
  console.log(body);
  const data = await prisma.user.create({
    data: {
      name: "admin",
      apiKeyGroup: "API_KEY_GROUP1",
      to: "JPY",
      from: "CAD",
    },
  });
  return new Response(JSON.stringify({ data: data }));
}

export async function DELETE(request: Request) {
  const body = await request.json();
  const targetUser: { id: number } = {
    id: 1,
  };
  const data = await prisma.user.deleteMany({});
  console.log(data);
  return new Response(JSON.stringify({ data: data }));
}
