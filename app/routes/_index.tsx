import type { MetaFunction } from "@remix-run/node"
import { Button } from "primereact/button"
import { Link } from "@remix-run/react"
import "~/styles/home.css"

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
    <main id="content">
      <h1>A better way to keeping track of your notes</h1>
      <p>Try this and never loose track of your notes again!</p>
      <p id="cta">
        <Link to="/notes">Try now!</Link>
      </p>
      <button
        onClick={() => {
          console.log("clicked")
        }}
      >
        click
      </button>
      <Button label="prime" onClick={handleClick} />
    </main>
  )
}
