/**
 *
 * @param {{[key: string]: string, color: "blue" | "red"}} param0
 * @returns
 */
export default function OverviewCard({ name, value, change, buttonIcon, color = "red" }) {
  return (
    <div
      className={`card relative w-1/3 rounded-lg ${color === "blue" ? "bg-[var(--my-color-blue-dim)]" : "bg-[var(--my-color-red-dim)]"} p-4`}
    >
      <h4 className="text-xl font-bold">{name}</h4>
      <p className="text-3xl font-bold">{value}</p>
      <p>
        <span className="font-bold text-green-600">{change}</span>
        <span> period of change</span>
      </p>
      <button
        className={`absolute top-4 right-4 cursor-pointer rounded-md border p-1 ${color === "blue" ? "border-[var(--my-color-blue)]" : "border-[var(--my-color-red)]"}`}
      >
        <img className="h-6 w-6" src={buttonIcon} />
      </button>
    </div>
  );
}
