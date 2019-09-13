let appData = {
    budget: 0,
    timeData: undefined,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function start() {
    appData.budget = +prompt("Ваш бюджет на месяц?", "");
    appData.timeData = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(appData.budget) || appData.budget.length > 0 || appData.budget == null) {
        appData.budget = +prompt("Ваш бюджет на месяц?", "");
    }
}

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце"),
            b = prompt("Во сколько обойдется?");

        if ((typeof(a) === 'string') && (typeof(a) != null) && ((typeof(b) != null)) && (a.length > 0) && (b.length > 0) && (a.length < 50)) {
            appData.expenses[a] = b;
        } else {
            i--;
        }
    }
}

function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        appData.optionalExpenses[i] = prompt("Введите необязательную статью расходов в этом месяце");
    }
}

function checkSavings() {
    if (appData.savings === true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = (save/100/12*percent).toFixed();
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

function detectLevel() {
    if(appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}


//start();
//chooseExpenses();
chooseOptExpenses()
//detectDayBudget();
//detectLevel();
//checkSavings();

