// const users = [
//     { name: "Alice Johnson", email: "alice.johnson@example.com", isVerify: true },
//     { name: "Bob Smith", email: "bob.smith@example.com", isVerify: false },
//     { name: "Carol Williams", email: "carol.williams@example.com", isVerify: true },
//     { name: "David Brown", email: "david.brown@example.com", isVerify: false },
//     { name: "Emma Davis", email: "emma.davis@example.com", isVerify: true },
//     { name: "Frank Wilson", email: "frank.wilson@example.com", isVerify: false },
//     { name: "Grace Martinez", email: "grace.martinez@example.com", isVerify: true },
//     { name: "Henry Anderson", email: "henry.anderson@example.com", isVerify: false },
//     { name: "Irene Taylor", email: "irene.taylor@example.com", isVerify: true },
//     { name: "Jack Thomas", email: "jack.thomas@example.com", isVerify: false },
//     { name: "Karen Hernandez", email: "karen.hernandez@example.com", isVerify: true },
//     { name: "Leo Moore", email: "leo.moore@example.com", isVerify: false },
//     { name: "Mia Martin", email: "mia.martin@example.com", isVerify: true },
//     { name: "Noah Lee", email: "noah.lee@example.com", isVerify: false },
//     { name: "Olivia White", email: "olivia.white@example.com", isVerify: true }
// ];

// ունենք աըս զանգվածը, այս զանգվածի համար կատարել հետևյալ խնդիրները՝

// 1․ զանգվածում ավելացնել նոր մարդ սկսված վերջից

// const newPerson = {name: "Jon Smit", email: "jon.smit@gmail.com", isVerify: true };


// users.push(newPerson);

// console.log(users);

// 2. զանգվածից հեռացնել վերջից երկու մարդ

// users.pop()
// users.pop()
// console.log(users);

// 3. զանգվածից հեռացնել պատահական ինդեքսով մարդու


// function removeRandomPerson(arr) {
//     const randomIndex = Math.floor(Math.random() * arr.length);
//     arr.splice(randomIndex, 1);
//     return arr;
// }
// const updatedUsers = removeRandomPerson(users);
// console.log(updatedUsers);

// 4․ զանգվածում սորտավորել մարդկանց ըստ իրանց վերիֆիկացիայի, 
// սկսած բոլոր վերիֆիկացիա անցածներից, հետո նրանք ովքեր վերիֆիկացիա չեն անցել։

// let passedVerification = [];
// let failedVerification = [];

// for (let i = 0; i < users.length; i++) {
//     if (users[i].isVerify === true) {
//         passedVerification.push(users[i]);
//     } else {
//         failedVerification.push(users[i]);
//     }
// }
// let sortedUsers = passedVerification.concat(failedVerification);
// console.log(sortedUsers);

// 5. ստանալ նոր զանգված որտեղ կլինեն միայն վերիֆիկացիա անցած մարդիկ

// const verifiedUsers = [];

// for (let i = 0; i < users.length; i++) {
//     if (users[i].isVerify) {
//         verifiedUsers.push(users[i]);
//     }
// }

// console.log(verifiedUsers);

// 6. ստանալ նոր զանգված, որտեղ կլինեն բոլորը բայց նրանք ում վերիֆիկացիան false
// պետք է դարձնել true

// const verifiedUsers = [];

// for (let i = 0; i < users.length; i++) {
//     if (!users[i].isVerify) {
//         users[i].isVerify = true;
//     }
//     verifiedUsers.push(users[i]);
// }

// console.log(verifiedUsers);


// 7. ստուգել արդյոք կա մարդ որ վերիֆիկացիա չի անցել

// let hasNotPassedVerification = false;

// for (let i = 0; i < users.length; i++) {
//     if (!users[i].isVerify) {
//         hasNotPassedVerification = true;
//         break;
//     }
// }

// if (hasNotPassedVerification) {
//     console.log("Գոնե մեկ մարդ կա, ով չի անցել ստուգում։");
// } else {
//     console.log("Բոլոր անձինք անցել են ստուգում։");
// }


// 8․ ստուգել արդյոք բոլորը անցել են վերիֆիկացիա

// let everyonePassedVerification = true;

// for (let i = 0; i < users.length; i++) {
//     if (!users[i].isVerify) {
//         everyonePassedVerification = false;
//         break;
//     }
// }

// if (everyonePassedVerification) {
//     console.log("Բոլորն անցել են ստուգում։");
// } else {
//     console.log("Ոչ բոլորն են ստուգում անցել։");
// }
// ===================================================================================


// Տրված է եռանիշ թիվ ։ Կազմել հետևյալ խնդիրներիլուծման բլոկ-սխեման և ծրագիրը։

//1. տրամաբանական տիպի փոփոխականին վերագրել true արժեք, եթե եռանիշ թվի միավորների
// թվանշանը հավասար է տասնավորների և հարյուրավորների թվանշանների գումարին, հակառակ
// դեպքում false ։ Արտածել t փոփոխականի արժեքը։


// function checkThreeDigitNumber(num) {
//     let numStr = num.toString();
//     if (numStr.length !== 3) {
//         return false;
//     }
//     let hundreds = parseInt(numStr[0], 10);
//     let tens = parseInt(numStr[1], 10);
//     let units = parseInt(numStr[2], 10);
//     let isConditionMet = (units === (hundreds + tens));
//     return isConditionMet;
// }
// let number = 321; 
// let result = checkThreeDigitNumber(number);
// console.log(`Թվի համար ${number}, պայմանն է ${result}.`);

// 2. տրամաբանական t փոփոխականին վերագրել true արժեք , եթե հակառակ դեպքում 
// false:  Արտածել t փոփոխականի արժեքը։

// function checkThreeDigitNumber(num) {
//     if (num < 100 || num > 999) {
//         throw new Error("Թիվը պետք է լինի եռանիշ թիվ։");
//     }
//     let hundreds = Math.floor(num / 100);
//     let tens = Math.floor((num % 100) / 10);
//     let units = num % 10;
//     let sum = hundreds + tens + units;
//     let t = (sum % 5 === 0);
//     console.log(`t-ի արժեքը հետևյալն է. ${t}`);
//     return t;
// }
// let num = 234; 
// checkThreeDigitNumber(num);

// 3․ հաշվել և արտածել եռանիշ թվի և թվանշանների գումարի  հարաբերության արժեքը,
// եթե եռանիշ թիվը մեծ է տրված k թվից, հակառակ դեպքում միավորների թվանշանի և եռանիշ
// թվի հարաբերության արժեքը։

// function calculateRatio(num, k) {
//     if (num < 100 || num > 999) {
//         throw new Error("Թիվը պետք է լինի եռանիշ թիվ։");
//     }
//     let hundreds = Math.floor(num / 100);
//     let tens = Math.floor((num % 100) / 10);
//     let units = num % 10;
//     let sum = hundreds + tens + units;
//     let ratio;
//     if (num > k) {
//         ratio = num / sum;
//     } else {
//         ratio = units / num;
//     }
//     console.log(`Հարաբերակցության արժեքն է: ${ratio}`);
//     return ratio;
// }
// let num = 234;  
// let k = 200;    
// calculateRatio(num, k);

// 4. հաշվել և արտածել եռանիշ թվի թվանշաններից մեծագույնի արժեքը։

// function findLargestDigit(num) {
//     if (num < 100 || num > 999) {
//         console.log("Խնդրում ենք մուտքագրել եռանիշ թիվ.");
//         return;
//     }
//     let hundreds = Math.floor(num / 100);
//     let tens = Math.floor((num % 100) / 10);
//     let units = num % 10;
//     let largest = Math.max(hundreds, tens, units);
//     console.log("Ամենամեծ թվանշանն է:", largest);
// }
// let num = 375;
// findLargestDigit(num);

// 5. հաշվել և արտածել եռանիշ թվի թվանշաններից փոքրագույնի արժեքը։

// function findSmallestDigit(num) {
//     if (num < 100 || num > 999) {
//         console.log("Խնդրում ենք մուտքագրել եռանիշ թիվ.");
//         return;
//     }
//     let hundreds = Math.floor(num / 100);
//     let tens = Math.floor((num % 100) / 10);
//     let units = num % 10;
//     let smallest = Math.min(hundreds, tens, units);
//     console.log("Ամենափոքր թվանշանն է:", smallest);
// }
// let num = 375;
// findSmallestDigit(num);

// 6․ հաշվել և արտածել եռանիշ թվի թվանշանների գումարի և եռանիշ թվի հարաբերության արժեքը,
//  եթե միավորների թվանշանը մեծ է տասնավորների թվանշանից, հակառակ դեպքում արտածել եռանիշ թիվը։

// function calculateAndDisplay(num) {
//     if (num < 100 || num > 999) {
//         console.log("Խնդրում ենք մուտքագրել եռանիշ թիվ.");
//         return;
//     }
//     let hundreds = Math.floor(num / 100);
//     let tens = Math.floor((num % 100) / 10);
//     let units = num % 10;
//     let sum = hundreds + tens + units;
//     if (units > tens) {
//         let ratio = sum / num;
//         console.log("Թվանշանների գումարի և թվի հարաբերակցությունը հետևյալն է.", ratio);
//     } else {
//         console.log("Թիվն է.", num);
//     }
// }
// let num = 375;
// calculateAndDisplay(num);

// 7. հաշվել և արտածել եռանիշ թվի տասնավորների և  միավորների թվանշանների հարաբերության արժեքը,
// եթե եռանիշ թիվը մեծ է 300-ից, հակառակ դեպքում հարյուրավորների և միավորների հարաբերության արժեքը։
// ենթադրվում է, որ եռանիշ թվի միավորների թվանշանը հավասար չե զրոյի։


// function calculateRatios(num) {
//     if (num < 100 || num > 999) {
//         console.log("Please enter a three-digit number.");
//         return;
//     }
//     let hundreds = Math.floor(num / 100);
//     let tens = Math.floor((num % 100) / 10);
//     let units = num % 10;
//     if (units === 0) {
//         console.log("Միավորների թվանշանը չպետք է զրո լինի:");
//         return;
//     }
//     if (num > 300) {
//         let ratio = tens / units;
//         console.log("Տասնյակի և միավորի թվանշանի հարաբերակցությունը հետևյալն է։", ratio);
//     } else {
//         let ratio = hundreds / units;
//         console.log("Հարյուրավոր թվանշանների և միավորների թվանշանի հարաբերակցությունը հետևյալն է։", ratio);
//     }
// }
// let num = 375; 
// calculateRatios(num);

// 8. Սիմվոլային f փոփոխականին վերագրել 'a' արժեքը, եթե եռանիշ թվի տասնավորների և հարյուրավորների 
// թվանշանների գումարը փոքր է 5-ից, հակառակ դեպքում 'b' արժեքը։ Արտածել f-ի արժեքը։


// function determineValueF(num) {
//     if (num < 100 || num > 999) {
//         console.log("Խնդրում ենք մուտքագրել եռանիշ թիվ:");
//         return;
//     }
//     let hundreds = Math.floor(num / 100);
//     let tens = Math.floor((num % 100) / 10);
//     let sum = hundreds + tens;
//     let f;
//     if (sum < 5) {
//         f = 'a';
//     } else {
//         f = 'b';
//     }
//     console.log("f-ի արժեքը հետևյալն է.", f);
// }
// let num = 375; 
// determineValueF(num);


// 9. Արտածել եռանիշ թվի թվանշանները ըստ աճման կարգի հաջորդականության։

// function displayDigitsInAscendingOrder(num) {
//     if (num < 100 || num > 999) {
//         console.log("Խնդրում ենք մուտքագրել եռանիշ թիվ:");
//         return;
//     }
//     let hundreds = Math.floor(num / 100);
//     let tens = Math.floor((num % 100) / 10);
//     let units = num % 10;
//     let digits = [hundreds, tens, units];
//     digits.sort((a, b) => a - b);
//     console.log("Աճման կարգով թվանշաններն են՝", digits.join(", "));
// }
// let num = 375;
// displayDigitsInAscendingOrder(num);

// 10․Արտածել եռանիշ թվանշանները ըստ նվազման կարգի հաջորդականության։

// function displayDigitsInDescendingOrder(num) {
//     if (num < 100 || num > 999) {
//         console.log("Խնդրում ենք մուտքագրել եռանիշ թիվ:");
//         return;
//     }
//     let hundreds = Math.floor(num / 100);
//     let tens = Math.floor((num % 100) / 10);
//     let units = num % 10;
//     let digits = [hundreds, tens, units];
//     digits.sort((a, b) => b - a);
//     console.log("Նվազման կարգով թվանշաններն են.", digits.join(", "));
// }
// let num = 375;
// displayDigitsInDescendingOrder(num);

