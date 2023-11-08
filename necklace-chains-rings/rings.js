let data = 0;
      document.getElementById("counting").innerText = data;
 

      function increment() {
      data = data + 1;
      document.getElementById("counting").innerText = data;
      if(data>10)
      {
        alert("You cannot buy more than 10 items");
        data=10;
      }
      document.getElementById("counting").innerText =data;
    }

    function decrement() {
      data = data - 1;
      document.getElementById("counting").innerText = data;
      if(data<0)
      {
        alert("Item quantity can never be negative");
        data=0;
      }
  document.getElementById("counting").innerText =data;
  }
  function addtocart() {
    alert('Item added to cart');
  }
  
  function buynow() {
    const confirmPurchase = confirm('Are You Sure to Buy This Item?');
    if (confirmPurchase) {
      alert('Thank you for your purchase!');
    } else {
      alert('Purchase cancelled');
    }
  }
  function getprice()
  {
  selectElement = document.querySelector('#gn');
        x = selectElement.value;
        
  if(x=="2")
  {
    document.getElementById("a").innerHTML=34000*data;
  }
  else if(x=="3")
  {
    document.getElementById("a").innerHTML=41000*data;
  }
  else{
    document.getElementById("a").innerHTML=0;
  }
  }

  let data1 = 0;

  function getprice2() {
    const selectElement = document.querySelector('#go');
    const selectedValue = selectElement.value;
  
    if (selectedValue === "22 Carat") {
      document.getElementById('b').textContent = 22000 * data1;
    } else if (selectedValue === "24 Carat") {
      document.getElementById('b').textContent = 26000 * data1;
    } else {
      document.getElementById('b').textContent = 0;
    }
  }
  
  function increment1() {
    if (data1 < 10) {
      data1++;
      document.getElementById('count').textContent = data1;
    } else {
      alert('You cannot buy more than 10 items');
    }
  }
  
  function decrement1() {
    if (data1 > 0) {
      data1--;
      document.getElementById('count').textContent = data1;
    } else {
      alert('Item quantity can never be negative');
    }
  }
  
  function addtocart1() {
    alert('Item added to cart');
  }
  
  function buynow1() {
    const confirmPurchase = confirm('Are You Sure to Buy This Item?');
    if (confirmPurchase) {
      alert('Thank you for your purchase!');
    } else {
      alert('Purchase cancelled');
    }
  }
  

  
let data2 = 0;

function getprice3() {
  selectElement = document.querySelector('#gp');
  z = selectElement.value;
  if (z == "2") {
    document.getElementById("c").innerHTML = 25000 * data2;
  } else if (z == "3") {
    document.getElementById("c").innerHTML = 30000 * data2;
  } else {
    document.getElementById("c").innerHTML = 0;
  }
}

function increment3() {
  data2++;
  document.getElementById("counted").innerText = data2;
  if (data2 > 10) {
    alert("You cannot buy more than 10 items");
    data2 = 10;
  }
  document.getElementById("counted").innerText = data2;
}

function decrement4() {
  data2--;
  document.getElementById("counted").innerText = data2;
  if (data2 < 0) {
    alert("Item quantity can never be negative");
    data2 = 0;
  }
  document.getElementById("counted").innerText = data2;
}

function addtocart3() {
  alert('Item added to cart');
}

function buynow4() {
  const confirmPurchase = confirm('Are You Sure to Buy This Item?');
  if (confirmPurchase) {
    alert('Thank you for your purchase!');
  } else {
    alert('Purchase cancelled');
  }
}