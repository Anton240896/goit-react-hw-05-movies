import { FormBox, Input } from './Form.styled';
import toast from 'react-hot-toast';

const Form = ({ submitAction, startInputText }) => {
  const onFormSubmit = evt => {
    evt.preventDefault();
    const inputValue = evt.target.elements.query.value.trim();
    if (!inputValue) {
      return toast.error('Sorry we didnt find anything');
    }
    submitAction(inputValue);
  };

  return (
    <FormBox onSubmit={onFormSubmit}>
      <Input
        defaultValue={startInputText}
        name="query"
        type="text"
        autoComplete="off"
        placeholder="Search films"
      />
    </FormBox>
  );
};

export default Form;
