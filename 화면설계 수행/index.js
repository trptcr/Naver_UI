function changelangSelect() {
    var langSelect = document.getElementById("id-lang");
    var selectValue = langSelect.options[langSelect.selectedIndex].value;
}

function ipCheck() {
    var ipCheck = document.getElementById("ip-check")
    console.log(ipCheck);
}

ipCheck();