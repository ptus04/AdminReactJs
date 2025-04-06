import { useEffect, useState } from "react";

function Dialog({ type, open, onSave, onClose }) {
  const [data, setData] = useState({
    avatar: "",
    customerName: "",
    company: "",
    orderValue: "",
    orderDate: "",
    status: "",
  });

  useEffect(() => {
    open && setData(open);
  }, [open]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((prevData) => ({ ...prevData, [id]: value }));
  };

  return (
    <dialog className="fixed top-0 h-full w-full bg-black/50" open={open}>
      <form
        className="absolute top-[50%] left-[50%] container -translate-[50%] bg-white p-4"
        method="dialog"
        onSubmit={onClose}
      >
        <div className="flex items-center justify-between border-b border-gray-300 pb-2">
          <h5 className="grow text-center text-2xl font-bold text-[var(--my-color-red)]">
            {type === "add" ? "Add" : "Edit"} customer
          </h5>
          <button className="h-8F w-8 cursor-pointer text-center text-2xl">&times;</button>
        </div>

        <div className="mt-4 flex flex-col gap-4">
          <div className="grid w-full grid-cols-[max-content_1fr] gap-4 self-center">
            <label className="font-bold" htmlFor="avatar">
              Avatar:
            </label>
            <input
              className="rounded-sm border px-3 py-1"
              type="text"
              id="avatar"
              value={data?.avatar}
              onChange={handleChange}
            />

            <label className="font-bold" htmlFor="customerName">
              Customer name:
            </label>
            <input
              className="rounded-sm border px-3 py-1"
              type="text"
              id="customerName"
              value={data?.customerName}
              onChange={handleChange}
            />

            <label className="font-bold" htmlFor="company">
              Company:
            </label>
            <input
              className="rounded-sm border px-3 py-1"
              type="text"
              id="company"
              value={data?.company}
              onChange={handleChange}
            />

            <label className="font-bold" htmlFor="orderValue">
              Order value:
            </label>
            <input
              className="rounded-sm border px-3 py-1"
              type="text"
              id="orderValue"
              value={data?.orderValue}
              onChange={handleChange}
            />

            <label className="font-bold" htmlFor="status">
              Select a status:
            </label>
            <select
              className="rounded-sm border px-3 py-1"
              id="status"
              value={data?.status}
              onChange={handleChange}
            >
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
              className="cursor-pointer rounded-sm bg-[var(--my-color-red)] px-4 py-2 text-white"
              onClick={() => onSave(data)}
            >
              {type === "add" ? "Add" : "Save"}
            </button>
          </div>
        </div>
      </form>
    </dialog>
  );
}

export default Dialog;
