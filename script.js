function mincost(arr)
{ 
//write your code here
	if(arr.length === 1) return 0;
	const heap = new MinHeap();
	for (let length of arr){
		heap.insert(length);
	}
	let totalCost = 0;
	while(heap.size() > 1){
		const first = heap.extractMin();
		const second = heap.extractMin();

		const cost = first + second;
		totalCost += cost;

		heap.insert(cost);
	}
	return totalCost;
// return the min cost
  
}


module.exports=mincost;
