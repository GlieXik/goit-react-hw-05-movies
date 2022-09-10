import { TailSpin } from "react-loader-spinner";
import { Box } from "../../utils/Box";
export const Loader = () => {
  return (
    <Box mt={4} display="flex" justifyContent="center">
      <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Box>
  );
};
