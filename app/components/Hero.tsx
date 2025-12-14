import { Button } from "./Button"

export const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4">
        <p className="mt-10 max-w-3xl text-center font-bold text-5xl tracking-normal">Everything You Need to Build Modern Apps</p>

        <p className="max-w-lg my-5 text-center ">
          A curated set of <span className="text-accent-secondary">Reusable components</span> and backend boilerplate designed for real-world projects.
        </p>

        <Button className="text-sm dark:bg-neutral-900  hover:scale-105 duration-300 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] dark:hover:shadow-[0px_0px_120px_0px_#90cdf4]">
            Start Exploring
        </Button>
    </div>
  )
}