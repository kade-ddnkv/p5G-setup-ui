export default function SecondStep({ back, nextStep }: { back: any, nextStep: any }) {
  return (
    <div style={{ height: "50vh" }} className="w-96 rounded-md bg-white relative">
      <div style={{ height: "100vh", width: "100vw", overflow: "hidden" }} className="h-full w-full absolute -z-10">
        <div style={{ height: "100vh", width: "27rem", transform: "rotate(-15deg)", top: "3rem", left: "6rem" }} className="-z-10 h-96 rounded-md bg-gray-300 absolute opacity-30">
        </div>
      </div>
      <div className="-z-10 absolute top-5" style={{ left: "23.2rem" }}>
        <p style={{ fontSize: "21rem", letterSpacing: "-2rem" }} className="strokeme">ii</p>
      </div>
      <div className="px-8 flex items-center justify-between h-full py-12 text-lg flex-col space-y-10">
        <p className="w-full">You can configure Base Stations. <br/>It will be connected later.</p>
        <div className="w-full">
          <button className="w-full border rounded py-1 hover:bg-gray-50">Base Stations manager</button>
          <p className="w-full mt-2 text-gray-500">You can always access it later.</p>
        </div>
        <div className="w-full grid gap-4 grid-cols-2 grid-rows-1">
          {back}
          {nextStep}
        </div>
      </div>
    </div>
  )
}