function Ufcsuperstars(fighters){

 this.fighters = fighters;

}

var my_Ufcfighters = new Ufcsuperstars("Belfort");

function Cars(){
this.fast = true;

}
Cars.prototype = new Ufcsuperstars("Diaz");
Ferarri = new Cars();
