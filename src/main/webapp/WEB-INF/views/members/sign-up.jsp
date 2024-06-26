<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %> 
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Insert title here</title>

    <%@ include file="../include/static-head.jsp" %>

    <!-- 외부 스타일시트 링크 추가 -->
    <link rel="stylesheet" href="/assets/css/member.css" />
  </head>

  <body>
    <%@ include file="../include/header.jsp" %>

    <div class="container wrap">
      <div class="row">
        <div class="offset-md-2 col-md-4">
          <div class="card">
            <div class="card-header text-white">
              <h2><span class="text-gray">MVC</span> 회원 가입</h2>
            </div>
            <div class="card-body">
              <form
                action="/members/sign-up"
                name="signup"
                id="signUpForm"
                method="post"
              >
                <table class="table">
                  <tr>
                    <td class="text-left">
                      <p>
                        <strong>아이디를 입력해주세요.</strong
                        >&nbsp;&nbsp;&nbsp;
                        <span id="idChk"></span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="text"
                        name="account"
                        id="user_id"
                        class="form-control tooltipstered"
                        maxlength="14"
                        required="required"
                        aria-required="true"
                        placeholder="숫자와 영어로 4-14자"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td class="text-left">
                      <p>
                        <strong>비밀번호를 입력해주세요.</strong
                        >&nbsp;&nbsp;&nbsp;<span id="pwChk"></span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="password"
                        size="17"
                        maxlength="20"
                        id="password"
                        name="password"
                        class="form-control tooltipstered"
                        required="required"
                        aria-required="true"
                        placeholder="영문과 특수문자를 포함한 최소 8자"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td class="text-left">
                      <p>
                        <strong>비밀번호를 재확인해주세요.</strong
                        >&nbsp;&nbsp;&nbsp;<span id="pwChk2"></span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="password"
                        size="17"
                        maxlength="20"
                        id="password_check"
                        name="pw_check"
                        class="form-control tooltipstered"
                        required="required"
                        aria-required="true"
                        placeholder="비밀번호가 일치해야합니다."
                      />
                    </td>
                  </tr>
                  <tr>
                    <td class="text-left">
                      <p>
                        <strong>이름을 입력해주세요.</strong
                        >&nbsp;&nbsp;&nbsp;<span id="nameChk"></span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="text"
                        name="name"
                        id="user_name"
                        class="form-control tooltipstered"
                        maxlength="6"
                        required="required"
                        aria-required="true"
                        placeholder="한글로 최대 6자"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td class="text-left">
                      <p>
                        <strong>이메일을 입력해주세요.</strong
                        >&nbsp;&nbsp;&nbsp;<span id="emailChk"></span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="email"
                        name="email"
                        id="user_email"
                        class="form-control tooltipstered"
                        required="required"
                        aria-required="true"
                        placeholder="ex) abc@mvc.com"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td class="text-center">
                      <p>
                        <strong
                          >회원가입하셔서 더 많은 서비스를 사용하세요~~!</strong
                        >
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-center" colspan="2">
                      <input
                        type="button"
                        value="회원가입"
                        class="btn form-control tooltipstered"
                        id="signup-btn"
                      />
                    </td>
                  </tr>
                </table>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script
      type="module"
      src="/assets/js/signUp.js"
    ></script>
  </body>
</html>