import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterValue } from '../../redux/operations';

const Filter = () => {
  const filterValue = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { value } = event.target;
    dispatch(setFilterValue(value));
  };

  return (
    <div className="section">
      <h2 className="section__title">Contacts</h2>
      <label className="filter__label">Find contacts by name</label>
      <input
        className="form__input"
        type="text"
        value={filterValue}
        onChange={handleChange}
        name="filter"
      />
    </div>
  );
};

export default Filter;
