function openclose() {
    // id가 post-box인 박스의 css 항목 중 display 값을 가지고 온다.
    // 그 값을 status에 할당
    let status = $("#post-box").css("display");

    if (status == "block") {
        // 다음 id의 박스를 감추기
        $("#post-box").hide();
        // 다음 id의 text를 다음 문구로 바꾸기
        $("#btn-posting-box").text("포스팅박스 열기");
    } else {
        // 해당 박스를 보이기
        $("#post-box").show();
        $("#btn-posting-box").text("포스팅박스 닫기");
    }
}
