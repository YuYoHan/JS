let id = document.querySelector("#id");
let pw = document.querySelector("#pw");
let btn = document.querySelector("#btn");
let click = 0;

btn.addEventListener("click", () => {
    if (id.value == "zxzz45") {
        if (pw.value == "zxzz12") {
            alert("로그인 되었습니다.");
            // main.html로 가지게 한다.
            location.href = "main.html";
        } else if (pw.value == "") {
            check();
            alert("비밀번호가 공백입니다.");
        } else {
            check();
            alert("비밀번호가 틀렸습니다.");
        }
    } else if (id.value == "" || id.value != "zxzz45") {
        check();
        alert("존재하지 않는 아이디입니다.");
    }

    if (click >= 5) {
        alert("비밀번호를 5회 이상 틀리셨습니다.");
    }
});

function check() {
    label = id.nextElementSibling;
    label.classList.add("warning");
    setTimeout(() => {
        label.classList.remove("warning");
    }, 1500);
    click++;
}
