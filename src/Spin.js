import { useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';

const Spin = (props) => {
  const spinner = useSelector((state) => state.loadReducer.loading);

  return (
    <div className="loader-styles">
      <Loader type="Oval" color="#07f" height={80} width={80} visible={spinner} />
    </div>
  );
};

export default Spin;
