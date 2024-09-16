document.addEventListener('DOMContentLoaded', function () {
    function calculateIceCreamCost() {
        var size = prompt("Оберіть розмір стаканчика: маленький (10грн) або великий (25грн)");
        if (!size)
            return;
        var sizeLower = size.toLowerCase();
        var toppingsInput = prompt("Оберіть начинку (можна декілька через кому): шоколад (+5грн), карамель (+6грн), ягоди (+10грн)");
        var toppings = (toppingsInput ? toppingsInput.split(',').map(function (topping) { return topping.trim().toLowerCase(); }) : []);
        var addMarshmallow = confirm("Чи хочете ви додати маршмелоу (+5грн)?");
        var cost = 0;
        if (sizeLower === "маленький") {
            cost += 10;
        }
        else if (sizeLower === "великий") {
            cost += 25;
        }
        else {
            alert("Невірний вибір розміру стаканчика");
            return;
        }
        toppings.forEach(function (topping) {
            switch (topping) {
                case "шоколад":
                    cost += 5;
                    break;
                case "карамель":
                    cost += 6;
                    break;
                case "ягоди":
                    cost += 10;
                    break;
                default:
                    alert("\u041D\u0435\u0432\u0456\u0434\u043E\u043C\u0430 \u043D\u0430\u0447\u0438\u043D\u043A\u0430: ".concat(topping));
                    return;
            }
        });
        if (addMarshmallow) {
            cost += 5;
        }
        alert("\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044C \u0432\u0430\u0448\u043E\u0433\u043E \u043C\u043E\u0440\u043E\u0437\u0438\u0432\u0430: ".concat(cost, " \u0433\u0440\u043D"));
    }
    function delayExecution(ms, callback) {
        setTimeout(callback, ms);
    }
    function init() {
        delayExecution(1000, calculateIceCreamCost);
    }
    init();
});
