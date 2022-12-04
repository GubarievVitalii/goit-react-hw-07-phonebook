import { useDispatch, useSelector } from 'react-redux';
import {
  getFilter,
  filterContacts,
  сlearFilter,
} from '../../redux/contactsSlice';
import sprite from '../../images/symbol-defs.svg';
import s from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const onFilterContact = event => {
    dispatch(filterContacts(event.target.value.toLowerCase()));
  };
  const onСlearFilter = event => {
    dispatch(сlearFilter());
  };

  return (
    <div>
      <p className={s.text}>Find contacts by name</p>
      <div className={s.filter}>
        <input
          className={s.input}
          type="text"
          name="filter"
          value={filter}
          onChange={onFilterContact}
        />
        {filter && (
          <button className={s.btn} onClick={onСlearFilter}>
            <svg className={s.btn_svg} width="10" height="10">
              <use href={`${sprite}#icon-close`}></use>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Filter;
