import { FormContainer, Input } from './Form.styled';
import toast from 'react-hot-toast';

const Form = ({ submitQuery }) => {
  const onFormSubmit = evt => {
    evt.preventDefault();
    const inputValue = evt.target.elements.query.value.trim();
    if (!inputValue) {
      return toast.error('Enter request');
    }
    submitQuery(inputValue);
  };

  /*   ====== RENDER ======*/
  return (
    <FormContainer onSubmit={onFormSubmit}>
      <Input
        name="query"
        type="text"
        autoComplete="off"
        placeholder="Search films..."
      />
    </FormContainer>
  );
};

export default Form;
