document.addEventListener("DOMContentLoaded", () => {


    // Burger menu

    let menuBtn = document.querySelector(".menu__btn__burger");
    let menuOpen = false;

    menuBtn.addEventListener("click", () => {
        if (!menuOpen) {
            menuBtn.classList.add("open");
            menuOpen = true;
        } else {
            dropDownMenu.style.left = "-100vw";
            menuBtn.classList.remove("open");
            menuOpen = false;
        }
    })

    // Contact section

    const contactBtn = document.querySelector(".btn"),
      contactSection = document.querySelector("#contact__section"),
      closeBtn = document.querySelector("#close"),
      cover = document.querySelector("#bkg__cover");

    contactBtn.addEventListener("click", () => {
        contactSection.classList.add("active");
        cover.classList.add("show");
    })
    closeBtn.addEventListener("click", () => {
        contactSection.classList.remove("active");
        cover.classList.remove("show");
    })


    // Drop down menu

    const dropDownBtn = document.querySelector("#drop__down__btn"),
          dropDownMenu = document.querySelector("#drop__down"),
          pageCover = document.querySelector("#bkg__cover__menu"),
          dropDownListItems = document.querySelectorAll(".drop__down__item"),
          dropDownContent = document.querySelectorAll(".menu__content"),
          dropDownImage = document.querySelectorAll(".drop__down__image");

    if (window.innerWidth > 1040) {
        // document.getElementById('drop__down__produse').href="produse.html";
        dropDownBtn.addEventListener("mouseenter", () => {
            dropDownMenu.classList.add("drop__down__appear");
            pageCover.classList.add("show");
        })
        dropDownBtn.addEventListener("mouseleave", () => {
            pageCover.classList.remove("show");
        })
    
        dropDownListItems.forEach((item, i) => {
            item.addEventListener("mouseenter", () => {
                dropDownListItems.forEach(item => {
                    item.classList.remove("drop__down__active");
                    // item.style.fontSize = 1 + "rem";
                })
                dropDownContent.forEach(item => {
                    item.classList.remove("show");
                });
                dropDownImage.forEach(item => {
                    item.classList.remove("show");
                });
    
                item.classList.add("drop__down__active");
                // item.style.fontSize = 1.15 + "rem";
                dropDownContent[i].classList.add("show");
                dropDownImage[i].classList.add("show");
            });
        })
    }

    if (window.innerWidth <= 1040) {
        document.getElementById('drop__down__produse').href="javascript:void(0)";
        dropDownBtn.addEventListener("click", () => {
            dropDownMenu.style.left = "0";
        })
        dropDownImage.forEach(item => {
            item.classList.remove("show");
        });


        dropDownListItems.forEach((item, i) => {
            item.addEventListener("click", () => {
                dropDownListItems.forEach(item => {
                    item.classList.remove("drop__down__active");
                    // item.style.fontSize = 1 + "rem";
                })
                dropDownContent.forEach(item => {
                    item.classList.remove("show");
                });
                
    
                item.classList.add("drop__down__active");
                // item.style.fontSize = 1.15 + "rem";
                dropDownContent[i].classList.add("show");
            });
        })
    }


    // Product Tabs

    const tabBtns = document.querySelectorAll(".tabheader__item"),
          tabContent = document.querySelectorAll(".tab__content"),
          tabImage = document.querySelectorAll("#tabs__photos img");

    tabBtns.forEach((item, i) => {
        item.addEventListener("click", () => {
            tabBtns.forEach(item => {
                item.classList.remove("active")
            });
            tabContent.forEach(item => {
                item.classList.remove("active", "fade")
            });
            tabImage.forEach(item => {
                item.classList.remove("active", "tab__appear")
            });

            tabBtns[i].classList.toggle("active");
            tabContent[i].classList.toggle("active");
            tabContent[i].classList.toggle("fade");
            tabImage[i].classList.toggle("active");
            tabImage[i].classList.toggle("tab__appear");
        })
    })


        // Draggable slider product tabs

    const tabWrapper = document.querySelector(".tab__items__wrapper"),
    tabInner = document.querySelector(".tab__inner");

    let isPressedDown = false,
        cursorX;
    
    tabWrapper.addEventListener("mousedown", (e) => {
        isPressedDown = true;
        cursorX = e.clientX - 16 - tabInner.offsetLeft;
    })
    window.addEventListener("mouseup", (e) => {
        isPressedDown = false;
    })
    tabWrapper.addEventListener("mousemove", (e) => {
        if (!isPressedDown) return;
        e.preventDefault();
        tabInner.style.left = `${e.clientX - cursorX}px`;
        boundTabs();
    })
    tabWrapper.addEventListener("touchstart", (e) => {
        isPressedDown = true;
        cursorX = e.touches[0].clientX - 16 - tabInner.offsetLeft;
    })
    window.addEventListener("touchend", (e) => {
        isPressedDown = false;
    })
    tabWrapper.addEventListener("touchmove", (e) => {
        if (isPressedDown) {
            e.preventDefault();
            tabInner.style.left = `${e.touches[0].clientX - cursorX}px`;
            boundTabs();
        } else {
            return;
        };
        
    })
    function boundTabs() {
        const tabWrapperRect = tabWrapper.getBoundingClientRect(),
                tabInnerRect = tabInner.getBoundingClientRect();
                
        if (parseInt(tabInner.style.left) > 0) {
            tabInner.style.left = 0;
        } else if (tabInnerRect.right < tabWrapperRect.right) {
            tabInner.style.left = `-${tabInnerRect.width - tabWrapperRect.width}px`;
        }
    }


    // Product slider

    const slides = document.querySelectorAll(".product__card"),
          prev = document.querySelector("#product__prev"),
          next = document.querySelector("#product__next"),
          slidesWrapper = document.querySelector(".product__wrapper"),
          slidesField = document.querySelector(".product__inner"),
          width = window.getComputedStyle(slides[0]).width,
          padding = window.getComputedStyle(slides[0]).getPropertyValue("margin-right");

    slidesField.style.width = 100 * (slides.length/slidesWrapper.length) + "%";
    slidesField.style.display = "flex";
    slidesField.style.transition = "0.5s all";
    let offset = 0;
    next.addEventListener("click", () => {
        if (offset == (+width.slice(0, width.length - 2) + +padding.slice(0, padding.length - 2)) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2) + +padding.slice(0, padding.length - 2);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
    })
    prev.addEventListener("click", () => {
        if (offset == 0) {
            offset = (+width.slice(0, width.length - 2) + +padding.slice(0, padding.length - 2)) * (slides.length - 1);
        } else {
            offset -= +width.slice(0, width.length - 2) + +padding.slice(0, padding.length - 2);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
    })


    // Blog slider

    const blogSlides = document.querySelectorAll(".blog__card"),
          blogPrev = document.querySelector("#blog__prev"),
          blogNext = document.querySelector("#blog__next"),
          blogSlidesWrapper = document.querySelector(".blog__wrapper"),
          blogSlidesField = document.querySelector(".blog__inner"),
          blogWidth = window.getComputedStyle(blogSlides[0]).width,
          blogPadding = window.getComputedStyle(blogSlides[0]).getPropertyValue("margin-right");

    blogSlidesField.style.width = 100 * (blogSlides.length/blogSlidesWrapper.length) + "%";
    blogSlidesField.style.display = "flex";
    blogSlidesField.style.transition = "0.5s all";

    let blogOffset = 0;
    blogNext.addEventListener("click", () => {
        if (blogOffset == (+blogWidth.slice(0, blogWidth.length - 2) + +blogPadding.slice(0, padding.length - 2)) * (blogSlides.length - 1)) {
            blogOffset = 0;
        } else {
            blogOffset += (+blogWidth.slice(0, blogWidth.length - 2) + +blogPadding.slice(0, padding.length - 2));
        }
        blogSlidesField.style.transform = `translateX(-${blogOffset}px)`;
    })

    blogPrev.addEventListener("click", () => {
        if (blogOffset == 0) {
            blogOffset = (+blogWidth.slice(0, blogWidth.length - 2) + +blogPadding.slice(0, padding.length - 2)) * (blogSlides.length - 1);
        } else {
            blogOffset -= (+blogWidth.slice(0, blogWidth.length - 2) + +blogPadding.slice(0, padding.length - 2));
        }
        blogSlidesField.style.transform = `translateX(-${blogOffset}px)`;
    })



})




