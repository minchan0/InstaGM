document.addEventListener("DOMContentLoaded", (e) => {

    let icn = document.querySelector("#fa-cog");
    
    icn.addEventListener("mouseover", (e) => {
        e.target.setAttribute("class", "far fa-cog fa-spin");
    });
    icn.addEventListener("mouseout", (e) => {
        e.target.setAttribute("class", "far fa-cog");
    });

    let idText = document.querySelector("#id span");

    icn.addEventListener("click", (e) => {
        idText.textContent = prompt("새로운 아이디를 입력하세요");
    });

    let profileEditButton = document.querySelector("#profile_info button");
    let userInfo = document.querySelector("#user_info");
    let summary = document.querySelector("#summary");
    let profileDetail = document.querySelector("#profile_detail");
    let changing = false;

    profileEditButton.addEventListener("click", (e) => {
        if(changing) {
            let _userInfo = userInfo.querySelector("input").value;
            let _summary = summary.querySelector("input").value;
            let _profileDetail = profileDetail.querySelector("input").value;
            if(_profileDetail.startsWith("http")) {
                _profileDetail = "<a href=" + _profileDetail + ">" + _profileDetail + "</a>";
            }

            userInfo.innerHTML = _userInfo;
            summary.innerHTML = _summary;
            profileDetail.innerHTML = _profileDetail;

            e.target.textContent = "프로필 편집";
            changing = false;
        } else {
            let _userInfo = userInfo.textContent;
            let _summary = summary.textContent;
            let _profileDetail = profileDetail.textContent;

            userInfo.innerHTML = "<input value=" + _userInfo + "></input>"
            summary.innerHTML = "<input value=" + _summary + "></input>";
            profileDetail.innerHTML = "<input value=" + _profileDetail + "></input>";

            e.target.textContent = "프로필 편집 완료";
            changing = true;
        }
    })
});