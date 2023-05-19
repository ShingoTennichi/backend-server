export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen gap-10">
      <h1 className="text-4xl">Backend Server</h1>
    </main>
  );
}

// * sample async function
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
  // console.log(result);
  return result;
}