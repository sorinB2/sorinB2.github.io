document.addEventListener("DOMContentLoaded", () => {
    
  const brandNames = document.querySelectorAll("#product__brand h3"),
        productQuantities = document.querySelectorAll("#product__quantity h3"),
        brandLabels = document.querySelectorAll(".brand__label"),
        quantityLabels = document.querySelectorAll(".quantity__label"),
        allProductsBtn = document.querySelector(".all__products");
        
  brandNames.forEach(brand => {
    brand.addEventListener("click", () => {
      brandNames.forEach(item => {
        item.classList.remove("button__clicked");
      });
      productQuantities.forEach(item => {
        item.classList.remove("button__clicked");
      });
      allProductsBtn.classList.remove("button__clicked");
      brandLabels.forEach(label => {
        label.parentElement.parentElement.parentElement.classList.add("hide", "short__fade");
        if (brand.innerHTML == label.innerHTML) {
          label.parentElement.parentElement.parentElement.classList.remove("hide");
          brand.classList.add("button__clicked");
        }
      })
    })
  })

  productQuantities.forEach(q => {
    q.addEventListener("click", () => {
      productQuantities.forEach(item => {
        item.classList.remove("button__clicked");
      });
      brandNames.forEach(item => {
        item.classList.remove("button__clicked");
      });
      allProductsBtn.classList.remove("button__clicked");
      quantityLabels.forEach(label => {
        label.parentElement.parentElement.parentElement.classList.add("hide", "short__fade");
        if (q.innerHTML == label.innerHTML) {
          label.parentElement.parentElement.parentElement.classList.remove("hide");
          q.classList.add("button__clicked");
        }
      })
    })
  })

  allProductsBtn.addEventListener("click", () => {
    document.querySelectorAll(".products__page__card").forEach(item => {
      item.classList.remove("short__fade");
      item.classList.add("hide");
    })
    document.querySelectorAll(".products__page__card").forEach(item => {
      item.classList.add("short__fade");
      item.classList.remove("hide");
      productQuantities.forEach(item => {
        item.classList.remove("button__clicked");
      });
      brandNames.forEach(item => {
        item.classList.remove("button__clicked");
      });
      allProductsBtn.classList.add("button__clicked");
    })
  })

})

