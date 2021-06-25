import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// this mixin will play in all components that call it
export const animation = {
  mounted() {
    this.gsap.fromTo(
      //target element, when this element is in a certain position in the windows, 
      //the animation below will trigger
      this.$refs.animation,
      {
        //initial state, or starting point for the animation
        autoAlpha: 0,
        x: -50,
      },
      {
        //final state of the animation
        scrollTrigger: {
          //when the trigger is 200px above the middle of the screen
          //the animation starts
          trigger: this.$refs.animation,
          start: "top center+=200px",
        },
        //how much the animation lasts, the amount of autoAlpha 0 to 1 
        //and it's x position relative to what its CSS dictates
        duration: 1,
        autoAlpha: 1,
        x: 0,
      }
    );
  },
};
