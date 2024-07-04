import { redirect } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import NewNote from "~/components/NewNote"
import NoteList from "~/components/NoteList"
import { getStoredNotes, storeNotes } from "~/data/notes"
type NoteType = {
  id: string
  title: string
  content: string
}
export default function NotesPage() {
  const notes = useLoaderData<NoteType[]>()
  return (
    <main>
      <NewNote />
      <NoteList notes={notes} />
    </main>
  )
}

export async function loader() {
  const notes = await getStoredNotes()
  return notes
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
