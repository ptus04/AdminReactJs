import icons from "../icon-pack";

function EditButton({ data, row, onEdit }) {
  return (
    <button className="h-6 w-6 cursor-pointer" onClick={() => onEdit(row)}>
      <img className="h-6 w-6" src={icons.editIcon} />
    </button>
  );
}

export default EditButton;
