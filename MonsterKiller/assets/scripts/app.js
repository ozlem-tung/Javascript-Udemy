const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;
const ATTACK_MODE = 'ATTACK';
const ATTACK_MODE_STRONG = 'STRONG_ATTACK';

const enteredValue = prompt('Set health value for you and the monster:', '100');

let bonusLife = true;
let chosenMaxLife = parseInt(enteredValue);
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

if (isNaN(chosenMaxLife) || chosenMaxLife <=0) {
  chosenMaxLife = 100;
  alert("entered prompt is not valid, health setted default value");
}
adjustHealthBars(chosenMaxLife);

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  if (currentPlayerHealth <= 0 && bonusLife) {
    bonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert("You'd be dead but your bonus life saved you!");
  }
  if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert('YOU DRAW !');
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('YOU WON !');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('YOU LOST !');
  }
  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset();
  }
}
function healPlayerHandler() {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    healValue = chosenMaxLife - currentPlayerHealth;
    alert("You can't heal to more than your max initial health");
  } else healValue = HEAL_VALUE;
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  endRound();
}
function attackMonster(mode) {
  let maxDamage;
  if (mode == ATTACK_MODE) {
    maxDamage = ATTACK_VALUE;
  } else if ((mode = ATTACK_MODE_STRONG)) {
    maxDamage = STRONG_ATTACK_VALUE;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  endRound();
}

function attackHandler() {
  attackMonster(ATTACK_MODE);
}
function strongAttackHandler() {
  attackMonster(ATTACK_MODE_STRONG);
}
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
