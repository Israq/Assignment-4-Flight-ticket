 function handleProductChange(product, isIncrease) {

                const productCount = getInputValue(product);
                let productNewCount = productCount;
                if (isIncrease == true) {
                    productNewCount = productCount + 1;
                }
                if (isIncrease == false && productCount > 0) {
                    productNewCount = productCount - 1;
                }
                document.getElementById(product + '-count').value = productNewCount;
                let productTotal = 0;
                if (product == 'phone') {
                    productTotal = productNewCount *150;
                }
                if (product == 'case') {
                  productTotal = productNewCount * 100;
                }

                document.getElementById(product + '-total').innerText = '$' + productTotal;
                calculateTotal();
            }

            function calculateTotal() {
                const phoneCount = getInputValue('phone');
                const caseCount = getInputValue('case');

                const totalPrice = phoneCount * 150 + caseCount * 100;
                document.getElementById('total-price').innerText = '$' + totalPrice;

                const tax = Math.round(totalPrice * 0.1);
                document.getElementById('tax-amount').innerText = '$' + tax;

                const grandTotal = totalPrice + tax;
                document.getElementById('grand-total').innerText = '$' + grandTotal;
            }

            function getInputValue(product) {
                console.log(product);
                const productInput = document.getElementById(product + '-count');
                const productCount = parseInt(productInput.value);
                return productCount;
            }