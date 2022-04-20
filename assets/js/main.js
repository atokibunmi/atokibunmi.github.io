/*=============== SHOW MENU ===============*/
const navMenu = $('#nav-menu'), 
      navToggle = $('#nav-toggle'),
      navClose = $('#nav-close')

/*      To show Menu       */
// Checking if constant already exists 
if (navToggle){
    navToggle.click(function(){$('#nav-menu').addClass('show-menu');})
}

/*      To Hide Menu       */
// Checking if constant already exists 
if(navClose){
    navClose.click(function(){$('#nav-menu').removeClass('show-menu')})
}  

/*=============== REMOVE MENU MOBILE ===============*/
//Removes menu bar if any of menu link elements is clicked on
//runs 'hide menu' when menu link element is clicked on
if(true){
$('.nav__link').click(function(){$('#nav-menu').removeClass('show-menu')});
}
/*=============== CHANGE BACKGROUND HEADER ===============*/
// To toggle class on and off based on viewport scroll position 
 if(true){
     window.onscroll = function(){document.documentElement.scrollTop>=50? $('header').addClass('scroll-header') : $('header').removeClass('scroll-header')} 
 }

/*=============== PROJECTS SWIPER ===============*/
// Copied from swiper.js and edited to initialize the swiper 
if (true){
  if($('.filt').width() >= 768){
    $('.popular__section').children('div').removeClass('popular__container');
    $('.popular__section').children('div').addClass('bigPopular');
  }
}            

if(true){
  if($('.filt').width() < 768){
    $('.popular__section').children('div').removeClass('bigPopular');
    $('.popular__section').children('div').addClass('popular__container');
  }
}
               
// Small Screen                           
let swiperPopular = new Swiper(".popular__container", {
  effect: "cards",
  grabCursor: true,
  loop: true
});    
// Big Screen 
let swipercopular = new Swiper(".bigPopular", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

/*=============== WORK EXPERIENCE SWIPER ===============*/
// if (true){
//   if($('.filt').width() >= 768){
//     $('.about__section').children('div').removeClass('experience__container');
//     $('.about__section').children('div').addClass('bigXperience');
//   }
// }            

// if(true){
//   if($('.filt').width() < 768){
//     $('.about__section').children('div').removeClass('bigXperience');
//     $('aboutr__section').children('div').addClass('experience__container');
//   }
// }                           
//Small Screen                            
let Experienceswiper = new Swiper(".experience__container", {
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//Big Screen
if(true){
  if($('.filt').width() >= 768){
    $('section.use').html('<section class="work-experience about__section popular section test" id="experience"><h2 class="section__title">Work Experience</h2><div class="experience__container container"><div class="experience__big"><article><h1 class="popular__title">Hamoye AI Labs</h1><h3 class="popular__subtitle">(04/01/2022 - 12/05/2022) <br> Data Science Intern</h3><br><ul><li>Data Scoping and Feature Engineering to obtain best data.</li><li>Model Development using Machine learning techniques.</li><li>Model Evaluation and Optimization using </li><li>Collaborating with Senior Developers</li></ul></article><article><h1 class="popular__title">Nestle´ FLowergate Plc </h1><h3 class="popular__subtitle">(07/05/2021 - 10/03/2022) <br> Industrial Services Engineering Trainee</h3><br><ul><li>Ensuring uninterrupted Power generation and supply.</li><li>Generation, treatemnt and distribution of portable water.</li><li>Provision, monitoring and maintenance of Factory HVAC system.</li><li>Running Factory Waste Water Treatment Plant.</li></ul></article><article><h1 class="popular__title">Naval Dockyard Limited</h1><h3 class="popular__subtitle">(25/03/2019 - 30/08/2019) <br> Engineering Trainee</h3><br><ul><li>Assisted with calculations, design drawings, fabrication and installation of parts for Nigerian Navy 25-man House Boat.</li><li>Analysed and verified all energy savings calculations to promote environmental sustainability.</li><li>Collaborated with senior engineers and offered insight </li><li>Interfaced with Project team to prepare Bill of Materials.</li></ul></article></div></div><br><br><br><a href="Bolutife Atoki - Resume.pdf" target="_blank" class="button">Link to Resume</a></section>');
  }
}

// let Xperienceswiper = new Swiper(".bigXperience", {
//   direction: "vertical",
//   slidesPerView: "auto",
//   freeMode: true,
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
//   mousewheel: true,
// });
/*=============== MIXITUP FILTER FEATURED ===============*/
// let mixerFeatured = mixitup('.featured__content', {
//   selectors: {
//       target: '.featured__card'
//   },
//   animation: {
//       duration: 300
//   }
// });

/* Link active featured */ 
const linkFeatured = $('.featured__item');

//linkFeatured.each(function(){$(this).removeClass('active-featured'); $(this).addClass('active-featured');});

if(true){
  linkFeatured.click(function() {linkFeatured.each(function(){$(this).removeClass('active-featured'); $(this).addClass('active-featured');});})
}
/*=============== SHOW SCROLL UP ===============*/ 
// To toggle class on and off based on viewport scroll position of 350
if(true){
  window.onscroll = function(){document.documentElement.scrollTop>=350? $('.scrollup').css('bottom', '3rem') : $('.scrollup').css('bottom', '-30%')} 
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
/* window.onscroll = function (){
  $('section').each(function(){
    var eleHeight = $(this).offsetHeight;
    var sectionDistance = $(this).offsetTop - 58;
    var currentPosition = window.pageYOffset;
console.log($(eleHeight));
    if(currentPosition > sectionDistance && currentPosition < (eleHeight + sectionDistance)){
      $(this).addClass('active-link')
    }
    else{
      $(this).removeClass('active-link')
    }
  })
} */

/* const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const currentPosition = window.pageYOffset

  sections.forEach(element =>{
    const eleHeight = element.offsetHeight,
          sectionDistance = element.offsetTop - 58,
          sectionId = element.getAttribute('id')

    if(currentPosition > sectionDistance && currentPosition <= (eleHeight + sectionDistance)){
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    }
    else{
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')    }      
  })
}

window.addEventListener('scroll', scrollActive) */
/*=============== SCROLL REVEAL ANIMATION ===============*/
const unEarth = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  //reset: true
})

unEarth.reveal('.home__title, .popular__container, .features__img, .featured__filters, .headerr');
unEarth.reveal('.home__subtitle', {delay: 500});
unEarth.reveal('.home__elec', {delay: 600});
unEarth.reveal('.home__img', {delay: 800});
unEarth.reveal('.home__car-data', {delay: 900, interval: 100, origin: 'bottom'});
unEarth.reveal('.home__button', {delay: 1000, origin: 'bottom'});
unEarth.reveal('.about__group, .offer__data', {origin: 'left'});
unEarth.reveal('.about__data, .offer__img', {origin: 'right'});
unEarth.reveal('.features__map', {delay: 600, origin: 'bottom'});
unEarth.reveal('.features__card', {interval: 300});
unEarth.reveal('.featured__card, .logos__content, .footer__content', {interval: 100});

