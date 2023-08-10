// Start of JavaScript Coding...

const { createApp } = Vue;

createApp({
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "Cincinnati",
          desc:
            "Em diferentes alturas e formas, as quatro versões das mesas baixas Floema oferecem uma variedade de superfícies para satisfazer diferentes necessidades e usos em um ambiente de contrato, desde o trabalho até os momentos de relaxamento.",
          photo:
            "https://images.unsplash.com/photo-1649011327045-624a1bd2c3e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80"
        },
        {
          id: 2,
          title: "Daytona",
          desc:
            "A mesa de centro Circle de Wendelbo emula quase um truque visual. Uma moldura onde a massa e a gravidade estão suspensas, e a estrutura esbelta e delicada sustenta o tampo de mármore, como uma plataforma flutuante.",
          photo:
            "https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        },
        {
          id: 3,
          title: "Indiana",
          desc:
            "Com um visual ao mesmo tempo leve e elegante, a Mesa de Centro Workshop se encaixa perfeitamente em qualquer sala de estar, servindo tanto como mesa de centro tradicional quanto como mesa lateral.",
          photo:
            "https://images.unsplash.com/flagged/photo-1588262516915-e342186ecdf6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        },
        {
          id: 4,
          title: "Amarillo",
          desc:
            "Feita de carvalho americano maciço de origem sustentável, a Mesa Duo é composta por dois tampos separados unidos em um dos lados. Os topos são sólidos e esculpidos para criar um lábio suave. ",
          photo:
            "https://images.unsplash.com/photo-1622372738946-62e02505feb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=832&q=80"
        }
      ],
      currentNum: 0
    };
  },
  computed: {
    currentCard() {
      return this.cards[this.currentNum];
    }
  },
  methods: {
    playFoward() {
      let tl = gsap.timeline({
        defaults: {
          duration: 0.7,
          ease: "sine.out"
        },
        onComplete: () => {
          this.playReverse();
          if (this.currentNum >= 3) {
            this.currentNum = 0;
          } else {
            this.currentNum++;
          }
        }
      });
      tl.to("#mask-1", {
        yPercent: 100,
        scaleY: 1.4
      })
        .to(
          "#mask-2",
          {
            yPercent: -100,
            scaleY: 1.4
          },
          "<"
        )
        .to(
          "#card-info-title",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 0%, 0% 0%)`
          },
          "<0.4"
        )
        .to(
          "#card-info-desc",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 0%, 0% 0%)`
          },
          "<0.3"
        );
    },
    playReverse() {
      let tl = gsap.timeline({
        defaults: {
          duration: 0.7,
          ease: "sine.in"
        }
      });
      tl.to("#mask-1", {
        yPercent: -100,
        scaleY: 1.4
      })
        .to(
          "#mask-2",
          {
            yPercent: 100,
            scaleY: 1.4
          },
          "<"
        )
        .to(
          "#card-info-title",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`
          },
          "<0.2"
        )
        .to(
          "#card-info-desc",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`
          },
          "<0.3"
        );
    },
    nextCard() {
      this.playFoward();
    }
  }
}).mount("#app");

// END of JavaScript Coding...