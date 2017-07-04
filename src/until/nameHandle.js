/**
 * Created by warryy on 16-12-4.
 */


const nameHandle = (str, nameLength) => {
  var n = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) < 128) {
      n++;
    } else {
      n += 2;
    }
  }
  if(n != 0 && n <= nameLength){
    return true;
  }else {
    return false;
  }
};

export default nameHandle;
