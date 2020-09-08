/*
+++++++++++++
NAVBAR EFFECT
+++++++++++++
*/

// we will change the color of the header
const header = document.querySelector('header');
// when the home section is not visible
const sectionOne = document.querySelector('.home-intro');

// define the function
const sectionOneObserverFunction = (entries, sectionOneObserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add('nav-scrolled');
    } else {
      header.classList.remove('nav-scrolled');
    }
  });
}

// define the option's object
const sectionOneObserverOptions = {
  // this shift the upper intersection point of the observer 150px under the normal point (the top of the viewport)
  rootMargin: '-150px 0px 0px 0px',
}

// instantiate observer
const sectionOneObserver = new IntersectionObserver(sectionOneObserverFunction, sectionOneObserverOptions);

/*
+++++++++++++
FADE EFFECT
+++++++++++++
*/

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const appearOnScrollFunction = (entries, appearOnScroll) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
}

const appearOnScrollOptions = {
  threshold: 0.5, // ask for the full element to be on the view port to trigger the observer. ATTENTION: if the element is fading it migth cause problem and the observer will never trigger, better keep it to 0.
  rootMargin: "0px 0px -80px 0px"
}

const appearOnScroll = new IntersectionObserver(appearOnScrollFunction, appearOnScrollOptions);

/*
+++
RUN
+++
*/


// start observing O.o
sectionOneObserver.observe(sectionOne);

faders.forEach(fader => {
  appearOnScroll.observe(fader)
});

sliders.forEach(fader => {
  appearOnScroll.observe(fader)
});