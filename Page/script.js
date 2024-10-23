// const desserts = [
//     {
//         dessert: "Waffles with Berries",
//         category: "Waffle",
//         price: 6.50,
//     },
//     {
//         dessert: "Vanilla Bean Crème Brûlée",
//         category: "Crème Brûlée",
//         price: 7.00
//     },
//     {
//         dessert: "Macaron Mix of Five",
//         category: "Macaron",
//         price: 8.00,
//     },
//     {
//         dessert: "Classic Tiramisu",
//         category: "Tiramisu",
//         price: 5.50,
//     },
//     {
//         dessert: "Pistachio Baklava",
//         category: "Baklava",
//         price: 4.00,
//     },
//     {
//         dessert: "Lemon Meringue Pie",
//         category: "Pie",
//         price: 5.00,
//     },
//     {
//         dessert: "Red Velvet Cake",
//         category: "Cake",
//         price: 4.50,
//     },
//     {
//         dessert: "Salted Caramel Brownie",
//         category: "Brownie",
//         price: 4.50,
//     },
//     {
//         dessert: "Vanilla Panna Cotta",
//         category: "Panna Cotta",
//         price: 6.50,
//     }

// ]

document.addEventListener('DOMContentLoaded', function () {
    const dessertCards = document.querySelector('.desserts');

    const desserts = [
        {
            dessert: "Waffles with Berries",
            category: "Waffle",
            price: 6.50,
        },
        {
            dessert: "Vanilla Bean Crème Brûlée",
            category: "Crème Brûlée",
            price: 7.00
        },
        {
            dessert: "Macaron Mix of Five",
            category: "Macaron",
            price: 8.00,
        },
        {
            dessert: "Classic Tiramisu",
            category: "Tiramisu",
            price: 5.50,
        },
        {
            dessert: "Pistachio Baklava",
            category: "Baklava",
            price: 4.00,
        },
        {
            dessert: "Lemon Meringue Pie",
            category: "Pie",
            price: 5.00,
        },
        {
            dessert: "Red Velvet Cake",
            category: "Cake",
            price: 4.50,
        },
        {
            dessert: "Salted Caramel Brownie",
            category: "Brownie",
            price: 4.50,
        },
        {
            dessert: "Vanilla Panna Cotta",
            category: "Panna Cotta",
            price: 6.50,
        }
    ];

    function renderDesserts() {
        desserts.forEach(dessertItem => {
            const dessertCard = document.createElement('div');
            dessertCard.classList.add('card');
            dessertCard.innerHTML = `
                <h2>${dessertItem.dessert}</h2>
                <p>${dessertItem.category}</p>
                <p>$${dessertItem.price}</p>
            `;
            dessertCards.appendChild(dessertCard);
        });
    }

    renderDesserts();
});
