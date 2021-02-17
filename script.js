var p1health;
var enemyhealth;

window.addEventListener('DOMContentLoaded', function () {

    document.getElementById("atk").addEventListener("click", mainattack);
    document.getElementById("atk2").addEventListener("click", superattack);
    document.getElementById("reset").addEventListener("click", reset);

    document.getElementById("menu").addEventListener("click", menuopen);
    document.getElementById("closebtn").addEventListener("click", menuclose);
    document.getElementById("main").addEventListener("click", menuclose);

});

function menuopen() {
    document.getElementById("nav").style.height = "150px";
    //document.getElementById("menu").style.display = "none";
}
function menuclose() {
    document.getElementById("nav").style.height = "0px";
    //document.getElementById("menu").style.display = "block";
}

function mainattack() {
    p1health = document.getElementById('p1health').value - 0 ;
    enemyhealth = document.getElementById('enemyhealth').value - 0;
    var damage = Math.floor(Math.random() * 10);
    enemyhealth = enemyhealth - damage;
    if (enemyhealth <= 0) {
        alert('You Win!');
        reset();
    } else {
        updatestats();
        enemyattack();
    }
    
}

function superattack() {
    p1health = document.getElementById('p1health').value - 0;
    enemyhealth = document.getElementById('enemyhealth').value - 0;
    if (Math.floor(Math.random() * 10) < 1) {
        var damage = Math.floor(Math.random() * 100);
        enemyhealth = enemyhealth - damage;
        if (enemyhealth <= 0) {
            alert('You Win!');
            reset();
        } else {
            updatestats();
            enemyattack();
        }
    }
    else {
        enemyattack();
    }

}

function enemyattack() {
    p1health = document.getElementById('p1health').value - 0;
    enemyhealth = document.getElementById('enemyhealth').value - 0;
    var damage = Math.floor(Math.random() * 10);
    p1health = p1health - damage;
    if (p1health <= 0) {
        alert('You dead!');
        reset();
    } else {
        updatestats();

    }

}

function reset() {
    document.getElementById('p1health').value = 100;
    document.getElementById('enemyhealth').value = 100;
    document.getElementById('p1bar').style.setProperty('width', '100px');
    document.getElementById('enemybar').style.setProperty('width', '100px');
    document.getElementById('p1bar').style.setProperty('background-color', 'green');
    document.getElementById('enemybar').style.setProperty('background-color', 'green');
}

function updatestats() {
    document.getElementById('enemyhealth').value = enemyhealth;
    document.getElementById('enemybar').style.setProperty('width', enemyhealth + 'px');
    if (enemyhealth <= 50) {
        document.getElementById('enemybar').style.setProperty('background-color', 'yellow');
    }
    if (enemyhealth <= 10) {
        document.getElementById('enemybar').style.setProperty('background-color', 'red');
    }
    document.getElementById('p1health').value = p1health;
    document.getElementById('p1bar').style.setProperty('width', p1health + 'px');
    if (p1health <= 50) {
        document.getElementById('p1bar').style.setProperty('background-color', 'yellow');
    }
    if (p1health <= 10) {
        document.getElementById('p1bar').style.setProperty('background-color', 'red');
    }
}