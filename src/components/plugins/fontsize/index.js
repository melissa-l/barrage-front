/**
 *
 * Created by melissa on 16-11-18.
 */
import React,{Component} from 'react';
import './index.styl';

class Colors extends Component{
  render() {
    let colors = ['#FFFFF0', '#FFFF00','#FFA500',
      '#FFB6C1','#B22222','#008000',
      '#4682B4','#00008B','#000000',];
    colors = colors.map((color)=> {
      return (
        <ul>
          <li style={{background: color}}></li>
        </ul>
      )
    });
    return (
      <ul className="color-list">
        {colors}
      </ul>
    )
  }
}

export default Colors;
