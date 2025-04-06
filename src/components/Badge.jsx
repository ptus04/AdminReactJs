function Badge({ status }) {
  const statusClasses = {
    new: "bg-green-200 text-green-600",
    inprogress: "bg-red-200 text-red-600",
    completed: "bg-yellow-200 text-yellow-600",
  };

  return (
    <span
      className={`rounded-full px-2 py-1 text-xs font-bold text-nowrap ${statusClasses[status.toLowerCase().replace(" ", "")]}`}
    >
      {status}
    </span>
  );
}

export default Badge;
