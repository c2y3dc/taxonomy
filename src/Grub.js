var Grub = function() {
  this.age = 0;
  //this.food = 'jelly';
};

Grub.prototype = Object.create(Grub.prototype);
Grub.prototype.constructor = Grub;
Grub.prototype.eat = function(){};
Grub.prototype.food = 'jelly';
// Grub.prototype.age = 0;
Grub.prototype.color = 'pink';

