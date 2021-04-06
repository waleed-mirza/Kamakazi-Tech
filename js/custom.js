$(document).ready(() => {
    new WOW().init();
});
// const dynamic = document.querySelectorAll('.dynamic');
// function func() {
//     const scrollTopPosition = document.documentElement.scrollTop || document.body.scrollTop;
//     const scrollBottomPositon = scrollTopPosition + window.innerHeight;
//     dynamic.forEach((element) => {
//         const elementTopPosition = element.getBoundingClientRect().top;
//         const elementBottomPosition = elementTopPosition + element.offsetHeight
//         console.log(elementBottomPosition);
//         if (elementBottomPosition >= scrollTopPosition && elementTopPosition <= scrollBottomPositon) {
//             element.classList.add('active');
//         }
//         else {
//             element.classList.remove('active');
//         }
//     })

// }
// window.onscroll = () => {
//     func();
// }