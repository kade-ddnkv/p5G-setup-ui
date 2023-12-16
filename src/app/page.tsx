import InitialBox from "./components/initial";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <InitialBox />
      <div className="h-96 w-96 rounded-md bg-white relative">
        <div className="-z-10 h-96 w-96 rounded-md bg-gray-300 absolute top-40 left-5 opacity-30">
        </div>
        <div className="flex items-center py-8 text-lg flex-col">
          <p className="font-bold">5G Core installation wizard</p>
          <div className="flex py-8 flex-col space-y-2 px-8">
            <p className="text-gray-500">PLMN</p>
            <div className="grid gap-1 grid-cols-2 grid-rows-1 pt-2">
              <p>MCC</p>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="283"></input>
              <p>MNC</p>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="999"></input>
            </div>
          </div>
        </div>
      </div>
      <InitialBox />
    </main>
  )
}