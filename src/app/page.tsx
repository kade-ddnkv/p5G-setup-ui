import InitialBox from "./components/initial";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <InitialBox />
      <div className="w-96 rounded-md bg-white relative">
        <div className="-z-10 h-96 w-96 rounded-md bg-gray-300 absolute top-40 left-5 opacity-30">
        </div>
        <div className="flex items-center pb-10 pt-12 text-lg flex-col">
          <p className="font-bold">5G Core installation wizard</p>
          <div className="flex pb-6 pt-12 flex-col space-y-2 px-8">
            <p className="text-gray-500">PLMN</p>
            <div className="grid gap-1 grid-cols-2 grid-rows-1 pt-2 items-center">
              <p>MCC</p>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="283"></input>
              <p>MNC</p>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="999"></input>
            </div>
            <p className="text-gray-500 pt-8">INTERNET<br/>ACCESS</p>
            <div className="grid gap-1 grid-cols-2 grid-rows-1 pt-2 items-center">
              <p>DNS Server</p>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="8.8.8.8" value="8.8.8.8"></input>
              <p>Connection Type</p>
              <div className="relative">
                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-1 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                  <option>PPPoE</option>
                  <option>DHCP</option>
                  <option>Static IP</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
            <div className="flex space-x-4 justify-end pt-12">
              <button className="border rounded w-full py-1 px-3 hover:bg-gray-50 text-gray-500">Back</button>
              <button className="border border-gray-300 rounded w-full py-1 px-3 hover:bg-gray-50">Next step</button>
            </div>
          </div>
        </div>
      </div>
      <InitialBox />
    </main>
  )
}