import { Button } from "./Button"

export const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4">
        <p className="my-10 max-w-3xl text-center font-bold text-5xl tracking-normal">Get the Boiler Plate code  and use <span className="text-chart-3">Components</span> to build amazing applications</p>

        <Button className="text-sm dark:bg-neutral-900 bg-neutral-100">
            Go Through
        </Button>
    </div>
  )
}