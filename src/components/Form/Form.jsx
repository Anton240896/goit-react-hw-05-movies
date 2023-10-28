import { useSearchParams } from 'react-router-dom';
import { SearchForm, Input } from './Form.styled';
import { BiSearchAlt2 } from 'react-icons/bi';

const Form = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('name') ?? '';

  const visibleProducts = products.filter(product =>
    product.name.toLowerCase().includes(productName.toLowerCase())
  );

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input
        name={productName}
        type="text"
        value={query}
        autoFocus
        onChange={updateQueryString}
      />
      <BiSearchAlt2
        size={40}
        style={{ cursor: 'pointer' }}
        type="submit"
        onClick={visibleProducts}
      />
    </SearchForm>
  );
};

export default Form;
