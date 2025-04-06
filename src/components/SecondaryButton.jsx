/**
 *
 * @param {{children: ReactNode, onClick: () => void, icon: string, color?: string, className: string}} param0
 * @returns {JSX.Element}
 */
export default function SecondaryButton({ children, onClick, icon, color = "red", className }) {
  return (
    <button
      className={`flex cursor-pointer items-center rounded-sm border ${color === "red" ? "border-[var(--my-color-red)]" : "border-[var(--my-color-blue)]"} px-3 py-1 ${color === "red" ? "text-[var(--my-color-red)]" : "text-[var(--my-color-blue)]"}`}
      onClick={onClick}
    >
      <img className={`img-primary h-6 w-6 ${className}`} src={icon} alt="icon" />
      <span>{children}</span>
    </button>
  );
}
