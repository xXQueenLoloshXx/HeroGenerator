let ranDomNumber = num => {
    return Math.floor(Math.random() * num);
 }
 const SuperHeroTrates = {
   gender : ['Male','Female'],
   power: ['Fire', 'Visibility','Healing','Flying'],
   city: ['Gotham','Hogwards','Narnia','Disney'],
   animal: ['cat','bat','dragon','dog'],
 
   createHero(){
     let nGender = this.gender[ranDomNumber(this.gender.length)];
     let nPower = this.power[ranDomNumber(this.power.length)];
     let nCity = this.city[ranDomNumber(this.city.length)];
     let nAnimal = this.animal[ranDomNumber(this.animal.length)];
     console.log(`your a ${nGender} superhero, your power will be the power of ${nPower},  \nthe city you will protect is ${nCity} city , and your sidekick is a ${nAnimal}.`);
   }
 }
 
SuperHeroTrates.createHero();