import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Backend Server</h1>
      </div>
      {/* <div className="min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold">Applications</h2>
        <ul>
          <li>
            <Image src="/StockCharts.jpg" alt="Stock Carts" width="200" height="200" className="rounded-lg"></Image>
          </li>
        </ul>
      </div> */}
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