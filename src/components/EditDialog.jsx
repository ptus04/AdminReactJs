import { useEffect, useRef } from "react";

function EditDialog({ open, onSave, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {    
    dialogRef.current.value = open?.status;
  }, [open]);

  return (
    <dialog className="absolute top-0 h-full w-full bg-black/50" open={open}>
      <form
        className="absolute top-[50%] left-[50%] container -translate-[50%] bg-white p-4"
        method="dialog"
        onSubmit={onClose}
      >
        <div className="flex items-center justify-between border-b border-gray-300 pb-2">
          <h5 className="grow text-center text-2xl font-bold text-[var(--my-color-red)]">
            Change status
          </h5>
          <div>
            <button className="h-8F w-8 cursor-pointer text-center text-2xl">&times;</button>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-4">
          <div className="flex items-center gap-4 self-center py-4">
            <label className="font-bold" htmlFor="status">
              Select a status:
            </label>
            <select ref={dialogRef} className="rounded-md border px-3 py-1" name="status">
              <option value="New">New</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div className="flex items-center justify-between border-t border-gray-300 pt-4">
            <button className="cursor-pointer rounded-md border border-[var(--my-color-red)] px-4 py-2 text-[var(--my-color-red)]">
              Cancel
            </button>
            <button
              className="cursor-pointer rounded-md bg-[var(--my-color-red)] px-4 py-2 text-white"
              onClick={() => onSave(dialogRef.current.value)}
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </dialog>
  );
}

export default EditDialog;
