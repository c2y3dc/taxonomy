var Bee = function() {
  this.age = 5;
  this.color = 'yellow';
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;
Bee.prototype.job = 'Keep on growing';
Bee.prototype.color = 'yellow';
