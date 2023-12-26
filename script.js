// Turn page when clicking next or prev button
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');  // Corrected typo in 'gettAttribute'
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500);
        } else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500);
        }
    };
});

// Contact me button when clicked
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');

            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500);
        }, (index + 1) * 200 + 100);
    });
};


//create reverse index function
function reverseIndex(cindex, arr) {
    const totalPages = pages.length;
    const pageNumber = totalPages - 1 - cindex;
    return arr[pageNumber];
}

const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((page,index,arr) => {
        setTimeout(() => {
            let pge = reverseIndex(index,arr);
            pge.classList.remove('turn');

            setTimeout(() => {
                page.style.zIndex = 10 - index;
            }, 500);
        }, (index + 1) * 200 + 100);
    });
};

//opening animation
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

//openig animation cover right animation
setTimeout(()=>{
    coverRight.classList.add('turn');
},2100)

setTimeout(()=>{
    coverRight.style.zIndex = -1;
},2800)

//openig animation cover left or profile page animation
setTimeout(()=>{
    pageLeft.style.zIndex = 20;
},3200)

//openig animation all pages animation
pages.forEach((page,index,arr) => {
    setTimeout(() => {
        let pge = reverseIndex(index,arr);
        pge.classList.remove('turn');

        setTimeout(() => {
            page.style.zIndex = 10 - index;
        }, 500);
    }, (index + 1) * 200 + 2100);
});








