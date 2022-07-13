'use strict';

const bills = {
    bill1 : 275,
    bill2 : 40,
    bill3 : 430,
}

const tips = (addition) => {
    return addition > 50 && addition <=300 ? addition * 0.15 : addition * 0.20;
}

console.log('La note était de ' + bills.bill1,'le pourboire de ' + tips(275),'et la valeur totale était de ' + (bills.bill1 + tips(275)),'.');
console.log('La note était de ' + bills.bill2,'le pourboire de ' + tips(40),'et la valeur totale était de ' + (bills.bill1 + tips(40)),'.');
console.log('La note était de ' + bills.bill3,'le pourboire de ' + tips(430),'et la valeur totale était de ' + (bills.bill1 + tips(430)),'.');