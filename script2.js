let ranDomNumber = num => {
    return Math.floor(Math.random() * num);
 }
 const collectiveWisdom = {
    signInfo: ['star', 'moon', 'sun', 'comet'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one'],

 
   creatFortune(){
     let s = this.signInfo[ranDomNumber(this.signInfo.length)];
     let f = this.fortuneOutput[ranDomNumber(this.fortuneOutput.length)];
     let a = this.advice[ranDomNumber(this.advice.length)];
     let fortune = `Your sign right now is a ${s} \nYou are having ${f} \nYou should ${a}`;
     return fortune;
   }
 }
 
 console.log(collectiveWisdom.creatFortune());
 