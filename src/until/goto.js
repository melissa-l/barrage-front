import {browserHistory} from 'react-router';
export  default function goto(path) {
  if (path) {
    browserHistory.push(path);
  } else {
    throw new Error(' cannot find path!');
  }
}
