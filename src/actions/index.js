/**
 * Created by yjf on 16-11-28.
 */
import fetch from 'isomorphic-fetch';
import codeHandler from '../until/codeHandler';

Host='http://10.17.0.147:9000/';

export function forgetPass(email) {
  return dispatch=> {
    fetch(`${Host}auth/forgetPass`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email:email
      })
    }).then(
      response=>{
        return response.json()
      })
      .then(
        json=> {
          if(json.code===0){
            console.log('发送成功');
          }else{
            codeHandler(json.code);
          }
        }
      )
  }
}
