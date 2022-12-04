function calcTotalUnits(b, a, c, u, l, o, lk, on, r, p)
	{
	 return b + a + c + u + l + o + lk + on + r;

	}

	function calcDis(T)
	 {
	  if (T > 20)
	  {
		return T - (T * .1)
	  }
	  else {
	  return 0; 
	       }

	 }
	 function calTotal(z, un){
		return un * z;
	 }
	function Runanalysis()
	{
		let z;
		z = 4;

		b = parseInt(document.getElementById("Bananas".value);
		a = parseInt(document.getElementById("Apples".value);
		p = parseInt(document.getElementById("Pears".value);
		c = parseInt(document.getElementById("Carrots".value);
		u  parseInt(document.getElementById("Cucumbers".value);
		l = parseInt(document.getElementById("Lettuce".value);
		o = parseInt(document.getElementById("Oranges".value);
		lk = parseInt(document.getElementById("Leeks".value);
		on = parseInt(document.getElementById("Onions".value);
		r = parseInt(document.getElementById("Radish".value);

		
		
		
		
		un = calcTotalUnits(b, a, p, c, u, l, o, lk, on, r);
		T = calcTotal(p, un);
		D = calcDis(T);
		
	}
