import React from 'react';
import img from './img/pf.png';

const OnlineProfile = () => (
<div>
    <figure>
		<img src={img} alt=""/>
		<figcaption>오늘은 남은 인생이 시작되는 첫째날</figcaption>
	</figure>
    <h1>Sangho Lee</h1>
    <p>이메일 : lmn165@naver.com</p>
    <h2>Who I am?</h2>
    <p>현재 자바와 파이썬을 배우고 있습니다.<br/>
    롱런하는 개발자를 꿈꾸고 있습니다.</p>
    <p><a href="https://github.com/lmn165?tab=repositories" target="_blank">GitHub</a></p>
    <hr/>
    <h2>Skills</h2>
    <ul>
        <li>사용 언어
            <ul>
                <li><mark>JAVA</mark></li>
                <li><mark>Python</mark></li>
                <li>MongoDB</li>
                <li>MySQL</li>
            </ul>
        </li>
        <li>사용 툴
            <ul>
                <li>Postman</li>
                <li>VisualCode</li>
                <li>HidiSQL</li>
                <li>Compass</li>
                <li><b>GitHub</b></li>
                <li><b>Docker</b></li>
                <li><b>IntelliJ</b></li>
                <li><b>PyCharm</b></li>
            </ul>
        </li>
    </ul>
    <h2>Academic</h2>
    <ul>
        <li>사용 언어
            <ul>
                <li><mark>HTML</mark></li>
                <li><mark>CSS</mark></li>
                <li>JAVA</li>
                <li>Javascript</li>
                <li>Jquery</li>
                <li>Oracle</li>
                <li>C++</li>
                <li>WPF</li>
            </ul>
        </li>
        <li>사용 툴
            <ul>
                <li>Eclipse(5years)</li>
                <li>Spring FrameWork(5years)</li>
                <li>Sql Developer(5years)</li>
                <li><b>Visual Studio(1year)</b></li>
            </ul>
        </li>
    </ul>
    <h2>Academic</h2>
    <table>
        <caption>학력 사항</caption>
        <thead>
            <tr>
                <th>출신학교</th>
                <th>전공</th>
                <th>졸업구분</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>ㅇㄱ고등학교</td>
                <td> (해당사항 없음)</td>
                <td>졸업</td>
            </tr>
            <tr>
                <td>ㄱㅇ대학교</td>
                <td>컴퓨터공학과</td>
                <td>졸업</td>
            </tr>
        </tbody>
    </table>    
</div>
);

export default OnlineProfile