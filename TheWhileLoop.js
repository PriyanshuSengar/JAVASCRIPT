let rep=1;
while(rep<=10){
    rep++;
}
let dice =Math.trunc(Math.random()*6)+1;
while(dice !==6){
    console.log(`you rolled a ${dice}`);
    dice=Math.trunc(Math.random()*6)+1;
    if(dice==6)console.log('Loop is about to end.......');
}
