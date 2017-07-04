/**
 * Created by stonehx on 16-11-17.
 */

var   apiHost="http://api.wall.qoder.cn";
const apiMaker=(path)=>{
  return `${apiHost}${path}`;
};


const api={
  login:apiMaker("/auth/login"),
  register:apiMaker("/auth/register"),
  reSendEmail:apiMaker("/auth/reSendEmail"),
  forgetPass:apiMaker("/auth/forgetPass"),
  password:apiMaker("/user/password"),
  userInfo:apiMaker("/user/info"),
  resetPass:apiMaker("/auth/resetPass")

};

export default api;


