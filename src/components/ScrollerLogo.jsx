import '../styles/styles.scss';
import '../js/scroller.js';

const ScrollerLogo = () => {
    return (
        <div className="scroller" data-duration="fast">
      
        <ul className="img-list scroller__inner">
          <li>
            <img src="assets/html5.png" alt="" />
          </li>
          <li>
            <img src="assets/css3.png" alt="" />
          </li>
          <li>
            <img src="assets/java.png" alt="" />
          </li>
          <li>
            <img src="assets/spring.png" alt="" />
          </li>
          <li>
            <img src="assets/node.png" alt="" />
          </li>
          <li>
            <img src="assets/js.png" alt="" />
          </li>
        </ul>
      </div>
    )
}

export default ScrollerLogo