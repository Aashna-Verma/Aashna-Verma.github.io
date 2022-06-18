let skillList = document.getElementById('skills-list');
let skillName1 = document.getElementsByClassName("skill-name")[0];
let skillName2 = document.getElementsByClassName("skill-name")[1];
let skillName3 = document.getElementsByClassName("skill-name")[2];
let skillName4 = document.getElementsByClassName("skill-name")[3];
let skillName5 = document.getElementsByClassName("skill-name")[4];
let skillName6 = document.getElementsByClassName("skill-name")[5];

const lst = [skillName1, skillName2, skillName3, skillName4, skillName5, skillName6];


skillList.onmouseover = function() {
    lst.forEach(element => element.style.display = 'unset');
}

skillList.onmouseout = function() {
    lst.forEach(element => element.style.display = 'none');
}
