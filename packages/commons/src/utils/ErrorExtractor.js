const extractError = (res) => {
  if(res?.data?.message && res?.data?.errorCode && res?.data?.errorType){
    return res?.data;
  } else if(res?.data?.message) {
    return res?.data;
  }
};

export default extractError;
