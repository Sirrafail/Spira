

    //Ένα Internet Cafe έχει την ακόλουθη πολιτική χρέωσης (κλιμακωτά)
//Τα πρώτα τριάντα λεπτά: 1.40 ευρώ
//Τα επόμενα τρία 30λεπτα: 1.10 ευρώ το κάθε 30λεπτο
//Ο υπόλοιπος χρόνος: 0.03 ανά δευτερόλεπτο
//Να γραφτεί πρόγραμμα που θα διαβάζει τον χρόνο στον οποίο κάποιος πελάτης έκανε χρήση των υπηρεσιών του Internet Café 
//και θα εκτυπώνει τη χρέωση.


var time = +prompt("your time is")
var cost
var x1 = 1.40
var x2 = 1.10
var x3 = 1.80

if(time < 30){
    cost = x1
}else if(time >= 30 && time < 60 ){
    cost = x1 + x2
}else if(time >= 60 && time <90 ){
    cost = x1 + x2 + x2
}else if(time >= 90 && time  <120)
    cost = x1 + x2 + x2 + x2
else 
    cost = x1 + x2 + x2 + x2 + (time-120)*x3
console.log(cost)
  





