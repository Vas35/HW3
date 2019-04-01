	
var result = '',  
nums = [-10, 5, -2, -1, 1, 2, -3, 3, 10,11],
positiv = [],
products = {
'helmet' : 1000,
'ski': 2500,
'snowboard' : 3200
};
// Вывести числа строго больше 5. Done!
     for(i = 0; i < nums.length; i++){ 
      if (nums[i] > 5) {
	      result += nums[i] + ' ';
	 }}
console.log ('Числа строго больше 5: ', result);


// Вывести отрицательные числа на четных индексах. Done!
var result = '';
   for (i = 2; i < nums.length; i += 2){ 
     if (nums[i] < 0) {
        result += nums[i] + ' ';
	 }}
console.log ('Отрицательные числа на четных индексах: ', result);


// Вывести положительные числа через одно. Не уверен в решении, но работает. Done!
var result = '',
positiv = [];
   for ( var i = 0; i < nums.length; i ++ ){ 
     if (nums[i] > 0 ){
	     positiv.push(nums[i]);
   }}
    for ( var j = 0; j < positiv.length; j +=2 ){
   	   	 result += positiv[j] + ' ';
   } 
console.log ('Положительные числа через одно: ', result);


// Сделать по парную перестановку элементов в массиве. Не понятно каким образом числа движутся по массивам. Done!
result	= '';
	for(var i = 0, j = ''; i < nums.length; i += 2) {
		nums[j] = nums[i];
		nums[i] = nums[i + 1];
		nums[i + 1] = nums[j];	
	}
	for(var i = 0; i < nums.length; i ++) {
		result += nums[i] + ' ';
	}
console.log('По парная перестановка элементов в массиве:',result);


// Создать ассоциативный массив goods, потом вывести название и стоимость товаров. Done!
result	= '';
    for ( var goods in products) {
	    result += goods + ' - ' + products[goods] + ' uah;\n';
	}
console.log('Ассоциативный массив goods:',result);	 

// Вывести суммарную стоимость всех товаров ассоциативного массива goods. Done!  
sum	= 0;
    for ( var goods in products) {
		sum += products[goods];
			}
console.log('Cуммарная стоимость всех товаров:', sum + ' uah;');	
		