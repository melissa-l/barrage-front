/**
 * Created by stonehx on 16-10-10.
 */
const Regex={
  email:/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
  passwd:/^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,22}$/,
  nameLength:16
};

export default Regex;
