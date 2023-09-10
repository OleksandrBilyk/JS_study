function filter(array, predicateFn) {
    let filterArr = [];
    for (const item of array) {
        if (predicateFn(item)) {
            filterArr.push(item);
        }
    }
    return filterArr;
}

{
    // описати колоду карт (від 6 до туза без джокерів)
    function create_desk_of_cards () {
    let card_suits = ['spade', 'clubs', 'diamond','heart']
    let values= ['6', '7', '8', '9', '10', 'ace','jack','queen','king']
    let colors = ['black','red']
    let desk_of_cards = []

        for (const card_suit of card_suits) {
            for (const value of values) {
                if (card_suit === 'spade' || card_suit === 'clubs'){
                    desk_of_cards.push({value: value, card_suit: card_suit, color: colors[0]})
                } else {
                    desk_of_cards.push({value: value, card_suit: card_suit, color: colors[1]})
                }
            }
        }
        return desk_of_cards
    }
    let desk_card = create_desk_of_cards()
    console.log(desk_card)

// - знайти піковий туз
    let find = desk_card.find(val => val.value === 'ace' && val.card_suit === 'spade');
    console.log('index=',desk_card.findIndex(val => val.value === 'ace'), find);

// - всі шістки
    console.log(filter(desk_card, (item) => item.value === '6'));

// - всі червоні карти
    console.log(filter(desk_card, (item) => item.color === 'red'));

// - всі буби
    console.log(filter(desk_card, (item) => item.card_suit === 'diamond'));

// - всі трефи від 9 та більше
    console.log(filter(desk_card, (item) => item.card_suit === 'clubs' && ['9', '10', 'ace','jack','queen','king'].includes(item.value)));

//Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
    console.log(desk_card.reduce((accumulator, card) => {
            if (card.card_suit === 'spade') {
                accumulator.spades.push(card);
            } else if (card.card_suit === 'diamond') {
                accumulator.diamonds.push(card);
            } else if (card.card_suit === 'heart') {
                accumulator.hearts.push(card);
            } else {
                accumulator.clubs.push(card);
            }
            return accumulator;
         }, {spades: [], diamonds: [], hearts:[], clubs:[]}));
    
}