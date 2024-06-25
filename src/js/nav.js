export function navToGitHub() {
    window.open("https://github.com/maxtbuchholz", "gitHub");
}
export function startEmail() {
    window.open("mailto:maxtbuchholz@gmail.com?&subject=test&body=mail", "email");
    // window.open("mailto:maxtbuchholz@gmail.com", "email");
    // window.location.href = "mailto:user@example.com?subject=Subject&body=message%20goes%20here";
}
export function scrollToInstant(name){
    if(name != null){
    if(name === "home"){
        name = "top";
    }
    var element = document.getElementById(name);
    var container = document.getElementById("sectionContainer");
    if((element != null) && (container != null)){
        // element.scrollIntoView({ behavior: "smooth" });
        container.scrollTo({
            top: element.offsetTop - 100,
            behavior: "instant"
          });
    }
}
}

// easing functions http://goo.gl/5HLl8
Math.easeInOutQuad = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) {
      return c/2*t*t + b
    }
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
  };
Math.easeInCubic = function(t, b, c, d) {
    var tc = (t/=d)*t*t;
    return b+c*(tc);
  };
Math.inOutQuintic = function(t, b, c, d) {
    var ts = (t/=d)*t,
    tc = ts*t;
    return b+c*(6*tc*ts + -15*ts*ts + 10*tc);
  };
 // requestAnimationFrame for Smart Animating http://goo.gl/sx5sts
var requestAnimFrame = (function(){
    return  window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function( callback ){ window.setTimeout(callback, 1000 / 60); };
  })();
export function scrollTo(target, callback, duration) {
    let scrollWindow = document.getElementById("sectionContainer");
    if (callback && typeof(callback) === 'function') {
        callback(true);
        setTimeout( function() { callback(false); }, duration * 4);
      }
      target = target.toLowerCase();
    if(target === "home"){
        target = "top";
    }
    let to = document.getElementById(target).offsetTop - 100;
    function move(amount, scrollWindow) {
      scrollWindow.scrollTop = amount;
    }
    function position(scrollWindow) {
      return scrollWindow.scrollTop;
    }
    var start = position(scrollWindow),
      change = to - start,
      currentTime = 0,
      increment = 20;
    duration = (typeof(duration) === 'undefined') ? 500 : duration;
    var animateScroll = function() {
      // increment the time
      currentTime += increment;
      // find the value with the quadratic in-out easing function
      var val = Math.easeInOutQuad(currentTime, start, change, duration);
      // move the document.body
      move(val, scrollWindow);
      // do the animation unless its over
      if (currentTime < duration) {
        requestAnimFrame(animateScroll);
      } else {
        if (callback && typeof(callback) === 'function') {
          // the animation is done so lets callback
        //   callback(false);
        //   console.log('callback');
        }
      }
    };
    animateScroll();
  }