const rewire = require("rewire");

test("The function getLaceNameDataForShoes should exist", function(){
    const file = rewire("./app.js");
    const getLaceNameDataForShoes = file.__get__('getLaceNameDataForShoes');
    expect(getLaceNameDataForShoes).toBeTruthy();
});

test("Function getLaceNameDataForShoes should return correct data", function(){
    const file = rewire("./app.js");
    const getLaceNameDataForShoes = file.__get__('getLaceNameDataForShoes');

    let inventory = [
        {
          name: 'Brunello Cucinelli',
          shoes: [
            {name: 'tasselled black low-top lace-up', price: 1000},
            {name: 'tasselled green low-top lace-up', price: 1100},
            {name: 'plain beige suede moccasin', price: 950},
            {name: 'plain olive suede moccasin', price: 1050}
          ]
        },
        {
          name: 'Gucci',
          shoes: [
            {name: 'red leather laced sneakers', price: 800},
            {name: 'black leather laced sneakers', price: 900}
          ]
        }
    ];

    let result = [
        {
          "nameWords": [
            "tasselled",
            "black",
            "low-top",
            "lace-up"
          ],
          "targetWordIndex": 3
        },
        {
          "nameWords": [
            "tasselled",
            "green",
            "low-top",
            "lace-up"
          ],
          "targetWordIndex": 3
        },
        {
          "nameWords": [
            "red",
            "leather",
            "laced",
            "sneakers"
          ],
          "targetWordIndex": 2
        },
        {
          "nameWords": [
            "black",
            "leather",
            "laced",
            "sneakers"
          ],
          "targetWordIndex": 2
        }
    ]

    expect(getLaceNameDataForShoes(inventory)).toEqual(result);
});

test("Function getLaceNameDataForShoes should return correct data", function(){
    const file = rewire("./app.js");
    const getLaceNameDataForShoes = file.__get__('getLaceNameDataForShoes');

    let inventory = [
        {
          name: 'Brunello Cucinelli',
          shoes: [
            {name: 'tasselled black low-top lace-up', price: 1000},
            {name: 'plain olive suede moccasin', price: 1050}
          ]
        },
        {
          name: 'Gucci',
          shoes: [
            {name: 'red leather laced sneakers', price: 800},
            {name: 'black leather moccasins', price: 900}
          ]
        },
        {
          name: 'Salvatore Ferragamo',
          shoes: [
            {name: 'black special laced sneakers', price: 800},
            {name: 'green crocodile leather moccasins', price: 900}
          ]
        }
    ];

    let result = [
        {
          "nameWords": [
            "tasselled",
            "black",
            "low-top",
            "lace-up"
          ],
          "targetWordIndex": 3
        },
        {
          "nameWords": [
            "red",
            "leather",
            "laced",
            "sneakers"
          ],
          "targetWordIndex": 2
        },
        {
          "nameWords": [
            "black",
            "special",
            "laced",
            "sneakers"
          ],
          "targetWordIndex": 2
        }
    ]

    expect(getLaceNameDataForShoes(inventory)).toEqual(result);
});