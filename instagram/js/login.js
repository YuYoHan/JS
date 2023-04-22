//조건을 만족할 때만 클릭시 버튼색 변경
const btn = document.querySelector(".btnLogin");
btn.addEventListener("click",function(e){
    const inputId = document.querySelector('#userId').value;
    const inputPw = document.querySelector('#userPw').value;
    if(inputId.includes('@') && inputPw.length > 4){
        alert("환영합니다.")
        document.querySelector(".btnLogin").style.background = "rgb(46, 184, 223)";
        // location.href="main.html";
    }else{
        alert("잘못된 양식입니다.");
        document.querySelector(".btnLogin").style.background= "default";    
    }
    return false;
});

// document.querySelector(".btn").addEventListener("click", () => {
//   const id = "dbekdms147@naver.com";
//   const password = "1234567";

//   if(id == document.querySelector("#userId").value) {
//       if(password == document.querySelector("#userPw").value) {
//           alert("환영합니다!");
//           location.href = "main.html"; //
//       }
//       else {
//           alert("비밀번호가 맞지 않습니다.");
//       }
//   }
//   else {
//       alert("아이디 혹은 비밀번호가 맞지 않습니다.");
//   }
// });