import { redirect } from "@remix-run/node"
import NewNote from "~/components/NewNote"
import { getStoredNotes, storeNotes } from "~/data/notes"
export default function NotesPage() {
  return (
    <main>
      <NewNote />
    </main>
  )
}
export async function action({ request }: { request: Request }) {
  const formData = await request.formData()
  const noteData = Object.fromEntries(formData)

  const existingNotes = await getStoredNotes()
  noteData.id = new Date().toISOString()
  const updatedNotes = existingNotes.concat(noteData)
  await storeNotes(updatedNotes)
  return redirect("/notes")
}
