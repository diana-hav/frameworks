document.addEventListener('DOMContentLoaded', function () {
    function calculateIceCreamCost(): void {
        
        const size: string | null = prompt("Оберіть розмір стаканчика: маленький (10грн) або великий (25грн)");
        if (!size) return;

        const sizeLower: string = size.toLowerCase();

        const toppingsInput: string | null = prompt("Оберіть начинку (можна декілька через кому): шоколад (+5грн), карамель (+6грн), ягоди (+10грн)");
        const toppings: string[] = (toppingsInput ? toppingsInput.split(',').map(topping => topping.trim().toLowerCase()) : []);

        const addMarshmallow: boolean = confirm("Чи хочете ви додати маршмелоу (+5грн)?");
        let cost: number = 0;

        if (sizeLower === "маленький") {
            cost += 10;
        } else if (sizeLower === "великий") {
            cost += 25;
        } else {
            alert("Невірний вибір розміру стаканчика");
            return;
        }

        toppings.forEach(topping => {
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
                    alert(`Невідома начинка: ${topping}`);
                    return;
            }
        });

        if (addMarshmallow) {
            cost += 5;
        }

        alert(`Загальна вартість вашого морозива: ${cost} грн`);
    }

    function delayExecution(ms: number, callback: () => void): void {
        setTimeout(callback, ms);
    }

    function init(): void {
        delayExecution(1000, calculateIceCreamCost);
    }

    init();
});
