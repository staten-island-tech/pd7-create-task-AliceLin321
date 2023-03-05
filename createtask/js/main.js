import "../styles/style.css";
const DOM = {
  yes:  document.getElementById("yes"),
  no: document.getElementById("no"),
  start: document.getElementById("start"),
  restart: document.getElementById("restart"),

};

image_array = [
  {
      name:"Ace",
      joker: "false",
      img:"https://upload.wikimedia.org/wikipedia/commons/d/d3/Poker-sm-221-Ah.png",
  },
  {
      name:"Two",
      joker: "false",
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/2_of_hearts.svg/1200px-2_of_hearts.svg.png",
  }, {
      name:"Three",
      joker: "false",
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Atlas_deck_3_of_hearts.svg/1200px-Atlas_deck_3_of_hearts.svg.png",
  }, {
      name:"Four",
      joker: "false",
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/4_of_hearts.svg/1200px-4_of_hearts.svg.png",
  }, {
      name:"Five",
      joker: "false",
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/5_of_hearts.svg/706px-5_of_hearts.svg.png",
  }, {
      name:"Six",
      joker: "false",
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/6_of_hearts.svg/706px-6_of_hearts.svg.png",
  }, {
      name:"Seven",
      joker: "false",
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/7_of_hearts.svg/1200px-7_of_hearts.svg.png",
  }, {
      name:"Eight",
      joker: "false",
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/8_of_hearts.svg/1200px-8_of_hearts.svg.png",
  }, {
      name:"Nine",
      joker: "false",
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/9_of_hearts.svg/1200px-9_of_hearts.svg.png",
  }, {
      name:"Ten",
      joker: "false",
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/10_of_hearts.svg/706px-10_of_hearts.svg.png",
  }, {
      name:"Jack",
      joker: "false",
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Jack_of_hearts2.svg/706px-Jack_of_hearts2.svg.png",
  }, {
      name:"Queen",
      joker: "false",
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Queen_of_hearts2.svg/1409px-Queen_of_hearts2.svg.png",
  }, {
      name:"King",
  joker: "false",
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/English_pattern_king_of_hearts.svg/512px-English_pattern_king_of_hearts.svg.png",
  },
  {
name: "Joker",
joker: "true",
img: "https://i.pinimg.com/originals/fb/b3/69/fbb3699e5908f0769478375d57917c14.png"
  },
];

function get_random_image () {
  random_index = Math.floor(Math.random() * image_array.length);
selected_image = image_array[random_index]
document.getElementById(`image_shower`)
};

