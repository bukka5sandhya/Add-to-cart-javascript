
           let cartItemTextInputElement = document.getElementById("cartItemTextInput");
           let cartItemsContainerElement = document.getElementById("cartItemsContainer");
           function onAddCartItem() {
                 let cartItemText = cartItemTextInputElement.value;
                 let cartElement = document.createElement("li");
                cartElement.textContent = cartItemText;
                cartItemTextInputElement.value = "";
                cartItemsContainerElement.appendChild(cartElement);
            }
