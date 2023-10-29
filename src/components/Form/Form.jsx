import { Form, Input } from './Form.styled';
import { BiSearchAlt2 } from 'react-icons/bi';

const Form = ({ submitAction, startInputText }) => {
  const onFormSubmit = evt => {
    evt.preventDefault();
    const inputValue = evt.target.elements.query.value.trim();
    if (!inputValue) return;
    submitAction(inputValue);
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <Input
        defaultValue={startInputText}
        name="query"
        type="text"
        autoComplete="off"
        placeholder="Search films"
      />

      <BiSearchAlt2
        size={40}
        style={{ cursor: 'pointer' }}
        type="submit"
        // onClick={inputValue}
      />
    </SearchForm>
  );
};

export default Form;
