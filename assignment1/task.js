// TASK1: Zakat
// var zakatPercentage= 0.025
// var userInput= +prompt('Enter your amount:')
// var result= userInput*zakatPercentage
// alert('Your Zakat value is ' + result)

// TASK 2: Sadqa e Fitr
// var familyMembers = prompt('Enter the number of family members:')
// var wheatPrice = 250
// var barleyPrice = 450
// var datePrice = 2100
// var raisinPrice = 2800
// var paymentMethod = +prompt('Select 1 for Wheat,2 for Barley,3 for Date or 4 for Raisin. Enter your payment method:')

// if (paymentMethod == 1) {
//     var result = wheatPrice*familyMembers
//     alert('Total amount' + result)
// }
// if (paymentMethod == 2) {
//     var result = barleyPrice*familyMembers
//     alert('Total amount' + result)
// }
// if (paymentMethod == 3) {
//     var result = datePrice*familyMembers
//     alert('Total amount' + result)
// }
// if (paymentMethod == 4) {
//     var result = raisinPrice*familyMembers
//     alert('Total amount ' + result)
// }
// else {
//    alert('Not an option')
// }

// TASK 3: Secret Number
// secretNumber = 7
// var userGuess = +prompt('Guess the number between 1 to 10:')

// if (userGuess == 7) {
//     alert('Congratulations! You guessed the secret number')
// }  
// else {
//     alert('You guessed it wrong!!')
// }

// TASK 4: Name
// var userName = prompt('Enter your name:')
// var lcuserName = userName.toLowerCase()
// lcuserName = lcuserName.slice(1,userName.length)
// var firstLetter = userName[0].toUpperCase()
// userName = firstLetter + lcuserName
// console.log(userName)

// TASK 5: ARRAY
// var contactNames = []
// var contactNumbers = []
// for(var i=0;i<5; i++){
//     var contactName = prompt('Enter contact name:')
//     var contactNumber = prompt('Enter contact number')
//     contactNames.push(contactName)
//     contactNumbers.push(contactNumber)
//     console.log(contactNames[i] + ':' + contactNumbers[i])
// }

// TASK 6: Product
// var productName = ['Chocolate', 'Biscuit', 'Chips', 'Jelly', 'Juice']
// var userChoice = +prompt('Enter the product position(0-4):')
// var userProduct = productName.splice(userChoice,1)
// console.log(userProduct)
// console.log(productName)

// TASK 7: Nested if else statements
// var userNationality = prompt('Enter your nationality:')
// if (userNationality == 'Pakistani' || userNationality == 'Indian') {
//     var userGender = prompt('Enter your gender:')
//     if (userGender == 'Male') {
//         var userAge = +prompt('Enter your age:')
//         if (userAge >= 18) {
//             alert('Eligible to vote')
//         }
//         else {
//             alert('You are not eligible to vote')
//         }
//     }
//     else {
//         var userAge = +prompt('Enter your age:')
//         if (userAge >= 18) {
//             var userStatus = prompt('Are you married:')
//             if (userStatus == 'Yes') {
//                 alert('Eligible to vote')
//             }
//             else {
//                 alert('You are not eligible to vote')
//             }
//         }
//         else {
//             alert('You are not eligible to vote')
//         }
//     }
// }
// else {
//     alert('You are not eligible to vote')
// }

// TASK 8: Worldcup
var WorldCupSquad = ['Babar Azam', 'Haris Rauf', 'Shaheen Afridi', 'Naseem Shah','Muhammad Rizwan',
 'Shan Masood', 'Abdullah Shafique', 'Khushdil Shah', 'Haris Sohail', 'Usama Mir', 
 'Azam Khan', 'Mohammad Wasim Jr', 'Mohammad Hasnain', 'Shadab Khan', ' Salman Agha' ]
 console.log(WorldCupSquad)
 var WorldCupFinalSquad_1 = WorldCupSquad.slice(0,7) 
 var WorldCupFinalSquad_2 = WorldCupSquad.slice(10,13)
 var WorldCupFinalSquad = WorldCupFinalSquad_1 + ', ' + WorldCupFinalSquad_2
 console.log(WorldCupFinalSquad) 


