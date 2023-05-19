import FetchTest from "./fetchTests";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen gap-10">
      <h1 className="text-4xl">Backend Server</h1>
      <FetchTest getTest={getTest} createTest={createTest} deleteTest={deleteTest}></FetchTest>
    </main>
  );
}

async function getTest(url: string) {
  "use server"
  const data = await fetch(url + "api/currency-notifier/get-users", {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify("GET")
  });
  const result = await data.json();
  console.log(result);
  return result;
}

async function createTest(url: string) {
  "use server"
  const data = await fetch(url + "api/currency-notifier/create-user", {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: "test",
      apiKeyGroup: "API_KEY_GROUP1",
      to: "JPY",
      from: "CAD",
    }),
  });
  const result = await data.json();
  console.log(result);
}

async function deleteTest(url: string) {
  "use server"
  const data = await fetch(url + "api/currency-notifier/delete-user", {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: 0 }),
  });
  const result = await data.json();
  console.log(result);
}
