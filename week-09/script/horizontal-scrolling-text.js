document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".marquee-container");
    const marquee = document.querySelector(".js-marquee");
  
    let containerWidth = container.offsetWidth;
    let marqueeWidth = marquee.offsetWidth;
    marquee.style.left = `${containerWidth}px`;
  
    const animateMarquee = () => {
      let currentLeft = parseInt(marquee.style.left, 10);
  
      if (currentLeft < -marqueeWidth) {
        marquee.style.left = `${containerWidth}px`;
        currentLeft = containerWidth;
      } else {
        marquee.style.left = `${currentLeft - 1}px`;
      }
    };
  
    setInterval(animateMarquee,20);
  });
  
