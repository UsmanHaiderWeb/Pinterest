let searchbar = document.querySelector(".searchbar input");
let page1_content = [
  {
    name: "Allah Ho",
    url: "pin14.jpg",
    profile: "Usman Haider",
    profile_pic: "pin4.webp",
  },
  {
    name: "Gaming Board",
    url: "pin1.jpg",
    profile: "Usman Haider",
    profile_pic: "pin4.webp",
  },
  {
    name: "Movie Website",
    url: "web4.jpg",
    profile: "Usman Haider",
    profile_pic: "pin4.webp",
  },
  {
    name: "Fictionous Exit",
    url: "pin2.jpg",
    profile: "Usman Haider",
    profile_pic: "pin4.webp",
  },
  {
    name: "Car Toys",
    url: "pin3.jpg",
    profile: "Usman Haider",
    profile_pic: "pin4.webp",
  },
  {
    name: "Antique Gallery",
    url: "pin5.jpg",
    profile: "Usman Haider",
    profile_pic: "pin4.webp",
  },
  {
    name: "Library Design",
    url: "pin19.jpg",
    profile: "Usman Haider",
    profile_pic: "pin4.webp",
  },
  {
    name: "Pokemons",
    url: "pin6.jpg",
    profile: "Usman Haider",
    profile_pic: "pin4.webp",
  },
  {
    name: "Smiling Emojis",
    url: "pin7.jpg",
    profile: "Usman Haider",
    profile_pic: "pin4.webp",
  },
  {
    name: "Satisfying Melon",
    url: "pin8.jpg",
    profile: "Usman Haider",
    profile_pic: "pin4.webp",
  },
  {
    name: "John Wick",
    url: "pin9.jpg",
    profile: "Usman Haider",
    profile_pic: "pin4.webp",
  },
  {
    name: "Fast & Furious Sherong",
    url: "pin10.jpg",
    profile: "Usman Haider",
    profile_pic: "pin4.webp",
  },
  {
    name: "Bugati",
    url: "pin11.jpg",
    profile: "Usman Haider",
    profile_pic: "pin4.webp",
  },
  {
    name: "Fast & Furious",
    url: "pin12.jpg",
    profile: "Usman Haider",
    profile_pic: "pin4.webp",
  },
  {
    name: "Futurious Radio",
    url: "pin13.jpg",
    profile: "Usman Haider",
    profile_pic: "pin4.webp",
  },
  {
    name: "CCTV Camera",
    url: "pin15.jpg",
    profile: "Usman Haider",
    profile_pic: "pin4.webp",
  },
  {
    name: "Digital VoltMeter",
    url: "product1.webp",
    profile: "Usman Haider",
    profile_pic: "pin4.webp",
  },
  {
    name: "Computer",
    url: "product2.webp",
    profile: "Usman Haider",
    profile_pic: "pin4.webp",
  },
  {
    name: "Kids Bi-Cycle",
    url: "product8.webp",
    profile: "Usman Haider",
    profile_pic: "pin4.webp",
  },
  {
    name: "Kids Cars",
    url: "product9.webp",
    profile: "Usman Haider",
    profile_pic: "pin4.webp",
  },
  {
    name: "I am Groot",
    url: "product10.webp",
    profile: "Usman Haider",
    profile_pic: "pin4.webp",
  },
  {
    name: "Fresh Perfume",
    url: "product11.webp",
    profile: "Usman Haider",
    profile_pic: "pin4.webp",
  },
  {
    name: "Sand Timer",
    url: "product12.webp",
    profile: "Usman Haider",
    profile_pic: "pin4.webp",
  },
  {
    name: "Chess Game",
    url: "product13.webp",
    profile: "Usman Haider",
    profile_pic: "pin4.webp",
  },
  {
    name: "Gaming Pad",
    url: "product15.webp",
    profile: "Usman Haider",
    profile_pic: "pin4.webp",
  },
  {
    name: "Guitar",
    url: "pin17.jpg",
    profile: "Usman Haider",
    profile_pic: "pin4.webp",
  },
  {
    name: "Tradition Ring",
    url: "product20.webp",
    profile: "Usman Haider",
    profile_pic: "pin4.webp",
  },
  {
    name: "Local Ring",
    url: "product22.webp",
    profile: "Usman Haider",
    profile_pic: "pin4.webp",
  },
  {
    name: "Batman Comics",
    url: "product38.webp",
    profile: "Usman Haider",
    profile_pic: "pin4.webp",
  },
  {
    name: "Jujutsu Comics",
    url: "product39.webp",
    profile: "Usman Haider",
    profile_pic: "pin4.webp",
  },
  {
    name: "Portfolio Website",
    url: "web1.jpg",
    profile: "Usman Haider",
    profile_pic: "pin4.webp",
  },
  {
    name: "Martial Atist",
    url: "pin16.jpg",
    profile: "Usman Haider",
    profile_pic: "pin4.webp",
  },
  {
    name: "Cards",
    url: "p.jpg",
    profile: "Usman Haider",
    profile_pic: "pin4.webp",
  },
  {
    name: "DeadPool in Suit",
    url: "pin18.jpg",
    profile: "Usman Haider",
    profile_pic: "pin4.webp",
  },
];
let clutter = "";
page1_content.forEach(function (i, idx) {
  clutter += `<div><img dataset="${idx}" src="images/${i.url}" alt=""><p>${i.name}</p></div>`;
  document.querySelector(".page1").innerHTML = clutter;
});
document.querySelector(".nakli_nav").style.height =
  document.querySelector("nav").offsetHeight + "px";

function scroll_to_top() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Optional smooth scrolling effect
  });
}

let profile_data = [];

let images = document.querySelectorAll(".page1 img");
images.forEach(function (i, idx) {
  i.addEventListener("click", function (j) {
    document.querySelector(".new_page").style.display = "block";
    let new_page_content = page1_content[j.target.getAttribute("dataset")];
    document.querySelector(
      ".new_page"
    ).innerHTML = `<div class="back"><span><i class="ri-arrow-left-line"></i></span></div><div class="content"><div class="con_image"><img src="images/${new_page_content.url}"/></div><div class="con_data"><div class="con_container"><div class="con_data_box"><div class="profile"><img src="images/pin4.jpg"><div class="profile_wala_banda"><h4>Usman Haider</h4><p>4.6m Folllowers</p></div><button>Follow</button></div><h1>${new_page_content.name}</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, veritatis. Lorem ipsum dolor sit.</p><div class="share"><div class="like"><i class="ri-thumb-up-fill"></i></div><div class="save"><button>Read It</button><button class="save_data" dataset="${idx}">Save</button></div><i class="ri-share-fill"></i></div><div class="comment"><div class="comment_count"><div>What Do You Think?</div><div>25 Comments</div></div><div class="comment_box"><div class="comment_profile">U</div><input type="text" id="leave_comment" placeholder="Leave a comment"/></div></div></div></div></div></div><div class="data></div>`;
    document.querySelector(".new_page").style.display = "block";
    document.querySelector("main").style.display = "none";
    document.querySelector(".back").addEventListener("click", function () {
      document.querySelector(".new_page").style.display = "none";
      document.querySelector("main").style.display = "block";
    });
    let profile_number = 0;
    scroll_to_top();
    document.querySelector(".save_data").addEventListener("click", function () {
      this.style.backgroundColor = "black";
      this.style.color = "white";
      this.innerHTML = "Saved";
      if (!profile_data.includes(page1_content[this.getAttribute("dataset")])) {
         profile_data.push(page1_content[this.getAttribute("dataset")]);
      }
      if (profile_number === 0) {
        profile_show();
      }
      profile_number++;
    });
  });
});
searchbar.addEventListener("input", function (i) {
  let search_clutter = "";
  let search_list = [];
  document.querySelector(".search_result").innerHTML = "";
  search_list = page1_content.filter(function (a) {
    return a.name.toLowerCase().startsWith(searchbar.value);
  });
  search_list.forEach(function (para) {
    search_clutter += `<div class="searches"><i class="ri-search-line"></i><p>${para.name}</p></div>`;
    document.querySelector(".search_result").innerHTML = search_clutter;
  });
});
searchbar.addEventListener("focus", function () {
  document.querySelector(".search_overlay").style.display = "block";
  document.querySelector(".search_result").style.display = "block";
});
searchbar.addEventListener("blur", function () {
  document.querySelector(".search_result").style.display = "none";
  document.querySelector(".search_overlay").style.display = "none";
});

document
  .querySelector(".search_engine input")
  .addEventListener("input", function (i) {
    if (document.querySelector(".search_engine input").value !== "") {
      document.querySelector(".mb_search_results").style.display = "block";
    }
    let mb_search_clutter = "";
    let mb_search_list = [];
    document.querySelector(".mb_search_results").innerHTML = "";
    mb_search_list = page1_content.filter(function (a) {
      return a.name
        .toLowerCase()
        .startsWith(document.querySelector(".search_engine input").value);
    });
    mb_search_list.forEach(function (para) {
      mb_search_clutter += `<div class="searches"><i class="ri-search-line"></i><p>${para.name}</p></div>`;
      document.querySelector(".mb_search_results").innerHTML =
        mb_search_clutter;
    });
  });
document.querySelector(".cancel_mb_search").style.cursor = "pointer";
document
  .querySelector(".cancel_mb_search")
  .addEventListener("click", function () {
    document.querySelector(".mobile_search").style.display = "none";
    document.querySelector("main").style.display = "block";
    document.querySelector(".mb_search_results").style.display = "none";
    scroll_to_top();
  });
document
  .querySelector(".search i:nth-child(1)")
  .addEventListener("click", function () {
    document.querySelector(".mobile_search").style.display = "block";
    scroll_to_top();
  });
document.querySelector(".app_nav_icon").addEventListener("click", function () {
  document.querySelector(".mobile_search").style.display = "block";
  scroll_to_top();
  document.querySelector(".profile_page").style.display = "none";
  change_profile_color()
});

function rotatePage(a) {
  a.style.backgroundColor = "transparent";
  a.style.color = "black";
}
document.querySelector(".chat").addEventListener("click", function (i) {
  document.querySelector(".chat_page").style.display = "flex";
  document.querySelector(".chat_page span").innerHTML = "You have no Friends.";
  rotatePage(document.querySelector(".nav_part1 button:nth-child(2)"));
  rotatePage(document.querySelector(".nav_part1 button:nth-child(3)"));
  change_icon_color(document.querySelector(".chat i"));
  to_original_color(document.querySelector(".notifications i"));
  document.querySelector(".profile_page").style.display = "none";
  document.querySelector(".new_page").style.display = "none";
  document.querySelector("main").style.display = "none";
  change_profile_color()
});
document
  .querySelector(".notifications")
  .addEventListener("click", function (i) {
    document.querySelector(".chat_page").style.display = "flex";
    document.querySelector(".chat_page span").innerHTML =
      "Something isn't Working.";
    rotatePage(document.querySelector(".nav_part1 button:nth-child(2)"));
    rotatePage(document.querySelector(".nav_part1 button:nth-child(3)"));
    document.querySelector(".nav_part1 button:nth-child(2) span").style.color =
      "black";
    change_icon_color(document.querySelector(".notifications i"));
    to_original_color(document.querySelector(".chat i"));
    document.querySelector(".profile_page").style.display = "none";
  document.querySelector("main").style.display = "none";
  change_profile_color()
  document.querySelector(".new_page").style.display = "none";
});
document
  .querySelector(".nav_part1 button:nth-child(3)")
  .addEventListener("click", function (i) {
    this.style.backgroundColor = "black";
    this.style.color = "white";
    change_profile_color()
    document.querySelector(".chat_page").style.display = "flex";
    document.querySelector(".chat_page span").innerHTML =
      "Register you as Creator.";
    rotatePage(document.querySelector(".nav_part1 button:nth-child(2)"));
    document.querySelector(".nav_part1 button:nth-child(2) span").style.color =
      "black";
    to_original_color(document.querySelector(".notifications i"));
    to_original_color(document.querySelector(".chat i"));
  document.querySelector("main").style.display = "none";
  document.querySelector(".profile_page").style.display = "none";
  document.querySelector(".new_page").style.display = "none";
  });
document
  .querySelector(".nav_part1 button:nth-child(2)")
  .addEventListener("click", function (i) {
    this.style.backgroundColor = "black";
    this.style.color = "white";
    change_profile_color()
    document.querySelector(".nav_part1 button:nth-child(2) span").style.color =
      "white";
    document.querySelector(".chat_page").style.display = "none";
    rotatePage(document.querySelector(".nav_part1 button:nth-child(3)"));
    to_original_color(document.querySelector(".notifications i"));
    to_original_color(document.querySelector(".chat i"));
    document.querySelector(".profile_page").style.display = "none";
    document.querySelector("main").style.display = "block";
  });
document.querySelector(".ap_chat_icon").addEventListener("click", function () {
  document.querySelector(".chat_page").style.display = "flex";
  document.querySelector(".chat_page span").innerHTML = "You have no Friends.";
  change_icon_color(document.querySelector(".ap_chat_icon"));
  to_original_color(document.querySelector(".app_home_icon"));
  document.querySelector(".profile_page").style.display = "none";
  document.querySelector("main").style.display = "none";
  change_profile_color()
  document.querySelector(".new_page").style.display = "none";
});
document.querySelector(".app_home_icon").addEventListener("click", function () {
  document.querySelector(".chat_page").style.display = "none";
  to_original_color(document.querySelector(".ap_chat_icon"));
  change_icon_color(document.querySelector(".app_home_icon"));
  scroll_to_top();
  document.querySelector(".profile_page").style.display = "none";
  document.querySelector("main").style.display = "block";
  change_profile_color()
  document.querySelector(".new_page").style.display = "none";
});

function change_icon_color(a) {
  a.style.color = "black";
}
function to_original_color(a) {
  a.style.color = "#435661";
}
function profile_show() {
  let profile_clutter = "";
  profile_data.forEach(function (i, idx) {
    // document.querySelector(".saved_data").innerHTML = ""
    document.querySelector(".saved_pins_heading").innerHTML =
      "Your pins are right below";
    profile_clutter += `<div><img dataset="${idx}" src="images/${i.url}" alt=""><p>${i.name}</p></div>`;
    document.querySelector(".saved_data").innerHTML = profile_clutter;
  });
}

document.querySelectorAll(".pro_circle").forEach(function (i) {
  i.addEventListener("click", function () {
    document.querySelector(".profile_page").style.display = "block";
    document.querySelector("main").style.display = "none";
    document.querySelector(".new_page").style.display = "none";
    document.querySelector(".chat_page").style.display = "none";
    to_original_color(document.querySelector(".ap_chat_icon"));
    to_original_color(document.querySelector(".app_nav .app_home_icon"));
    scroll_to_top();
    rotatePage(document.querySelector(".nav_part1 button:nth-child(3)"));
    rotatePage(document.querySelector(".nav_part1 button:nth-child(2)"));
    to_original_color(document.querySelector(".notifications i"));
    to_original_color(document.querySelector(".chat i"));
    this.style.backgroundColor = "#cccaca"
    this.style.transform = "scale(1.1)"
  });
});

function change_profile_color() {
  document.querySelectorAll(".pro_circle").forEach(function (i){
    i.style.backgroundColor = "transparent"
    i.style.transform = "scale(1)"
  })
}