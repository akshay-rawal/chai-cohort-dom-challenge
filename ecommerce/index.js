  let cart = []

  function addToCart(name,price)  {    
      let itemExits = cart.some(item=> item.name === name)
      if(itemExits){
        cart = cart.map(item=>
            item.name === name ? {...item,quantity:item.quantity + 1} : item
        )
      }else{
        cart.push({name, price, quantity : 1})
      }
      updatecart()
  }

  function removeitem(name){
       cart = cart.filter(item=> item.name !== name )
       updatecart()
  }

 

    function increseQuantity(name){
       cart =  cart.map(item=> item.name === name ? {...item, quantity:item.quantity + 1, 
        price: (item.price/item.quantity * (item.quantity + 1)).toFixed(2)}:item)
        updatecart() 

    }

    function decreseQuantity(name){
      cart = cart.map(item=> item.name === name && item.quantity > 1 ? {...item, quantity:item.quantity - 1}:item)
        updatecart() 
        
    }
    function updatecart(){


        const cartItems = document.getElementById("cart-items");
        const cartTotals = document.getElementById("cart-total");
        const emptyCartMessage = document.querySelector(".empty-cart");
    
        cartItems.innerHTML = ''
    
        if(emptyCartMessage){
    
            emptyCartMessage.style.display = cart.length === 0 ? "block" : "none";
    
        }
        cart.forEach(item=>{
            const cartItem = document.createElement("div")
            cartItem.classList.add("cart-item");

            cartItem.innerHTML = 
            `
            <div class = "cartItemName">${item.name}</div>
            <div class = "cartItemDetails">
            
                  <button onclick="decreseQuantity('${item.name}')">-</button>
               <input type="text" value="${item.quantity}" readonly style="width: 30px; text-align: center;">
            <button onclick="increseQuantity('${item.name}')">+</button>
            <span>$${(item.price/ item.quantity * item.quantity + 1).toFixed(2)}</span>

            <button onclick = removeitem("${item.name}")>Remove</button></div>`
    
            cartItems.appendChild(cartItem)
        })
    
        const total = cart.reduce((acc,item)=> acc+item.price * item.quantity,0)
        cartTotals.innerHTML = `<h3> Total: $${total.toFixed(2)}</h3>`
    
    
    
      }