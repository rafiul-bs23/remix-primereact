import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import './NewNote.css';

function NewNote() {
  return (
    <form method="post" id="note-form">
      <div className="p-field">
        <label htmlFor="title">Title</label>
        <InputText id="title" name="title" required />
      </div>
      <div className="p-field">
        <label htmlFor="content">Content</label>
        <InputTextarea id="content" name="content" rows={5} required />
      </div>
      <div className="form-actions">
        <Button label="Add Note" icon="pi pi-plus" />
      </div>
    </form>
  );
}

export default NewNote;
