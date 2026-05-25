/* =========================================================
   ELEMENTS
========================================================= */

const envelope =
  document.getElementById('envelope');

const envelopeScreen =
  document.getElementById('envelopeScreen');

const mainContent =
  document.getElementById('mainContent');

const music =
  document.getElementById('bgMusic');

const musicBtn =
  document.getElementById('musicBtn');

const openRSVP =
  document.getElementById('openRSVP');

const closeRSVP =
  document.getElementById('closeRSVP');

const rsvpModal =
  document.getElementById('rsvpModal');

const rsvpForm =
  document.getElementById('rsvpForm');

const scratchOverlay =
  document.getElementById('scratchOverlay');

const navLinks =
  document.querySelectorAll('.nav-links a');

const popCards =
  document.querySelectorAll('.pop-card');

/* =========================================================
   AOS INITIALIZE
========================================================= */

AOS.init({

  duration: 1400,

  once: true,

  easing: 'ease-in-out'

});

/* =========================================================
   INITIAL SETTINGS
========================================================= */

document.body.style.overflow =
  'hidden';

mainContent.style.opacity =
  '0';

mainContent.style.display =
  'none';

let invitationOpened =
  false;

let isPlaying =
  false;

if (music) {

  music.volume =
    0.35;

}

/* =========================================================
   ENVELOPE OPEN
========================================================= */

if (envelope) {

  envelope.addEventListener(

    'click',

    async () => {

      if (invitationOpened) return;

      invitationOpened =
        true;

      envelope.classList.add('open');

      setTimeout(() => {

        envelopeScreen.style.transition =
          'opacity 1.2s ease';

        envelopeScreen.style.opacity =
          '0';

        setTimeout(async () => {

          envelopeScreen.style.display =
            'none';

          mainContent.style.display =
            'block';

          setTimeout(() => {

            mainContent.style.transition =
              'opacity 1.5s ease';

            mainContent.style.opacity =
              '1';

          }, 100);

          document.body.style.overflow =
            'auto';

          if (music) {

            try {

              await music.play();

              isPlaying =
                true;

              musicBtn.innerHTML =
                '♫';

            }

            catch (error) {

              console.log(error);

            }

          }

        }, 1200);

      }, 1000);

    }

  );

}

/* =========================================================
   MUSIC CONTROL
========================================================= */

if (musicBtn && music) {

  musicBtn.addEventListener(

    'click',

    async () => {

      if (isPlaying) {

        music.pause();

        musicBtn.innerHTML =
          '🔇';

      }

      else {

        try {

          await music.play();

          musicBtn.innerHTML =
            '♫';

        }

        catch (error) {

          console.log(error);

        }

      }

      isPlaying =
        !isPlaying;

    }

  );

}

/* =========================================================
   AUTO PAUSE / RESUME MUSIC
========================================================= */

document.addEventListener(

  'visibilitychange',

  async () => {

    if (!music) return;

    if (document.hidden) {

      if (isPlaying) {

        music.pause();

      }

    }

    else {

      if (isPlaying) {

        try {

          await music.play();

        }

        catch (error) {

          console.log(error);

        }

      }

    }

  }

);

/* =========================================================
   HERO ANIMATION
========================================================= */

window.addEventListener(

  'load',

  () => {

    const heroContent =
      document.querySelector('.hero-content');

    if (heroContent) {

      heroContent.animate(

        [

          {
            opacity: 0,
            transform: 'translateY(50px)'
          },

          {
            opacity: 1,
            transform: 'translateY(0)'
          }

        ],

        {

          duration: 1800,

          easing: 'ease-out',

          fill: 'forwards'

        }

      );

    }

  }

);

/* =========================================================
   MANDALA ROTATION
========================================================= */

const mandala =
  document.querySelector('.hero-mandala');

if (mandala) {

  mandala.animate(

    [

      {
        transform:
          'translate(-50%,-50%) rotate(0deg)'
      },

      {
        transform:
          'translate(-50%,-50%) rotate(360deg)'
      }

    ],

    {

      duration: 90000,

      iterations: Infinity,

      easing: 'linear'

    }

  );

}

/* =========================================================
   POP CARD EFFECT
========================================================= */

const popObserver =
  new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add('show');

        }

      });

    },

    {
      threshold: 0.15
    }

  );

popCards.forEach((card) => {

  popObserver.observe(card);

});

/* =========================================================
   SCRATCH EFFECT (SMOOTH MOBILE VERSION)
========================================================= */

if (scratchOverlay) {

  let scratchedPoints = 0;
  let isScratching = false;
  let rafId = null;

  scratchOverlay.style.touchAction =
    'none';

  function createScratch(x, y) {

    const scratch =
      document.createElement('div');

    scratch.style.position =
      'absolute';

    scratch.style.width =
      '55px';

    scratch.style.height =
      '55px';

    scratch.style.borderRadius =
      '50%';

    scratch.style.left =
      `${x - 27}px`;

    scratch.style.top =
      `${y - 27}px`;

    scratch.style.background =
      'rgba(0,0,0,1)';

    scratch.style.pointerEvents =
      'none';

    scratch.style.mixBlendMode =
      'destination-out';

    scratch.style.willChange =
      'transform';

    scratchOverlay.appendChild(scratch);

    scratchedPoints++;

    if (scratchedPoints > 40) {

      scratchOverlay.classList.add(
        'revealed'
      );

    }

  }

  function handleScratch(clientX, clientY) {

    const rect =
      scratchOverlay.getBoundingClientRect();

    const x =
      clientX - rect.left;

    const y =
      clientY - rect.top;

    if (rafId) return;

    rafId =
      requestAnimationFrame(() => {

        createScratch(x, y);

        rafId = null;

      });

  }

  /* =========================
     MOUSE EVENTS
  ========================= */

  scratchOverlay.addEventListener(

    'mousedown',

    () => {

      isScratching = true;

    }

  );

  window.addEventListener(

    'mouseup',

    () => {

      isScratching = false;

    }

  );

  scratchOverlay.addEventListener(

    'mouseleave',

    () => {

      isScratching = false;

    }

  );

  scratchOverlay.addEventListener(

    'mousemove',

    (e) => {

      if (!isScratching) return;

      handleScratch(
        e.clientX,
        e.clientY
      );

    }

  );

  /* =========================
     TOUCH EVENTS
  ========================= */

  scratchOverlay.addEventListener(

    'touchstart',

    (e) => {

      isScratching = true;

      e.preventDefault();

    },

    { passive: false }

  );

  scratchOverlay.addEventListener(

    'touchend',

    () => {

      isScratching = false;

    }

  );

  scratchOverlay.addEventListener(

    'touchcancel',

    () => {

      isScratching = false;

    }

  );

  scratchOverlay.addEventListener(

    'touchmove',

    (e) => {

      if (!isScratching) return;

      e.preventDefault();

      const touch =
        e.touches[0];

      handleScratch(
        touch.clientX,
        touch.clientY
      );

    },

    { passive: false }

  );

}

/* =========================================================
   RSVP MODAL
========================================================= */

if (openRSVP) {

  openRSVP.addEventListener(

    'click',

    () => {

      rsvpModal.style.display =
        'flex';

      document.body.style.overflow =
        'hidden';

    }

  );

}

if (closeRSVP) {

  closeRSVP.addEventListener(

    'click',

    () => {

      closeModal();

    }

  );

}

window.addEventListener(

  'click',

  (event) => {

    if (event.target === rsvpModal) {

      closeModal();

    }

  }

);

function closeModal() {

  rsvpModal.style.display =
    'none';

  document.body.style.overflow =
    'auto';

}

/* =========================================================
  RSVP FORM SUBMIT (NO DUPLICATE SUBMISSIONS)
========================================================= */

if (rsvpForm) {

  let isSubmitting = false;

  rsvpForm.addEventListener(

    'submit',

    async (e) => {

      e.preventDefault();

      /* =========================
         PREVENT DOUBLE CLICK
      ========================= */

      if (isSubmitting) return;

      isSubmitting = true;

      const submitBtn =
        rsvpForm.querySelector(
          'button[type="submit"]'
        );

      const successMessage =
        document.getElementById(
          'rsvpSuccessMessage'
        );

      /* =========================
         BUTTON LOADING STATE
      ========================= */

      submitBtn.disabled = true;

      submitBtn.innerHTML =
        'Submitting...';

      submitBtn.style.opacity =
        '0.7';

      submitBtn.style.cursor =
        'not-allowed';

      successMessage.innerHTML = '';

      const name =
        document.getElementById(
          'guestName'
        ).value;

      const guests =
        document.getElementById(
          'guestCount'
        ).value;

      const message =
        document.getElementById(
          'guestMessage'
        ).value;

      try {

        const response =
          await fetch(

            'https://wedding-invite-e9tn.onrender.com/rsvp',

            {

              method: 'POST',

              headers: {
                'Content-Type':
                  'application/json'
              },

              body: JSON.stringify({

                name,
                guests,
                message

              })

            }

          );

        const data =
          await response.json();

        console.log(data);

        /* =========================
           SUCCESS
        ========================= */

        if (data.success) {

          successMessage.innerHTML =
            '✨ Thank You! Your RSVP Has Been Submitted Successfully ✨';

          successMessage.style.color =
            '#f4c89c';

          successMessage.style.marginTop =
            '15px';

          successMessage.style.fontSize =
            '15px';

          successMessage.style.textAlign =
            'center';

          rsvpForm.reset();

          submitBtn.innerHTML =
            'Submitted ✓';

          submitBtn.style.opacity =
            '1';

          setTimeout(() => {

            successMessage.innerHTML =
              '';

            closeModal();

            /* RESET BUTTON */

            submitBtn.disabled = false;

            submitBtn.innerHTML =
              'Submit RSVP';

            submitBtn.style.cursor =
              'pointer';

            isSubmitting = false;

          }, 2500);

        }

        /* =========================
           FAILED
        ========================= */

        else {

          successMessage.innerHTML =
            'Failed To Submit RSVP';

          successMessage.style.color =
            'red';

          resetSubmitButton();

        }

      }

      catch (error) {

        console.log(error);

        successMessage.innerHTML =
          'Server Error';

        successMessage.style.color =
          'red';

        resetSubmitButton();

      }

      /* =========================
         RESET BUTTON FUNCTION
      ========================= */

      function resetSubmitButton() {

        submitBtn.disabled = false;

        submitBtn.innerHTML =
          'Submit RSVP';

        submitBtn.style.opacity =
          '1';

        submitBtn.style.cursor =
          'pointer';

        isSubmitting = false;

      }

    }

  );

}
/* =========================================================
   ACTIVE NAVBAR LINK
========================================================= */

navLinks.forEach((link) => {

  link.addEventListener(

    'click',

    () => {

      navLinks.forEach((item) => {

        item.classList.remove(
          'active-link'
        );

      });

      link.classList.add(
        'active-link'
      );

    }

  );

});

/* =========================================================
   SCROLL NAV ACTIVE
========================================================= */

const sections =
  document.querySelectorAll('section');

window.addEventListener(

  'scroll',

  () => {

    let current =
      '';

    sections.forEach((section) => {

      const sectionTop =
        section.offsetTop - 200;

      if (pageYOffset >= sectionTop) {

        current =
          section.getAttribute('id');

      }

    });

    navLinks.forEach((link) => {

      link.classList.remove(
        'active-link'
      );

      if (

        link.getAttribute('href') ===
        `#${current}`

      ) {

        link.classList.add(
          'active-link'
        );

      }

    });

  }

);

/* =========================================================
   SMOOTH SCROLL FIX
========================================================= */

document.querySelectorAll('a[href^="#"]')

.forEach((anchor) => {

  anchor.addEventListener(

    'click',

    function (e) {

      e.preventDefault();

      const target =
        document.querySelector(

          this.getAttribute('href')

        );

      if (target) {

        target.scrollIntoView({

          behavior: 'smooth'

        });

      }

    }

  );

});

/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(

  '%c👑 Royal Wedding Invitation Loaded Successfully',

  'font-size:20px;color:#f4c89c;font-weight:bold;'

);
/* =========================================================
   ULTRA SMOOTH INFINITE MOBILE SLIDER
========================================================= */

const dressSlider =
  document.querySelector('.dress-slider');

const dressTrack =
  document.querySelector('.dress-track');

if (dressSlider && dressTrack) {

  let currentX = 0;

  let startX = 0;

  let isDragging = false;

  let velocity = 0;

  let momentum;

  const autoSpeed = 0.45;

  /* =========================
     GPU ACCELERATION
  ========================= */

  dressTrack.style.willChange =
    'transform';

  dressTrack.style.transform =
    'translate3d(0,0,0)';

  /* =========================
     AUTO ANIMATION
  ========================= */

  function animate() {

    if (!isDragging) {

      currentX -= autoSpeed;

      const halfWidth =
        dressTrack.scrollWidth / 2;

      if (
        Math.abs(currentX)
        >= halfWidth
      ) {

        currentX = 0;

      }

      dressTrack.style.transform =
        `translate3d(${currentX}px,0,0)`;

    }

    requestAnimationFrame(
      animate
    );

  }

  animate();

  /* =========================
     START DRAG
  ========================= */

  function startDrag(x) {

    isDragging = true;

    startX = x;

    velocity = 0;

    cancelAnimationFrame(momentum);

  }

  /* =========================
     DRAGGING
  ========================= */

  function drag(x) {

    if (!isDragging) return;

    const delta =
      x - startX;

    startX = x;

    currentX += delta;

    velocity = delta;

    dressTrack.style.transform =
      `translate3d(${currentX}px,0,0)`;

  }

  /* =========================
     MOMENTUM EFFECT
  ========================= */

  function applyMomentum() {

    velocity *= 0.95;

    currentX += velocity;

    const halfWidth =
      dressTrack.scrollWidth / 2;

    if (
      Math.abs(currentX)
      >= halfWidth
    ) {

      currentX = 0;

    }

    dressTrack.style.transform =
      `translate3d(${currentX}px,0,0)`;

    if (
      Math.abs(velocity) > 0.3
    ) {

      momentum =
        requestAnimationFrame(
          applyMomentum
        );

    }

  }

  /* =========================
     END DRAG
  ========================= */

  function endDrag() {

    isDragging = false;

    applyMomentum();

  }

  /* =========================
     TOUCH EVENTS
  ========================= */

  dressSlider.addEventListener(

    'touchstart',

    (e) => {

      startDrag(
        e.touches[0].clientX
      );

    },

    { passive:true }

  );

  dressSlider.addEventListener(

    'touchmove',

    (e) => {

      drag(
        e.touches[0].clientX
      );

    },

    { passive:true }

  );

  dressSlider.addEventListener(

    'touchend',

    () => {

      endDrag();

    }

  );

  /* =========================
     MOUSE EVENTS
  ========================= */

  dressSlider.addEventListener(

    'mousedown',

    (e) => {

      startDrag(e.clientX);

    }

  );

  window.addEventListener(

    'mousemove',

    (e) => {

      drag(e.clientX);

    }

  );

  window.addEventListener(

    'mouseup',

    () => {

      endDrag();

    }

  );

} 
