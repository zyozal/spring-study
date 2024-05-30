/*
// 회원가입 입력 검증 처리

// 계정 입력 검증
const $idInput = document.getElementById('user_id');
let idFlag = false;

const $pwInput = document.getElementById('password');
let pwFlag = false;

const $pwInput2 = document.getElementById('password_check');
let pwFlag2 = false;

const $nameInput = document.getElementById('user_name');
let nameFlag = false;

const $emailInput = document.getElementById('user_email');
let emailFlag = false;

// 계정 중복검사 비동기 요청 보내기
async function fetchDuplicateCheck(idValue) {

  const res = await fetch(`http://localhost:8383/members/check?type=account&keyword=${idValue}`);
  const flag = await res.json();

  idFlag = flag;
}

async function fetchDuplicateCheck(pwValue) {

  const res = await fetch(`http://localhost:8383/members/check?type=account&keyword=${pwValue}`);
  const flag = await res.json();

  pwFlag = flag;
}

async function fetchDuplicateCheck(pwValue2) {

  const res = await fetch(`http://localhost:8383/members/check?type=account&keyword=${pwValue2}`);
  const flag = await res.json();

  pwFlag2 = flag;
}

async function fetchDuplicateCheck(nameValue) {

  const res = await fetch(`http://localhost:8383/members/check?type=account&keyword=${nameValue}`);
  const flag = await res.json();

  nameFlag = flag;
}

async function fetchDuplicateCheck(emailValue) {

  const res = await fetch(`http://localhost:8383/members/check?type=account&keyword=${emailValue}`);
  const flag = await res.json();

  emailFlag = flag;
}


$idInput.addEventListener('keyup', async (e) => {

  // 아이디 검사 정규표현식
  const accountPattern = /^[a-zA-Z0-9]{4,14}$/;

  // 입력값 읽어오기
  const idValue = $idInput.value;
  // console.log(idValue);

  // 검증 메시지를 입력할 span
  const $idChk = document.getElementById('idChk');

  if (idValue.trim() === '') {
    $idInput.style.borderColor = 'red';
    $idChk.innerHTML = '<b class="warning">[아이디는 필수값입니다.]</b>';
  } else if (!accountPattern.test(idValue)) {
    $idInput.style.borderColor = 'red';
    $idChk.innerHTML = '<b class="warning">[아이디는 4~14글자 사이 영문,숫자로 입력하세요]</b>';
  } else {

    // 아이디 중복검사
    await fetchDuplicateCheck(idValue);

    if (idFlag) {
      $idInput.style.borderColor = 'red';
      $idChk.innerHTML = '<b class="warning">[아이디가 중복되었습니다. 다른 아이디를 사용하세요!]</b>';
    } else {
      $idInput.style.borderColor = 'skyblue';
      $idChk.innerHTML = '<b class="success">[사용가능한 아이디입니다.]</b>';
    }
  }

});

$pwInput.addEventListener('keyup', async (e) => {

 // 패스워드 검사 정규표현식
const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*?_~])[A-Za-z\d!@#$%^&*?_~]{8,}$/;

  // 입력값 읽어오기
  const pwValue = $pwInput.value;
  // console.log(idValue);

  // 검증 메시지를 입력할 span
  const $pwChk = document.getElementById('pwChk');

  if (pwValue.trim() === '') {
    $pwInput.style.borderColor = 'red';
    $pwChk.innerHTML = '<b class="warning">[비밀번호는 필수값입니다.]</b>';
  } else if (!passwordPattern.test(pwValue)) {
    $pwInput.style.borderColor = 'red';
    $pwChk.innerHTML = '<b class="warning">[비밀번호는 영문과 특수문자를 포함한 최소 8자 입력하세요]</b>';
  } else {
      $pwInput.style.borderColor = 'skyblue';
      $pwChk.innerHTML = '<b class="success">[사용가능한 비밀번호입니다.]</b>';
  }

});


$pwInput2.addEventListener('keyup', async (e) => {

  // 패스워드 검사 정규표현식
const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*?_~])[A-Za-z\d!@#$%^&*?_~]{8,}$/;
 
   // 입력값 읽어오기
   const pwValue2 = $pwInput2.value;
   // console.log(idValue);
 
   // 검증 메시지를 입력할 span
   const $pwChk2 = document.getElementById('pwChk2');
 
   if (pwValue2.trim() === '') {
     $pwInput2.style.borderColor = 'red';
     $pwChk2.innerHTML = '<b class="warning">[비밀번호가 일치해야합니다.]</b>';
   } else if (!passwordPattern.test(pwValue2)) {
     $pwInput2.style.borderColor = 'red';
     $pwChk2.innerHTML = '<b class="warning">[비밀번호는 영문과 특수문자를 포함한 최소 8자 입력하세요]</b>';
   } else {
       $pwInput2.style.borderColor = 'skyblue';
       $pwChk2.innerHTML = '<b class="success">[비밀번호가 일치합니다.]</b>';
   }
 
 });

 $nameInput.addEventListener('keyup', async (e) => {

    // 이름 검사 정규표현식
    const namePattern = /^[가-힣]+$/;
 
   // 입력값 읽어오기
   const nameValue = $nameInput.value;
   // console.log(idValue);
 
   // 검증 메시지를 입력할 span
   const $nameChk = document.getElementById('nameChk');
 
   if (nameValue.trim() === '') {
     $nameInput.style.borderColor = 'red';
     $nameChk.innerHTML = '<b class="warning">[이름은 필수값입니다.]</b>';
   } else if (!namePattern.test(nameValue)) {
     $nameInput.style.borderColor = 'red';
     $nameChk.innerHTML = '<b class="warning">[한글로 최대 6자 입력하세요]</b>';
   } else {
       $nameInput.style.borderColor = 'skyblue';
       $nameChk.innerHTML = '<b class="success">[사용가능합니다.]</b>';
   }
 
 });

 $emailInput.addEventListener('keyup', async (e) => {

  // 이메일 검사 정규표현식
  const emailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

 // 입력값 읽어오기
 const emailValue = $emailInput.value;
 // console.log(idValue);

 // 검증 메시지를 입력할 span
 const $emailChk = document.getElementById('emailChk');

 if (emailValue.trim() === '') {
   $emailInput.style.borderColor = 'red';
   $emailChk.innerHTML = '<b class="warning">[이메일은 필수값입니다.]</b>';
 } else if (!emailPattern.test(emailValue)) {
   $emailInput.style.borderColor = 'red';
   $emailChk.innerHTML = '<b class="warning">[ex) abc@mvc.com]</b>';
 } else {
     $emailInput.style.borderColor = 'skyblue';
     $emailChk.innerHTML = '<b class="success">[사용가능합니다.]</b>';
 }

});

*/





// 서버에 중복확인 비동기 요청
export const checkAvailability = async (type, keyword) => {
  const response = await fetch(`http://localhost:8383/members/check?type=${type}&keyword=${keyword}`);
  const flag = await response.json();
  return !flag;
};


// 유효성 검증에 사용될 정규표현식 패턴들 정의

// 아이디 패턴: 영문 대소문자와 숫자, 4~14글자
const accountPattern = /^[a-zA-Z0-9]{4,14}$/;

// 비밀번호 패턴: 반드시 영문, 숫자, 특수문자를 포함하여 8자 이상
const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*?_~])[A-Za-z\d!@#$%^&*?_~]{8,}$/;

// 이름 패턴: 한글만 허용
const namePattern = /^[가-힣]+$/;

// 이메일 패턴: 기본적인 이메일 형식
const emailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

export const validateInput = {
  // 아이디 유효성 검사 함수
  account: async (value) => {
    // 빈 값 검사
    if (!value.trim()) return { valid: false, message: '아이디는 필수값입니다!' };
    // 정규표현식 검사
    if (!accountPattern.test(value)) return { valid: false, message: '아이디는 4~14글자의 영문,숫자로 입력하세요.' };
    // 중복 검사
    const isAvailable = await checkAvailability('account', value);
    // 중복 여부에 따라 결과 반환
    return isAvailable ? { valid: true } : { valid: false, message: '아이디가 중복되었습니다.' };
  },
  // 비밀번호 유효성 검사 함수
  password: (value) => {
    // 빈 값 검사
    if (!value.trim()) return { valid: false, message: '비밀번호는 필수값입니다!' };
    // 정규표현식 검사
    if (!passwordPattern.test(value)) return { valid: false, message: '비밀번호는 영문, 숫자, 특수문자를 포함하여 8자 이상이어야 합니다!' };
    // 유효한 경우
    
    return { valid: true };
  },
  // 비밀번호 확인 유효성 검사 함수
  passwordCheck: (value, password) => {
    // 빈 값 검사
    if (!value.trim()) return { valid: false, message: '비밀번호 확인란은 필수값입니다!' };
    // 비밀번호 일치 여부 검사
    if (value !== password) return { valid: false, message: '비밀번호가 일치하지 않습니다!' };
    // 유효한 경우
    return { valid: true };
  },
  // 이름 유효성 검사 함수
  name: (value) => {
    // 빈 값 검사
    if (!value.trim()) return { valid: false, message: '이름은 필수정보입니다!' };
    // 정규표현식 검사
    if (!namePattern.test(value)) return { valid: false, message: '이름은 한글로 입력해주세요.' };
    // 유효한 경우
    return { valid: true };
  },
  // 이메일 유효성 검사 함수
  email: async (value) => {
    // 빈 값 검사
    if (!value.trim()) return { valid: false, message: '이메일은 필수값입니다!' };
    // 정규표현식 검사
    if (!emailPattern.test(value)) return { valid: false, message: '이메일 형식을 지켜주세요.' };
    // 중복 검사
    const isAvailable = await checkAvailability('email', value);
    // 중복 여부에 따라 결과 반환
    return isAvailable ? { valid: true } : { valid: false, message: '이메일이 중복되었습니다.' };
  }
};
