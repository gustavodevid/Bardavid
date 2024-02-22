import '../styles/styles.scss';

const scrollers = document.querySelectorAll('.scroller');

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);
    
    const scrollerInner = scroller.querySelector('.scroller__inner');
    const scrollerInnerClone = scrollerInner.cloneNode(true); // Clone o scrollerInner

    const scrollerInnerContent = Array.from(scrollerInner.children);
    
    scrollerInnerContent.forEach(item => {
      const duplicatedItem = item.cloneNode(true); 
      duplicatedItem.setAttribute('aria-hidden', true);
      scrollerInnerClone.appendChild(duplicatedItem);
    });

    // Substitua o scrollerInner original pelo clone
    scroller.replaceChild(scrollerInnerClone, scrollerInner);
  });
}

addAnimation();

export default scrollers;
