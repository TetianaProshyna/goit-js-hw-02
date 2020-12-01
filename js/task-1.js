const logItems = function (items) {
  for (let item of items) {
    let num = items.indexOf(item) + 1;
    console.log(`${num} - ${item}`);
  }
};
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
