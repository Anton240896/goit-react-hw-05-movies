import { useState } from 'react';
import { SearchForm, Input, Button } from './Form.styled';

const Form = ({ searchMovies }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
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
      <Button type="submit">Search</Button>
    </SearchForm>
  );
};

export default Form;
