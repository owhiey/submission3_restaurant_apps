(()=>{"use strict";var n,r={756:(n,r,e)=>{e.d(r,{Z:()=>c});var A=e(537),t=e.n(A),i=e(645),a=e.n(i),o=e(667),s=e.n(o),d=new URL(e(325),e.b),l=a()(t());l.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap);"]);var p=s()(d);l.push([n.id,"* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: 'Quicksand', sans-serif;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\n.header__wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  width: 100%;\n  background-color: #eeeeee;\n  z-index: 999;\n}\n\n.header {\n  padding-left: 1.3em;\n  transition: min-height 0.3s;\n  line-height: 44px;\n}\n\n.header__inner {\n  width: 100%;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.header__title {\n  font-weight: bold;\n  font-size: 25px;\n  display: inline-block;\n  color: #212121;\n}\n\n.header__title a {\n  text-decoration: none;\n  color: #212121;\n}\n\n.header__menu {\n  cursor: pointer;\n  height: 44px;\n  display: flex;\n  flex-direction:column;\n  justify-content: space-evenly;\n  margin: 10px auto;\n  border: unset;\n}\n.header__menu span {\n  display: block;\n  width: 44px;\n  height: 5px;\n  border-radius: 3px;\n  background-color: black;\n}\n\n.nav__list {\n  padding: 0;\n  margin: 0;\n}\n\n.nav__item {\n  box-sizing: border-box;\n  display: inline-block;\n  text-align: center;\n  line-height: 24px;\n  text-transform: uppercase;\n}\n\n.nav a {\n  display: inline-block;\n  padding: 1.3em;\n  text-decoration: none;\n  color: #616161;\n}\n\n.nav a:hover {\n  text-decoration: underline;\n  color: #000;\n}\n\n.hero {\n  display: flex;\n  align-items: center;\n  min-height: 380px;\n  width: 100%;\n  text-align: center;\n  /* background-image: url(\"../../dist/images/hero-image_2-large.jpg\"); */\n  background-image: url("+p+");\n  background-position: center;\n  background-size: cover;\n  background-color: green;\n  padding-top: 100px;\n}\n\n.hero__inner {\n  margin: 0 auto;\n  max-width: 800px;\n}\n\n.hero__title {\n  color: #fff;\n  font-weight: 500;\n  font-size: 36px;\n}\n\n.hero__tagline {\n  color: #fff;\n  margin-top: 16px;\n  font-size: 18px;\n  font-weight: 300;\n}\n\n.detail-page {\n  padding-top: 80px;\n  padding-bottom: 10px;\n}\n\nmain {\n  width: 100%;\n  margin: 0 auto;\n}\n\n.content {\n  padding: 32px;\n}\n\n.content .content__heading {\n  font-weight: normal;\n}\n\n.expolre {\n  width: 100%;\n  margin: 60px auto;\n  text-align: center;\n}\n\n.expolre__label {\n  font-size: 32px;\n  font-weight: lighter;\n}\n\n.expolre__label::after {\n  content: '';\n  margin-top: 16px;\n  display: block;\n  border-bottom: 1px solid #eeeeee;\n}\n\n.cards {\n  margin: 32px auto auto;\n  text-align: left;\n}\n\n.card-item {\n  margin: 16px 0;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  width: 100%;\n  border-radius: 5px;\n  overflow: hidden;\n  height: 800px;\n}\n\n.card-item__badge {\n  background-color: #15518d;\n  color: white;\n  padding: 5px;\n  width: fit-content;\n  position: relative;\n  bottom: 230px;\n}\n\n.card-item__content {\n  padding: 16px 32px 32px 32px;\n}\n\n.card-item__thumbnail {\n  width: 100%;\n}\n\n.card-item__title {\n  font-weight: 500;\n  font-size: 18px;\n  margin-top: 16px;\n  transition: 0.3s opacity;\n}\n\n.card-item__title:hover {\n  opacity: 0.5;\n}\n\n.card-item__title a {\n  text-decoration: none;\n  color: inherit;\n}\n\n.card-item__description {\n  margin-top: 16px;\n  font-size: 14px;\n  line-height: 1.5em;\n}\n\n/*\n  restaurants\n*/\n\n.restaurants {\n  /* display: grid;\n  grid-template-columns: 1fr;\n  gap: 16px; */\n  margin: 32px 0;\n}\n\n\n/*\n  restaurant Item\n*/\n\n.restaurant-item {\n  width: 100%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.restaurant-item__header {\n  position: relative;\n}\n\n.restaurant-item .restaurant-item__header .restaurant-item__header__poster {\n  width: 100%;\n}\n\n.restaurant-item .restaurant-item__header .restaurant-item__header__rating {\n  position: absolute;\n  padding: 8px;\n  bottom: 20px;\n  left: 0;\n  display: inline-block;\n  background-color: black;\n  color: white;\n}\n\n.restaurant-item .restaurant-item__header .restaurant-item__header__rating .restaurant-item__header__rating__score {\n  margin-left: 10px;\n}\n\n.restaurant-item .restaurant-item__content {\n  padding: 16px;\n}\n\n.restaurant-item .restaurant-item__content h3 {\n  margin: 0 0 10px 0;\n}\n\n.restaurant-item .restaurant-item__content h3 a {\n  color: #db0000;\n  text-decoration: none;\n}\n\n.restaurant-item .restaurant-item__content p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 4; /* number of lines to show */\n  -webkit-box-orient: vertical;\n}\n\n\n/*\n  restaurant\n*/\n\n.restaurant {\n  margin: 0 auto;\n  width: 100%;\n  max-width: 800px;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 18px 16px;\n}\n\n.restaurant .restaurant__poster {\n  width: 100%;\n  max-width: 400px;\n}\n\n.restaurant .restaurant__info h4 {\n  margin: 8px 0;\n}\n\n/*\n  Like\n*/\n\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #db0000;\n  \n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n  \n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n\nfooter {\n  background-color: #2c3e50;\n  color: white;\n  padding: 2em;\n  width: 100%;\n  text-align: center;\n}","",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"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",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap');\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: 'Quicksand', sans-serif;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\n.header__wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  width: 100%;\n  background-color: #eeeeee;\n  z-index: 999;\n}\n\n.header {\n  padding-left: 1.3em;\n  transition: min-height 0.3s;\n  line-height: 44px;\n}\n\n.header__inner {\n  width: 100%;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.header__title {\n  font-weight: bold;\n  font-size: 25px;\n  display: inline-block;\n  color: #212121;\n}\n\n.header__title a {\n  text-decoration: none;\n  color: #212121;\n}\n\n.header__menu {\n  cursor: pointer;\n  height: 44px;\n  display: flex;\n  flex-direction:column;\n  justify-content: space-evenly;\n  margin: 10px auto;\n  border: unset;\n}\n.header__menu span {\n  display: block;\n  width: 44px;\n  height: 5px;\n  border-radius: 3px;\n  background-color: black;\n}\n\n.nav__list {\n  padding: 0;\n  margin: 0;\n}\n\n.nav__item {\n  box-sizing: border-box;\n  display: inline-block;\n  text-align: center;\n  line-height: 24px;\n  text-transform: uppercase;\n}\n\n.nav a {\n  display: inline-block;\n  padding: 1.3em;\n  text-decoration: none;\n  color: #616161;\n}\n\n.nav a:hover {\n  text-decoration: underline;\n  color: #000;\n}\n\n.hero {\n  display: flex;\n  align-items: center;\n  min-height: 380px;\n  width: 100%;\n  text-align: center;\n  /* background-image: url(\"../../dist/images/hero-image_2-large.jpg\"); */\n  background-image: url(\"../public/images/heros/hero-image_2-large.jpg\");\n  background-position: center;\n  background-size: cover;\n  background-color: green;\n  padding-top: 100px;\n}\n\n.hero__inner {\n  margin: 0 auto;\n  max-width: 800px;\n}\n\n.hero__title {\n  color: #fff;\n  font-weight: 500;\n  font-size: 36px;\n}\n\n.hero__tagline {\n  color: #fff;\n  margin-top: 16px;\n  font-size: 18px;\n  font-weight: 300;\n}\n\n.detail-page {\n  padding-top: 80px;\n  padding-bottom: 10px;\n}\n\nmain {\n  width: 100%;\n  margin: 0 auto;\n}\n\n.content {\n  padding: 32px;\n}\n\n.content .content__heading {\n  font-weight: normal;\n}\n\n.expolre {\n  width: 100%;\n  margin: 60px auto;\n  text-align: center;\n}\n\n.expolre__label {\n  font-size: 32px;\n  font-weight: lighter;\n}\n\n.expolre__label::after {\n  content: '';\n  margin-top: 16px;\n  display: block;\n  border-bottom: 1px solid #eeeeee;\n}\n\n.cards {\n  margin: 32px auto auto;\n  text-align: left;\n}\n\n.card-item {\n  margin: 16px 0;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  width: 100%;\n  border-radius: 5px;\n  overflow: hidden;\n  height: 800px;\n}\n\n.card-item__badge {\n  background-color: #15518d;\n  color: white;\n  padding: 5px;\n  width: fit-content;\n  position: relative;\n  bottom: 230px;\n}\n\n.card-item__content {\n  padding: 16px 32px 32px 32px;\n}\n\n.card-item__thumbnail {\n  width: 100%;\n}\n\n.card-item__title {\n  font-weight: 500;\n  font-size: 18px;\n  margin-top: 16px;\n  transition: 0.3s opacity;\n}\n\n.card-item__title:hover {\n  opacity: 0.5;\n}\n\n.card-item__title a {\n  text-decoration: none;\n  color: inherit;\n}\n\n.card-item__description {\n  margin-top: 16px;\n  font-size: 14px;\n  line-height: 1.5em;\n}\n\n/*\n  restaurants\n*/\n\n.restaurants {\n  /* display: grid;\n  grid-template-columns: 1fr;\n  gap: 16px; */\n  margin: 32px 0;\n}\n\n\n/*\n  restaurant Item\n*/\n\n.restaurant-item {\n  width: 100%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.restaurant-item__header {\n  position: relative;\n}\n\n.restaurant-item .restaurant-item__header .restaurant-item__header__poster {\n  width: 100%;\n}\n\n.restaurant-item .restaurant-item__header .restaurant-item__header__rating {\n  position: absolute;\n  padding: 8px;\n  bottom: 20px;\n  left: 0;\n  display: inline-block;\n  background-color: black;\n  color: white;\n}\n\n.restaurant-item .restaurant-item__header .restaurant-item__header__rating .restaurant-item__header__rating__score {\n  margin-left: 10px;\n}\n\n.restaurant-item .restaurant-item__content {\n  padding: 16px;\n}\n\n.restaurant-item .restaurant-item__content h3 {\n  margin: 0 0 10px 0;\n}\n\n.restaurant-item .restaurant-item__content h3 a {\n  color: #db0000;\n  text-decoration: none;\n}\n\n.restaurant-item .restaurant-item__content p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 4; /* number of lines to show */\n  -webkit-box-orient: vertical;\n}\n\n\n/*\n  restaurant\n*/\n\n.restaurant {\n  margin: 0 auto;\n  width: 100%;\n  max-width: 800px;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 18px 16px;\n}\n\n.restaurant .restaurant__poster {\n  width: 100%;\n  max-width: 400px;\n}\n\n.restaurant .restaurant__info h4 {\n  margin: 8px 0;\n}\n\n/*\n  Like\n*/\n\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #db0000;\n  \n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n  \n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n\nfooter {\n  background-color: #2c3e50;\n  color: white;\n  padding: 2em;\n  width: 100%;\n  text-align: center;\n}"],sourceRoot:""}]);const c=l},948:(n,r,e)=>{e.d(r,{Z:()=>c});var A=e(537),t=e.n(A),i=e(645),a=e.n(i),o=e(667),s=e.n(o),d=new URL(e(403),e.b),l=a()(t()),p=s()(d);l.push([n.id,'.restaurants {\r\n    display: grid;\r\n    grid-row-gap: 10px;\r\n}\r\n\r\n@media screen and (max-width: 499px) {\r\n    .nav {\r\n        z-index: 10;\r\n        background-color: #fff;\r\n        width: 300px;\r\n        position: absolute;\r\n        padding-top: 300px;\r\n        \r\n        /* This trasform moves the drawer off canvas. */\r\n        -webkit-transform: translate(-300px, 0);\r\n        transform: translate(-300px, 0);\r\n\r\n        /* Optionally, we animate the drawer. */\r\n        transition: transform 0.3s ease;\r\n    }\r\n\r\n    .hero {\r\n        /* background-color: url("../../dist/images/hero-image_2-small.jpg"); */\r\n        background-color: url('+p+');\r\n    }\r\n\r\n    .open {\r\n        -webkit-transform: translate(0, 0);\r\n        transform: translate(0, 0);\r\n    }\r\n\r\n    .nav__item {\r\n        display: list-item;\r\n        border-bottom: 1px solid #E0E0E0;\r\n        width: 100%;\r\n        text-align: left;\r\n    }\r\n\r\n    .header {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n        flex-direction: row-reverse;\r\n    }\r\n\r\n    .header__inner {\r\n        padding-left: 1.3em;\r\n    }\r\n\r\n    .card-item {\r\n        height: fit-content;\r\n    }\r\n\r\n    .card-item__title {\r\n        font-size: 35px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 500px) {\r\n    .header__menu {\r\n        display: none;\r\n    }\r\n    .card-item__title {\r\n        font-size: 38px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 700px) {\r\n    .restaurants {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr;\r\n        grid-column-gap: 10px;\r\n        grid-row-gap: 16px;\r\n    }\r\n\r\n    /* .hero {\r\n        background-image: url("../public/images/heros/hero-image_2-large.jpg");\r\n    } */\r\n}\r\n\r\n@media screen and (min-width: 900px) {\r\n    .restaurants {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n    .hero {\r\n        min-width: 1000px;\r\n    }\r\n    main {\r\n        max-width: 1200px;\r\n    }\r\n    .card-item {\r\n        height: 800px;\r\n    }\r\n}',"",{version:3,sources:["webpack://./src/styles/responsive.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI;QACI,WAAW;QACX,sBAAsB;QACtB,YAAY;QACZ,kBAAkB;QAClB,kBAAkB;;QAElB,+CAA+C;QAC/C,uCAAuC;QACvC,+BAA+B;;QAE/B,uCAAuC;QACvC,+BAA+B;IACnC;;IAEA;QACI,uEAAuE;QACvE,yDAAsE;IAC1E;;IAEA;QACI,kCAAkC;QAClC,0BAA0B;IAC9B;;IAEA;QACI,kBAAkB;QAClB,gCAAgC;QAChC,WAAW;QACX,gBAAgB;IACpB;;IAEA;QACI,aAAa;QACb,8BAA8B;QAC9B,mBAAmB;QACnB,2BAA2B;IAC/B;;IAEA;QACI,mBAAmB;IACvB;;IAEA;QACI,mBAAmB;IACvB;;IAEA;QACI,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,aAAa;IACjB;IACA;QACI,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,aAAa;QACb,8BAA8B;QAC9B,qBAAqB;QACrB,kBAAkB;IACtB;;IAEA;;OAEG;AACP;;AAEA;IACI;QACI,aAAa;QACb,kCAAkC;IACtC;AACJ;;AAEA;IACI;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,aAAa;IACjB;AACJ",sourcesContent:['.restaurants {\r\n    display: grid;\r\n    grid-row-gap: 10px;\r\n}\r\n\r\n@media screen and (max-width: 499px) {\r\n    .nav {\r\n        z-index: 10;\r\n        background-color: #fff;\r\n        width: 300px;\r\n        position: absolute;\r\n        padding-top: 300px;\r\n        \r\n        /* This trasform moves the drawer off canvas. */\r\n        -webkit-transform: translate(-300px, 0);\r\n        transform: translate(-300px, 0);\r\n\r\n        /* Optionally, we animate the drawer. */\r\n        transition: transform 0.3s ease;\r\n    }\r\n\r\n    .hero {\r\n        /* background-color: url("../../dist/images/hero-image_2-small.jpg"); */\r\n        background-color: url("../public/images/heros/hero-image_2-small.jpg");\r\n    }\r\n\r\n    .open {\r\n        -webkit-transform: translate(0, 0);\r\n        transform: translate(0, 0);\r\n    }\r\n\r\n    .nav__item {\r\n        display: list-item;\r\n        border-bottom: 1px solid #E0E0E0;\r\n        width: 100%;\r\n        text-align: left;\r\n    }\r\n\r\n    .header {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n        flex-direction: row-reverse;\r\n    }\r\n\r\n    .header__inner {\r\n        padding-left: 1.3em;\r\n    }\r\n\r\n    .card-item {\r\n        height: fit-content;\r\n    }\r\n\r\n    .card-item__title {\r\n        font-size: 35px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 500px) {\r\n    .header__menu {\r\n        display: none;\r\n    }\r\n    .card-item__title {\r\n        font-size: 38px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 700px) {\r\n    .restaurants {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr;\r\n        grid-column-gap: 10px;\r\n        grid-row-gap: 16px;\r\n    }\r\n\r\n    /* .hero {\r\n        background-image: url("../public/images/heros/hero-image_2-large.jpg");\r\n    } */\r\n}\r\n\r\n@media screen and (min-width: 900px) {\r\n    .restaurants {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n    .hero {\r\n        min-width: 1000px;\r\n    }\r\n    main {\r\n        max-width: 1200px;\r\n    }\r\n    .card-item {\r\n        height: 800px;\r\n    }\r\n}'],sourceRoot:""}]);const c=l},596:(n,r,e)=>{e.d(r,{Z:()=>o});var A=e(537),t=e.n(A),i=e(645),a=e.n(i)()(t());a.push([n.id,".skip-link {\r\n    position: absolute;\r\n    top: -45px;\r\n    left: 0;\r\n    background-color: #173ebf;\r\n    color: white;\r\n    padding: 11px;\r\n    z-index: 1000;\r\n}\r\n  \r\n.skip-link:focus {\r\n    top: 0;\r\n}","",{version:3,sources:["webpack://./src/styles/skip-link.css"],names:[],mappings:"AAAA;IACI,kBAAkB;IAClB,UAAU;IACV,OAAO;IACP,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,MAAM;AACV",sourcesContent:[".skip-link {\r\n    position: absolute;\r\n    top: -45px;\r\n    left: 0;\r\n    background-color: #173ebf;\r\n    color: white;\r\n    padding: 11px;\r\n    z-index: 1000;\r\n}\r\n  \r\n.skip-link:focus {\r\n    top: 0;\r\n}"],sourceRoot:""}]);const o=a},46:(n,r,e)=>{var A=e(379),t=e.n(A),i=e(795),a=e.n(i),o=e(569),s=e.n(o),d=e(565),l=e.n(d),p=e(216),c=e.n(p),C=e(589),B=e.n(C),g=e(756),m={};m.styleTagTransform=B(),m.setAttributes=l(),m.insert=s().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=c(),t()(g.Z,m),g.Z&&g.Z.locals&&g.Z.locals},362:(n,r,e)=>{var A=e(379),t=e.n(A),i=e(795),a=e.n(i),o=e(569),s=e.n(o),d=e(565),l=e.n(d),p=e(216),c=e.n(p),C=e(589),B=e.n(C),g=e(948),m={};m.styleTagTransform=B(),m.setAttributes=l(),m.insert=s().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=c(),t()(g.Z,m),g.Z&&g.Z.locals&&g.Z.locals},146:(n,r,e)=>{var A=e(379),t=e.n(A),i=e(795),a=e.n(i),o=e(569),s=e.n(o),d=e(565),l=e.n(d),p=e(216),c=e.n(p),C=e(589),B=e.n(C),g=e(596),m={};m.styleTagTransform=B(),m.setAttributes=l(),m.insert=s().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=c(),t()(g.Z,m),g.Z&&g.Z.locals&&g.Z.locals}},e={};function A(n){var t=e[n];if(void 0!==t)return t.exports;var i=e[n]={id:n,exports:{}};return r[n](i,i.exports,A),i.exports}A.m=r,n=[],A.O=(r,e,t,i)=>{if(!e){var a=1/0;for(l=0;l<n.length;l++){for(var[e,t,i]=n[l],o=!0,s=0;s<e.length;s++)(!1&i||a>=i)&&Object.keys(A.O).every((n=>A.O[n](e[s])))?e.splice(s--,1):(o=!1,i<a&&(a=i));if(o){n.splice(l--,1);var d=t();void 0!==d&&(r=d)}}return r}i=i||0;for(var l=n.length;l>0&&n[l-1][2]>i;l--)n[l]=n[l-1];n[l]=[e,t,i]},A.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return A.d(r,{a:r}),r},A.d=(n,r)=>{for(var e in r)A.o(r,e)&&!A.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},A.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),A.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;A.g.importScripts&&(n=A.g.location+"");var r=A.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var e=r.getElementsByTagName("script");e.length&&(n=e[e.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),A.p=n})(),(()=>{A.b=document.baseURI||self.location.href;var n={954:0};A.O.j=r=>0===n[r];var r=(r,e)=>{var t,i,[a,o,s]=e,d=0;if(a.some((r=>0!==n[r]))){for(t in o)A.o(o,t)&&(A.m[t]=o[t]);if(s)var l=s(A)}for(r&&r(e);d<a.length;d++)i=a[d],A.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return A.O(l)},e=self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[];e.forEach(r.bind(null,0)),e.push=r.bind(null,e.push.bind(e))})(),A.nc=void 0;var t=A.O(void 0,[666,582,193,337,268],(()=>A(253)));t=A.O(t)})();
//# sourceMappingURL=app~d1658f4b.bundle.js.map