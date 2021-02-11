// Investment Accounts Assignment Start Code

// HTML Variables
let containerEl = document.getElementById("container");
let outputEl = document.getElementById("output");
let goBtnEl = document.getElementById("go");
let menuEl = document.getElementById("menu");

// Global Variable
let accounts = [];
let maxAmount = 5000; // account values should be b/t 0 and max

// Display Data
function start() {
  for (let i = 0; i < 200; i++){
    accounts.splice(0, 0, randomInt(0, maxAmount))
  }
}

start();
drawArray();


function drawArray() {
  let outputStr = "";
  let divHeight;
  
  for (let i = 0; i < accounts.length; i++) {
    divHeight = (accounts[i] / maxAmount) * 600; // Scale accounts to fit in array visualizer container
    outputStr += `<div style="height:${divHeight}px"></div>`;
  }
  containerEl.innerHTML = outputStr;
}

// Main Menu & Go Button
goBtnEl.addEventListener("click", mainMenu);

function mainMenu() {
  // Get value of menu select element
  let selection = menuEl.value;

  // Take action based on menu selection
  if (selection === "count-range") {
    countRange();
  } else if (selection === "donor") {
    generousDonor();
  } else if (selection === "hacker") {
    hackerAttack();
  } else if (selection === "stats") {
    investmentStats();
  } else if (selection === "add") {
    addAccount();
  } else if (selection === "remove-low") {
    removeLow();
  } else if (selection === "robin-hood") {
    robinHood();
  }

  // Redraw array to show any changes
  drawArray();
}

// ******************************************************
// MENU SELECTION FUNCTIONS
// ******************************************************
function countRange() {
  // Output the number of accounts with amounts between $2,000 and $4,000, inclusive
  outputEl.innerHTML = "Count Range";
  let COUNT = 0;
  for(let i = 0; i < accounts.length; i++) {
    if (accounts[i] >= 2000) {
      if (accounts[i] <= 4000) {
        COUNT++;
      }
    }
  }
  alert("There are " + COUNT + " accounts that have between $2,000 and $4,000")
}

function generousDonor() {
  // A generous donor has decided to give $500 to every investment
  // account that has less than $2000. 
  // Modify the investment account array to apply this donation.
  // Output the total amount of money that was donated.
  outputEl.innerHTML = "Generous Donor";
  let COUNT = 0;
  for(let i = 0; i < accounts.length; i++) {
    if (accounts[i] < 2000) {
      accounts[i] += 500;
      COUNT++;
    }
  }
  let Out = COUNT * 500;
  alert("There was a total of $" + Out + " donated across " + COUNT + " accounts")
}

function hackerAttack() {
  // A hacker steals 5% from every account.
  // Modify the investment account array to apply this theft.
  // Output the total amount that was stolen.
  outputEl.innerHTML = "Hacker Attack";
  let COUNT = 0;
  for(let i = 0; i < accounts.length; i++) {
    COUNT += accounts[i] / 20;
    accounts[i] -= accounts[i] / 20;
  }
  let Out = Math.floor(COUNT)
  alert("There was a total of $" + Out + " stolen in total")
}

function investmentStats() {
  // Output the minimum account amount, the maximum account amount
  // and the average account amount.
  outputEl.innerHTML = "Investment Stats";
  let COUNT = 0;
  let Max = 0;
  let Min = maxAmount;
  for(let i = 0; i < accounts.length; i++) {
    if (accounts[i] > Max) {
      Max = accounts[i];
    }
  }
  for(let o = 0; o < accounts.length; o++) {
    if (accounts[o] < Min) {
      Min = accounts[o];
    }
  }
  for(let p = 0; p < accounts.length; p++) {
    COUNT += accounts[p];
  }
  let Out1 = Math.floor(Max);
  let Out2 = Math.floor(Min);
  let Out3 = Math.floor(COUNT / accounts.length);
  alert("the richest account has $" + Out1 + ", the poorest account has $" + Out2 + ", while all the accounts have an average of $" + Out3)
}

function addAccount() {
  // Prompt for a new account amount and add this to the invesment account
  // array. Output a confirmation that a new account was added with an
  // opening amount of _______.
  outputEl.innerHTML = "Add Account";
  let amount = randomInt(0, maxAmount)
  accounts.splice(0, 0, amount)
  alert ("A new account with a balance of $" + amount + " was added")
}

function removeLow() {
  // Remove all accounts that are below $500.
  // Output how many accounts were removed.
  outputEl.innerHTML = "Remove Low Accounts";
  let loop = 0;
  let OUT = 0;
  accounts.sort(function(a, b){return a - b});
  accounts.reverse();
  for (let i = accounts.length; i > 0; i--) {
    if (accounts[i] < 500) {
      loop++;
      OUT++;
    }
  }
  while (loop > 0){
    accounts.pop();
    loop--;
  }
  accounts.reverse();
  alert("A total of " + OUT + " accounts were removed")
}

function robinHood() {
  // Steal from the rich and give to the poor.
  // Take $400 from every account that has over $4000.
  // Then evenly distribute the total amount taken between all the
  // accounts that have less than $1000.
  // Output how many accounts received money and 
  // how much each account received.
  outputEl.innerHTML = "Robin Hood";
  let Amount = 0;
  let COUNT = 0;
  for (let i = accounts.length; i > 0; i--) {
    if (accounts[i] > 4000) {
      accounts[i] -= 500;
      Amount += 500;
    }
    if (accounts[i] < 1000) { 
      COUNT++;
    }
  }
  let Total = Amount / COUNT;
  for (let o = accounts.length; o > 0; o--) {
    if (accounts[o] < 1000) {
      accounts[o] += Total
    }
  }
  if (Total > 0) {
    alert(COUNT + " accounts have recived $" + Total + " each")
  } else {
    alert("Nothing chagned")
  }
}