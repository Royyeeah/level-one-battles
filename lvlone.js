//YOU 
if(localStorage.health){localStorage.health = Number(localStorage.health);}
else {localStorage.health = 1;}
if(localStorage.damageMin) {localStorage.damageMin = Number(localStorage.damageMin);}
else {localStorage.damageMin = 1;}
if(localStorage.damageMax) {localStorage.damageMax = Number(localStorage.damageMax);}
else {localStorage.damageMax = 1;}

console.log(`Your Health: ${Number(localStorage.health)}`);
console.log(`Your Max Damage: ${Number(localStorage.damageMax)}`);
console.log(`Your Min Damage: ${Number(localStorage.damageMin)}`);

//ENEMY 
if(localStorage.enemyHealth) {localStorage.enemyHealth = Number(localStorage.enemyHealth);}
else {localStorage.enemyHealth = 1;}
if(localStorage.enemyDamageMin) {localStorage.enemyDamageMin = Number(localStorage.enemyDamageMin);}
else {localStorage.enemyDamageMin = 1;}
if(localStorage.enemyDamageMax) {localStorage.enemyDamageMax = Number(localStorage.enemyDamageMax);} 
else {localStorage.enemyDamageMax = 1;}

console.log(`Enemy's Health: ${Number(localStorage.enemyHealth)}`);
console.log(`Enemy's Max Damage: ${Number(localStorage.enemyDamageMax)}`);
console.log(`Enemy's Min Damage: ${Number(localStorage.enemyDamageMin)}`);

if(localStorage.logic){ //logics. 
    localStorage.logic = Number(localStorage.logic);
} else {
    localStorage.logic = 0;
}

if(Number(localStorage.logic) != 100){ //starting health. MUST CHANGE VALUE FOR TESTING TO WORK!!
    localStorage.health = Number(30);
    localStorage.enemyHealth = Number(20);
    localStorage.enemyDamageMax = Number(3);
    localStorage.enemyDamageMax = Number(5);
    localStorage.damageMin = Number(5);
    localStorage.damageMax = Number(7);
    localStorage.logic = Number(100); 
}

console.log(`this round logic value: ${Number(localStorage.logic)}`);

your_Health_Display = document.getElementById('your_Health');
enemy_Health_Display = document.getElementById('enemy_Health');
enemy_Health_Display.innerHTML = `Enemy HP: ${Number(localStorage.enemyHealth)}`;
your_Health_Display.innerHTML = `Your HP: ${Number(localStorage.health)}`;
leav = document.getElementById('leave');

if(Number(localStorage.health <= 0)){
    health_Display.innerHTML = `Your HP: 0`;
}

if(Number(localStorage.enemyHealth <= 0)){
    enemy_Health_Display.innerHTML = `Enemy HP: 0`;
}

info_Display = document.getElementById('information');
help = document.getElementById('help');
hero = document.getElementById('hero');
enemy = document.getElementById('enemy');

let spamLogic = 1;

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function begin(){
    info_Display.innerHTML = 'Battle start!';
    help.innerHTML = `A: Attack /// H: Heal /// R: Restart`
    await sleep(3000);
    info_Display.innerHTML = 'ㅤ';
    logic = 3;
}
begin();

async function action(event){
    x = event.keyCode;
    if(x==65){
        if(logic == 3){
            if(spamLogic == 1){
                spamLogic=0;
    if(localStorage.enemyHealth) {
        let damage = Math.floor(Math.random() * (Number(localStorage.damageMax) - Number(localStorage.damageMin) + 1) + Number(localStorage.damageMin));
        console.log(`your damage: ${damage}.`);
        localStorage.enemyHealth = Number(localStorage.enemyHealth) - damage;
        info_Display.innerHTML = `you dealt ${damage} damage!`
        hero.animate([
            {transform: 'translateX(0vh)'},
            {transform: 'translateX(140vh)'},
            {transform: 'translateX(0vh)'}
            ],
            {
            duration:500,
            iterations: 1
            });
        enemy_Health_Display.innerHTML = `Enemy HP: ${Number(localStorage.enemyHealth)}`;
        if(Number(localStorage.enemyHealth <= 0)){
            enemy_Health_Display.innerHTML = `Enemy HP: 0`;
        }
        await sleep(1500);
    }
    if(Number(localStorage.enemyHealth <= 0)){
        info_Display.innerHTML = "You defeated the enemy!";
        await sleep(2000);
        info_Display.innerHTML = "ㅤ";
        if(localStorage.enemyHealth){
            localStorage.enemyHealth = Number(30);
            enemy_Health_Display.innerHTML = `Enemy HP: ${Number(localStorage.enemyHealth)}`;
        }
    } else {
    takeDamage();
    }
}
}
}
}

async function takeDamage(){
    if(localStorage.health) {
        let bad_Damage = Math.floor(Math.random() * (Number(localStorage.enemyDamageMax) - Number(localStorage.enemyDamageMin) + 1) + Number(localStorage.enemyDamageMin));
        console.log(`enemy damage: ${bad_Damage}.`);
        localStorage.health = Number(localStorage.health) - bad_Damage;
        info_Display.innerHTML = `enemy dealt ${bad_Damage} damage back!`
        enemy.animate([
            {transform: 'translateX(0vh)'},
            {transform: 'translateX(-140vh)'},
            {transform: 'translateX(0vh)'}
            ],
            {
            duration:500,
            iterations: 1
            })  
        your_Health_Display.innerHTML = `Your HP: ${Number(localStorage.health)}`;
        if(Number(localStorage.health <= 0)){
            health_Display.innerHTML = `Your HP: 0`;
        }
        await sleep(1500);
        info_Display.innerHTML = `ㅤ`
        spamLogic=1;
    }
    if(Number(localStorage.health <= 0)){
        info_Display.innerHTML = "You died!";
    } 
}

function leave(){
    window.location.replace('lvls.html')
}
