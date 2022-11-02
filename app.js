// work on propular products carousel 
$("#popular-products").owlCarousel({
  responsive: {
    0: {
      items: 1,
    },
    550: {
      items: 2,
    },
    800: {
      items: 3,
    },
    1100: {
      items: 4,
    },
  },
});

// below the explore carousel 
$("#explore").owlCarousel({
  loop: true,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 2,
    },
    900: {
      items: 3,
    },
    1100: {
      items: 3,
    },
  },
});
