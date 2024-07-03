import type { MetaFunction } from "@remix-run/node"
import { Button } from "primereact/button"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function Index() {
  const handleClick = () => {
    console.log("hello from prime")
  }
  return (
    <>
      <h1>hello from remix</h1>
      <button
        onClick={() => {
          console.log("clicked")
        }}
      >
        click
      </button>
      <Button label="prime" onClick={handleClick} />
    </>
  )
}
