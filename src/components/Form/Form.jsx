import { useState } from 'react';
import { SearchForm, Input } from './Form.styled';
import { BiSearchAlt2 } from 'react-icons/bi';

const Form = ({ searchMovies }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = evt => {
    setQuery(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    searchMovies(query.toLowerCase());
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input
        name="query"
        type="text"
        value={query}
        autoFocus
        onChange={handleInputChange}
      />
      <BiSearchAlt2
        size={40}
        style={{ cursor: 'pointer' }}
        type="submit"
        onClick={searchMovies}
      />
    </SearchForm>
  );
};

export default Form;
