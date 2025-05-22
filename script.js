function signup() {
  const id = document.getElementById('signup-id').value;
  const pw = document.getElementById('signup-password').value;

  if (!id || !pw) {
    alert('아이디와 비밀번호를 모두 입력하세요.');
    return;
  }

  const users = JSON.parse(localStorage.getItem('users') || '{}');

  if (users[id]) {
    alert('이미 존재하는 아이디입니다.');
    return;
  }

  users[id] = pw;
  localStorage.setItem('users', JSON.stringify(users));
  alert('회원가입이 완료되었습니다.');
}

function login() {
  const id = document.getElementById('login-id').value;
  const pw = document.getElementById('login-password').value;

  const users = JSON.parse(localStorage.getItem('users') || '{}');

  if (users[id] && users[id] === pw) {
    localStorage.setItem('loggedInUser', id);
    window.location.href = 'welcome.html';
  } else {
    alert('아이디 또는 비밀번호가 올바르지 않습니다.');
  }
}
