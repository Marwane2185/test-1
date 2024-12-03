
const fs = require('fs');
const csv = require('csv-parser');

async function getDataAsync() {
    return new Promise((resolve, reject) => {
        const resultsArray = [];
        fs.createReadStream('./prediction.csv')
            .pipe(csv())
            .on('data', (data) => resultsArray.push({
                'cardSuit': data['Card Suit'],
                'animal': data['Animal Name'],
                'fruit': data['Fruit'],
                'result': data['Result'],
            }))
            .on('end', () => {
                resolve(resultsArray);
            })
            .on('error', (err) => {
                reject(err);
            });
    });
}

const probabilityToBeatBoss = async (cardSuit, animal, fruit) => {
    let resultsArray = [];

    try {
        resultsArray = await getDataAsync();
    } catch (error) {
        console.error('Error getting data:', error);
    }

    if (resultsArray.length == 0) {
        console.log('empty data provided, leaving...');
        return;
    }

    const resultsArrayFiltered = resultsArray.filter(el => el.cardSuit == cardSuit &&
        el.animal == animal &&
        el.fruit == fruit
    )

    // Here we have options : 
    // 1- compute probability regarding only provided input , means use resultsArrayFiltered.length
    // 2- compute probability regarding whole date, means use resultsArray.length
    // Chosen option is 1 (could be modified later if client ask for that)
    console.log('(' + cardSuit + ', ' + animal + ', ' + fruit + ') => ' +
        (resultsArrayFiltered.filter(el => el.result == 'True').length * 100 / resultsArrayFiltered.length).toFixed(2) + '%')
}

// Test cases 

probabilityToBeatBoss('Hearts', 'Fox', 'Watermelon');

probabilityToBeatBoss('Clubs', 'Parrot', 'Mango');

probabilityToBeatBoss('Diamonds', 'Parrot', 'Apple');

probabilityToBeatBoss('Diamonds', 'Fox', 'Bananas');

probabilityToBeatBoss('Hearts', 'Parrot', 'Papaya');

probabilityToBeatBoss('Spades', 'Seal', 'Apple');
