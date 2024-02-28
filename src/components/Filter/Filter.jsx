import { useDispatch } from 'react-redux';
import { updateFilterAction } from 'store/slices/filter/slice';

export const Filter = () => {
  const dispatch = useDispatch();

  function handleSearch(e) {
    const searchName = e.target.value;
    dispatch(updateFilterAction(searchName));
  }

  return (
    <div>
      <h3>Find contacts by name</h3>
      <input type="text" onChange={handleSearch} placeholder={'Enter name'} />
    </div>
  );
};
