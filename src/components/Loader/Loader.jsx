import { MutatingDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <MutatingDots
      height="80"
      width="80"
      radius="9"
      color="yellowgreen"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
};

export default Loader;
