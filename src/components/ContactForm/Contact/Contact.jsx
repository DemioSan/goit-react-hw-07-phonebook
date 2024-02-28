import { useDispatch } from 'react-redux';
import { deleteContact } from 'store/operations';

export const Contact = props => {
  const dispatch = useDispatch();

  function handleDelete(e) {
    const idToDelete = Number(e.target.attributes.dataid.value);

    dispatch(deleteContact(idToDelete));
  }

  return (
    <li>
      <p>{props.name}: </p>
      <p>{props.number}</p>
      <button dataid={props.dataid} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};
