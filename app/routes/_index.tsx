import type { MetaFunction } from "@remix-run/node"
import { Button } from "primereact/button"
import "~/styles/home.css"
import { useNavigate } from "@remix-run/react"

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css'; 

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function Index() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/notes");
  }
  return (
    <main id="content">
      <h1>A better way to keeping track of your notes</h1>
      <p>Try this and never loose track of your notes again!</p>
      <Button label="Try Now!" onClick={handleClick} />
    </main>
  )
}
