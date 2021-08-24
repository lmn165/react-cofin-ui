import React from 'react';
import '../css/Login.css';

const Login = () => (
<div>
    <form action="login.php" method="POST">
        <ul>
            <li><label class='login' for="id">아이디</label><input type="text" id="id"/></li>
            <li><label class='login' for="pw">비밀번호</label><input type="password" id="pw"/></li>
            <li><input class='login' type="submit" title="로그인" value="로그인"/></li>
        </ul>
    </form>
</div>
);

export default Login