import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(Draggable, ScrollTrigger);

const anim = comp => ({
  methods: {
    init: function() {
      gsap.fromTo(comp, { 
        autoAlpha: 0,
        x: -50,
      },{
        scrollTrigger: {
        trigger: comp,
        scrub: true,
        start: "top center+=200px",
        end: "top center+=100px",
        markers: "true",
        id: "test"
      },
        duration: 1,
        autoAlpha: 1,
        x: 0,
      });
    },
  },
})


export default anim