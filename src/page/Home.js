import React from 'react';
import title from '../assets/imgs/title.jpg'
import drawing from '../assets/imgs/drawing.gif'
import goBackBtn from '../assets/imgs/goBackBtn.jpg'
import recordBtn from '../assets/imgs/recordBtn.jpg'
import shareBtn from '../assets/imgs/shareBtn.jpg'
import limitHead from '../assets/imgs/limitHead.png'
import limitEnd from '../assets/imgs/limitEnd.png'



export const Home = ()=> {

  return (
    <div className='container'>
      <div className='mainWrapper'>
        <img src={title} alt="限時搶紅包，百萬大放送"/>
        <img src={drawing} alt="drawing button"/>
      </div>
      <div className='limitWrapper'>
        <div className='limitInner'>
          <div>
            <p>本時段已搶 <strong>1,111</strong>名</p>
            <p>本時段限 1,111 名</p>
            <button>
              <i class="far fa-bell"></i>
              <span>開搶提醒</span>
            </button>
          </div>
        </div>
      </div>
      <div className='btnGroup'>
        <img src={goBackBtn} alt="Go back button"/>
        <img src={recordBtn} alt="Checking record"/>
        <img src={shareBtn} alt="Sharing button"/>
      </div>
      <div className='timeSectionWrap'>
        <img src={limitHead} alt="timeSectionBegin"/>
        <div className='timeSection'>
          <table>
            <thead>
              <tr>
                <th>時段</th>
                <th>名額</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>09:11、10:11、11:11</td>
                <td>3,500名</td>
              </tr>
              <tr>
                <td>09:11、10:11、11:11</td>
                <td>3,500名</td>
              </tr>
              <tr>
                <td>09:11、10:11、11:11</td>
                <td>3,500名</td>
              </tr>
              <tr>
                <td>09:11、10:11、11:11</td>
                <td>3,500名</td>
              </tr>
            </tbody>
          </table>
        </div>
        <img src={limitEnd} alt="timeSectionEnd"/>
      </div>
    </div>
  );
}

