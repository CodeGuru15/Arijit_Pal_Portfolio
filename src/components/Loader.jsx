import { Bars } from "react-loader-spinner";

const Loader = () => {
  return (
    <Bars
      height="30"
      width="40"
      color="#4fa94d"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
