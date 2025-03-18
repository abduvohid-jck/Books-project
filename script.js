let sun = document.querySelector("#sun"),
  moon = document.querySelector("#moon"),
  body = document.querySelector("body"),
  cart = document.querySelector("#cart"),
  closeShopping = document.querySelector(".closeShopping"),
  homeBg = document.querySelector(".home_bg"),
  leftArrow = document.querySelector(".leftArrow"),
  rightArrow = document.querySelector(".rightArrow"),
  imageIcons = document.querySelectorAll(".image-icon"),
  list = document.querySelector(".product-right-bottom"),
  li = document.querySelectorAll(".list"),
  circle = document.querySelectorAll(".fa-circle"),
  allList = document.querySelector(".all-list"),
  listCard = document.querySelector(".listCard");
let total = document.querySelector(".total");
let quanity = document.querySelector(".quantity");
let bookType = document.querySelectorAll(".book-type");
const navMenu = document.getElementById("nav_menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");
let category = document.querySelector(".category-input");
console.log(category);
let cts = category.getAttribute("category-attribute");
console.log(cts);
let allCollections = document.querySelector(".all-collections");
let modern = document.querySelector(".modern");
let biography = document.querySelector(".biography");
let classics = document.querySelector(".classics");
let cookbooks = document.querySelector(".cookbooks");
let detective = document.querySelector(".detective");
let fantasy = document.querySelector(".fantasy");
let fairyTale = document.querySelector(".fairy-tale");
let fiction = document.querySelector(".fiction");
let horror = document.querySelector(".horror");
let historicalFiction = document.querySelector(".historical-fiction");
let history = document.querySelector(".history");
let romance = document.querySelector(".romance");
let search = document.querySelector(".searchI");
let searchB = document.querySelector(".searchB");
let products = [
  {
    id: 0,
    type: "modern",
    title: "big magic",
    author: "donna karan",
    image: "big_magic.png",
    price: 20.0,
  },
  {
    id: 1,
    type: "classic",
    title: "i was born width music",
    author: "dolce & cabanna",
    image: "I_was_born_with_music.png",
    price: 200.0,
  },
  {
    id: 2,
    type: "biography",
    title: "i'm glad my mom died",
    author: "jennette mcCurdy",
    image: "i'm_glad_my_mom_died.png",
    price: 21.99,
  },
  {
    id: 3,
    type: "detective",
    title: "Warrior Soul: A Tye Caine Wilderness Mystery",
    author: "David Barbur",
    image: "Warrior_Soul.png",
    price: 4.99,
  },
  {
    id: 4,
    type: "fantasy",
    title: "The Mountain in the Sea: A Novel",
    author: "Ray Nayler",
    image: "The_Mountain_in_the_Sea.png",
    price: 18.0,
  },
  {
    id: 5,
    type: "cookbook",
    title: "Sweet Enough: A Dessert Cookbook",
    author: "Alison Roman",
    image: "Sweet_Enough.png",
    price: 32.55,
  },
  {
    id: 6,
    type: "fairy tale",
    title: "Fairy Tale",
    author: "Stephen King",
    image: "Fairy_Tale.png",
    price: 30.23,
  },
  {
    id: 7,
    type: "fiction",
    title: "Flash Fiction America: 73 Very Short Stories",
    author: "John DuFresne , et al.",
    image: "Flash_Fiction_America.png",
    price: 15.76,
  },
  {
    id: 8,
    type: "horror",
    title: "Taaqtumi: An Anthology of Arctic Horror Stories",
    author: "Thomas Anguti Johnston , et al.",
    image: "Taaqtumi.png",
    price: 15.76,
  },
  {
    id: 9,
    type: "historical fiction",
    title:
      "The Things We Cannot Say: A WWII Historical Fiction Novel (Original)",
    author: "Kelly Rimmer",
    image: "The_Things_We_Cannot_Say.png",
    price: 15.8,
  },
  {
    id: 10,
    type: "history",
    title: "The Secret History",
    author: "Donna Tartt",
    image: "The_Secret_History.png",
    price: 16.74,
  },
  {
    id: 11,
    type: "romance",
    title: "Daughter of the Moon Goddess: A Fantasy Romance Novel",
    author: "Sue Lynn Tan",
    image: "Daughter_of_the_Moon_Goddess.png",
    price: 16.73,
  },
  {
    id: 12,
    type: "modern",
    title: "Women Without Men: A Novel of Modern Iran",
    author: "Shahrnush Parsipur , et al.",
    image: "Women_Without_Men.png",
    price: 14.83,
  },
  {
    id: 13,
    type: "classic",
    title: "War and Peace",
    author: "Leo Tolstoy , et al.",
    image: "War_and_Peace.png",
    price: 20.46,
  },
  {
    id: 14,
    type: "biography",
    title: "Barkley: A Biography (Original)",
    author: "Timothy Bella",
    image: "Barkley.png",
    price: 27.89,
  },
  {
    id: 15,
    type: "detective",
    title: "The Detective Up Late",
    author: "Adrian McKinty",
    image: "The_Detective_Up_Late.png",
    price: 25.1,
  },
  {
    id: 16,
    type: "fantasy",
    title: "Legends & Lattes: A Novel of High Fantasy and Low Stakes",
    author: "Travis Baldree",
    image: "Legends_&_Lattes.png",
    price: 16.73,
  },
  {
    id: 17,
    type: "cookbook",
    title: "The Everlasting Meal Cookbook: Leftovers A-Z",
    author: "Tamar Adler , et al.",
    image: "The_Everlasting_Meal_Cookbook.png",
    price: 32.55,
  },
  {
    id: 18,
    type: "fairy tale",
    title: "Fairy Tales for Fearless Girls",
    author: "Anita Ganeri , et al.",
    image: "Fairy_Tales_for_Fearless_Girls.png",
    price: 18.59,
  },
  {
    id: 19,
    type: "fiction",
    title: "Wonderbook (Revised and Expanded)",
    author: "Jeff VanderMeer",
    image: "Wonderbook.png",
    price: 25.58,
  },
  {
    id: 20,
    type: "horror",
    title: "Nightmare Fuel: The Science of Horror Films",
    author: "Nina Nesseth",
    image: "Nightmare_Fuel.png",
    price: 24.17,
  },
  {
    id: 21,
    type: "historical fiction",
    title: "Falconland: A Novel of Medieval",
    author: "Reggie Connell",
    image: "Falconland.png",
    price: 14.99,
  },
  {
    id: 22,
    type: "history",
    title: "We Are the Land: A History of Native California",
    author: "Damon B. Akins , et al.",
    image: "We_Are_the_Land.png",
    price: 27.85,
  },
  {
    id: 23,
    type: "romance",
    title: "Rough Around the Hedges: an Uncanny Romance Novel",
    author: "Lish McBride",
    image: "Rough_Around_the_Hedges.png",
    price: 16.73,
  },
];

// ============= menu bar ==============

navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
});

// ============= dark mode  ==============

const toggleTheme = () => {
  body.classList.toggle("darkLight");
  sun.classList.toggle("hide");
  moon.classList.toggle("hide");
};

sun.addEventListener("click", toggleTheme);
moon.addEventListener("click", toggleTheme);

cart.addEventListener("click", () => {
  body.classList.toggle("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});
window.onscroll = () => {
  body.classList.remove("active");
};

// ================================== header slider ==================================

let imgs = homeBg.querySelectorAll("img");
imgs.forEach((item, index) => {
  item.style.left = `${index * 100}%`;
});
let counter = 0;
rightArrow.addEventListener("click", () => {
  if (counter == imgs.length - 1) {
    counter = 0;
    slideImage();
  } else {
    counter++;
    slideImage();
  }
});
leftArrow.addEventListener("click", () => {
  if (counter == 0) {
    counter = imgs.length - 1;
    slideImage();
  } else {
    counter--;
    slideImage();
  }
});
const slideImage = () => {
  imgs.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

// ============= product cards get ==============

function initApp() {
  products.forEach((value, key) => {
    list.innerHTML += `
            <div class="book-card" data-item="${value.type}"> 
                <div class="book-image">
                    <img src="./Assets/images/${value.image}" alt="" class="book-imagish" />
                </div>
                <div class="book-details">
                    <div class="book-type">${value.type}</div>
                    <div class="book-title">${value.title}</div>
                    <div class="book-author">${value.author}</div>
                    <div class="book-price">
                    <span class="book-price-symbol">$</span>${value.price}
                    </div>
                    <div class="buttons">
                    <button class="addToCart" onclick="addToCard(${key})">Add to cart</button>
                    <i class="ri-heart-line" id="heart"></i>
                    <i class='bx bx-dots-vertical-rounded options' onclick="option(${key})"></i>
                    <div class="inOption">
                        <i class='bx bx-pencil' onclick="renameItem(${key})"></i>
                        <i class="fa-solid fa-trash" onclick="removeItem(this)"></i>
                    </div>
                    </div>
                </div>
            </div>
        `;
  });
}
initApp();

// Filter section

allCollections.addEventListener("change", () => {
  search.value = ``;
  list.innerHTML = ``;
  products.forEach((value, key) => {
    list.innerHTML += `
            <div class="book-card" data-item="${value.type}"> 
                <div class="book-image">
                    <img src="./Assets/images/${value.image}" alt="" class="book-imagish" />
                </div>
                <div class="book-details">
                    <div class="book-type">${value.type}</div>
                    <div class="book-title">${value.title}</div>
                    <div class="book-author">${value.author}</div>
                    <div class="book-price">
                    <span class="book-price-symbol">$</span>${value.price}
                    </div>
                    <div class="buttons">
                    <button class="addToCart" onclick="addToCard(${key})">Add to cart</button>
                    <i class="ri-heart-line" id="heart"></i>
                    <i class='bx bx-dots-vertical-rounded options' onclick="option(${key})"></i>
                    <div class="inOption">
                        <i class='bx bx-pencil' onclick="renameItem(${key})"></i>
                        <i class="fa-solid fa-trash" onclick="removeItem(this)"></i>
                    </div>
                    </div>
                </div>
            </div>
        `;
  });
});

modern.addEventListener("change", () => {
  search.value = ``;
  list.innerHTML = ``;
  let modernFilter = products.filter((product) => product.type == "modern");
  modernFilter.forEach((value, key) => {
    list.innerHTML += `
            <div class="book-card" data-item="${value.type}"> 
                <div class="book-image">
                    <img src="./Assets/images/${value.image}" alt="" class="book-imagish" />
                </div>
                <div class="book-details">
                    <div class="book-type">${value.type}</div>
                    <div class="book-title">${value.title}</div>
                    <div class="book-author">${value.author}</div>
                    <div class="book-price">
                    <span class="book-price-symbol">$</span>${value.price}
                    </div>
                    <div class="buttons">
                    <button class="addToCart" onclick="addToCard(${key})">Add to cart</button>
                    <i class="ri-heart-line" id="heart"></i>
                    <i class='bx bx-dots-vertical-rounded options' onclick="option(${key})"></i>
                    <div class="inOption">
                        <i class='bx bx-pencil' onclick="renameItem(${key})"></i>
                        <i class="fa-solid fa-trash" onclick="removeItem(this)"></i>
                    </div>
                    </div>
                </div>
            </div>
        `;
  });
});

biography.addEventListener("change", () => {
  search.value = ``;
  list.innerHTML = ``;
  let biographyFilter = products.filter(
    (product) => product.type == "biography"
  );
  biographyFilter.forEach((value, key) => {
    list.innerHTML += `
            <div class="book-card" data-item="${value.type}"> 
                <div class="book-image">
                    <img src="./Assets/images/${value.image}" alt="" class="book-imagish" />
                </div>
                <div class="book-details">
                    <div class="book-type">${value.type}</div>
                    <div class="book-title">${value.title}</div>
                    <div class="book-author">${value.author}</div>
                    <div class="book-price">
                    <span class="book-price-symbol">$</span>${value.price}
                    </div>
                    <div class="buttons">
                    <button class="addToCart" onclick="addToCard(${key})">Add to cart</button>
                    <i class="ri-heart-line" id="heart"></i>
                    <i class='bx bx-dots-vertical-rounded options' onclick="option(${key})"></i>
                    <div class="inOption">
                        <i class='bx bx-pencil' onclick="renameItem(${key})"></i>
                        <i class="fa-solid fa-trash" onclick="removeItem(this)"></i>
                    </div>
                    </div>
                </div>
            </div>
        `;
  });
});

classics.addEventListener("change", () => {
  search.value = ``;
  list.innerHTML = ``;
  let classicFilter = products.filter((product) => product.type == "classic");
  classicFilter.forEach((value, key) => {
    list.innerHTML += `
            <div class="book-card" data-item="${value.type}"> 
                <div class="book-image">
                    <img src="./Assets/images/${value.image}" alt="" class="book-imagish" />
                </div>
                <div class="book-details">
                    <div class="book-type">${value.type}</div>
                    <div class="book-title">${value.title}</div>
                    <div class="book-author">${value.author}</div>
                    <div class="book-price">
                    <span class="book-price-symbol">$</span>${value.price}
                    </div>
                    <div class="buttons">
                    <button class="addToCart" onclick="addToCard(${key})">Add to cart</button>
                    <i class="ri-heart-line" id="heart"></i>
                    <i class='bx bx-dots-vertical-rounded options' onclick="option(${key})"></i>
                    <div class="inOption">
                        <i class='bx bx-pencil' onclick="renameItem(${key})"></i>
                        <i class="fa-solid fa-trash" onclick="removeItem(this)"></i>
                    </div>
                    </div>
                </div>
            </div>
        `;
  });
});

cookbooks.addEventListener("change", () => {
  search.value = ``;
  list.innerHTML = ``;
  let cookbooksFilter = products.filter(
    (product) => product.type == "cookbook"
  );
  cookbooksFilter.forEach((value, key) => {
    list.innerHTML += `
            <div class="book-card" data-item="${value.type}"> 
                <div class="book-image">
                    <img src="./Assets/images/${value.image}" alt="" class="book-imagish" />
                </div>
                <div class="book-details">
                    <div class="book-type">${value.type}</div>
                    <div class="book-title">${value.title}</div>
                    <div class="book-author">${value.author}</div>
                    <div class="book-price">
                    <span class="book-price-symbol">$</span>${value.price}
                    </div>
                    <div class="buttons">
                    <button class="addToCart" onclick="addToCard(${key})">Add to cart</button>
                    <i class="ri-heart-line" id="heart"></i>
                    <i class='bx bx-dots-vertical-rounded options' onclick="option(${key})"></i>
                    <div class="inOption">
                        <i class='bx bx-pencil' onclick="renameItem(${key})"></i>
                        <i class="fa-solid fa-trash" onclick="removeItem(this)"></i>
                    </div>
                    </div>
                </div>
            </div>
        `;
  });
});

detective.addEventListener("change", () => {
  search.value = ``;
  list.innerHTML = ``;
  let detectiveFilter = products.filter(
    (product) => product.type == "detective"
  );
  detectiveFilter.forEach((value, key) => {
    list.innerHTML += `
            <div class="book-card" data-item="${value.type}"> 
                <div class="book-image">
                    <img src="./Assets/images/${value.image}" alt="" class="book-imagish" />
                </div>
                <div class="book-details">
                    <div class="book-type">${value.type}</div>
                    <div class="book-title">${value.title}</div>
                    <div class="book-author">${value.author}</div>
                    <div class="book-price">
                    <span class="book-price-symbol">$</span>${value.price}
                    </div>
                    <div class="buttons">
                    <button class="addToCart" onclick="addToCard(${key})">Add to cart</button>
                    <i class="ri-heart-line" id="heart"></i>
                    <i class='bx bx-dots-vertical-rounded options' onclick="option(${key})"></i>
                    <div class="inOption">
                        <i class='bx bx-pencil' onclick="renameItem(${key})"></i>
                        <i class="fa-solid fa-trash" onclick="removeItem(this)"></i>
                    </div>
                    </div>
                </div>
            </div>
        `;
  });
});

fantasy.addEventListener("change", () => {
  search.value = ``;
  list.innerHTML = ``;
  let fantasyFilter = products.filter((product) => product.type == "fantasy");
  fantasyFilter.forEach((value, key) => {
    list.innerHTML += `
            <div class="book-card" data-item="${value.type}"> 
                <div class="book-image">
                    <img src="./Assets/images/${value.image}" alt="" class="book-imagish" />
                </div>
                <div class="book-details">
                    <div class="book-type">${value.type}</div>
                    <div class="book-title">${value.title}</div>
                    <div class="book-author">${value.author}</div>
                    <div class="book-price">
                    <span class="book-price-symbol">$</span>${value.price}
                    </div>
                    <div class="buttons">
                    <button class="addToCart" onclick="addToCard(${key})">Add to cart</button>
                    <i class="ri-heart-line" id="heart"></i>
                    <i class='bx bx-dots-vertical-rounded options' onclick="option(${key})"></i>
                    <div class="inOption">
                        <i class='bx bx-pencil' onclick="renameItem(${key})"></i>
                        <i class="fa-solid fa-trash" onclick="removeItem(this)"></i>
                    </div>
                    </div>
                </div>
            </div>
        `;
  });
});

fairyTale.addEventListener("change", () => {
  search.value = ``;
  list.innerHTML = ``;
  let fairytaleFilter = products.filter(
    (product) => product.type == "fairy tale"
  );
  fairytaleFilter.forEach((value, key) => {
    list.innerHTML += `
            <div class="book-card" data-item="${value.type}"> 
                <div class="book-image">
                    <img src="./Assets/images/${value.image}" alt="" class="book-imagish" />
                </div>
                <div class="book-details">
                    <div class="book-type">${value.type}</div>
                    <div class="book-title">${value.title}</div>
                    <div class="book-author">${value.author}</div>
                    <div class="book-price">
                    <span class="book-price-symbol">$</span>${value.price}
                    </div>
                    <div class="buttons">
                    <button class="addToCart" onclick="addToCard(${key})">Add to cart</button>
                    <i class="ri-heart-line" id="heart"></i>
                    <i class='bx bx-dots-vertical-rounded options' onclick="option(${key})"></i>
                    <div class="inOption">
                        <i class='bx bx-pencil' onclick="renameItem(${key})"></i>
                        <i class="fa-solid fa-trash" onclick="removeItem(this)"></i>
                    </div>
                    </div>
                </div>
            </div>
        `;
  });
});

fiction.addEventListener("change", () => {
  search.value = ``;
  list.innerHTML = ``;
  let fictionFilter = products.filter((product) => product.type == "fiction");
  fictionFilter.forEach((value, key) => {
    list.innerHTML += `
            <div class="book-card" data-item="${value.type}"> 
                <div class="book-image">
                    <img src="./Assets/images/${value.image}" alt="" class="book-imagish" />
                </div>
                <div class="book-details">
                    <div class="book-type">${value.type}</div>
                    <div class="book-title">${value.title}</div>
                    <div class="book-author">${value.author}</div>
                    <div class="book-price">
                    <span class="book-price-symbol">$</span>${value.price}
                    </div>
                    <div class="buttons">
                    <button class="addToCart" onclick="addToCard(${key})">Add to cart</button>
                    <i class="ri-heart-line" id="heart"></i>
                    <i class='bx bx-dots-vertical-rounded options' onclick="option(${key})"></i>
                    <div class="inOption">
                        <i class='bx bx-pencil' onclick="renameItem(${key})"></i>
                        <i class="fa-solid fa-trash" onclick="removeItem(this)"></i>
                    </div>
                    </div>
                </div>
            </div>
        `;
  });
});

horror.addEventListener("change", () => {
  search.value = ``;
  list.innerHTML = ``;
  let horrorFilter = products.filter((product) => product.type == "horror");
  horrorFilter.forEach((value, key) => {
    list.innerHTML += `
            <div class="book-card" data-item="${value.type}"> 
                <div class="book-image">
                    <img src="./Assets/images/${value.image}" alt="" class="book-imagish" />
                </div>
                <div class="book-details">
                    <div class="book-type">${value.type}</div>
                    <div class="book-title">${value.title}</div>
                    <div class="book-author">${value.author}</div>
                    <div class="book-price">
                    <span class="book-price-symbol">$</span>${value.price}
                    </div>
                    <div class="buttons">
                    <button class="addToCart" onclick="addToCard(${key})">Add to cart</button>
                    <i class="ri-heart-line" id="heart"></i>
                    <i class='bx bx-dots-vertical-rounded options' onclick="option(${key})"></i>
                    <div class="inOption">
                        <i class='bx bx-pencil' onclick="renameItem(${key})"></i>
                        <i class="fa-solid fa-trash" onclick="removeItem(this)"></i>
                    </div>
                    </div>
                </div>
            </div>
        `;
  });
});

historicalFiction.addEventListener("change", () => {
  search.value = ``;
  list.innerHTML = ``;
  let historicalfictionFilter = products.filter(
    (product) => product.type == "historical fiction"
  );
  historicalfictionFilter.forEach((value, key) => {
    list.innerHTML += `
            <div class="book-card" data-item="${value.type}"> 
                <div class="book-image">
                    <img src="./Assets/images/${value.image}" alt="" class="book-imagish" />
                </div>
                <div class="book-details">
                    <div class="book-type">${value.type}</div>
                    <div class="book-title">${value.title}</div>
                    <div class="book-author">${value.author}</div>
                    <div class="book-price">
                    <span class="book-price-symbol">$</span>${value.price}
                    </div>
                    <div class="buttons">
                    <button class="addToCart" onclick="addToCard(${key})">Add to cart</button>
                    <i class="ri-heart-line" id="heart"></i>
                    <i class='bx bx-dots-vertical-rounded options' onclick="option(${key})"></i>
                    <div class="inOption">
                        <i class='bx bx-pencil' onclick="renameItem(${key})"></i>
                        <i class="fa-solid fa-trash" onclick="removeItem(this)"></i>
                    </div>
                    </div>
                </div>
            </div>
        `;
  });
});

history.addEventListener("change", () => {
  search.value = ``;
  list.innerHTML = ``;
  let historyFilter = products.filter((product) => product.type == "history");
  historyFilter.forEach((value, key) => {
    list.innerHTML += `
            <div class="book-card" data-item="${value.type}"> 
                <div class="book-image">
                    <img src="./Assets/images/${value.image}" alt="" class="book-imagish" />
                </div>
                <div class="book-details">
                    <div class="book-type">${value.type}</div>
                    <div class="book-title">${value.title}</div>
                    <div class="book-author">${value.author}</div>
                    <div class="book-price">
                    <span class="book-price-symbol">$</span>${value.price}
                    </div>
                    <div class="buttons">
                    <button class="addToCart" onclick="addToCard(${key})">Add to cart</button>
                    <i class="ri-heart-line" id="heart"></i>
                    <i class='bx bx-dots-vertical-rounded options' onclick="option(${key})"></i>
                    <div class="inOption">
                        <i class='bx bx-pencil' onclick="renameItem(${key})"></i>
                        <i class="fa-solid fa-trash" onclick="removeItem(this)"></i>
                    </div>
                    </div>
                </div>
            </div>
        `;
  });
});

romance.addEventListener("change", () => {
  search.value = ``;
  list.innerHTML = ``;
  let romanceFilter = products.filter((product) => product.type == "romance");
  romanceFilter.forEach((value, key) => {
    list.innerHTML += `
            <div class="book-card" data-item="${value.type}"> 
                <div class="book-image">
                    <img src="./Assets/images/${value.image}" alt="" class="book-imagish" />
                </div>
                <div class="book-details">
                    <div class="book-type">${value.type}</div>
                    <div class="book-title">${value.title}</div>
                    <div class="book-author">${value.author}</div>
                    <div class="book-price">
                    <span class="book-price-symbol">$</span>${value.price}
                    </div>
                    <div class="buttons">
                    <button class="addToCart" onclick="addToCard(${key})">Add to cart</button>
                    <i class="ri-heart-line" id="heart"></i>
                    <i class='bx bx-dots-vertical-rounded options' onclick="option(${key})"></i>
                    <div class="inOption">
                        <i class='bx bx-pencil' onclick="renameItem(${key})"></i>
                        <i class="fa-solid fa-trash" onclick="removeItem(this)"></i>
                    </div>
                    </div>
                </div>
            </div>
        `;
  });
});

searchB.addEventListener("click", () => {
  let choose = products.filter((product) =>
    product.title.toLowerCase().includes(search.value.toLowerCase())
  );
  console.log(choose);
  list.innerHTML = "";
  choose.forEach((value, key) => {
    list.innerHTML += `
            <div class="book-card" data-item="${value.type}"> 
                <div class="book-image">
                    <img src="./Assets/images/${value.image}" alt="" class="book-imagish" />
                </div>
                <div class="book-details">
                    <div class="book-type">${value.type}</div>
                    <div class="book-title">${value.title}</div>
                    <div class="book-author">${value.author}</div>
                    <div class="book-price">
                    <span class="book-price-symbol">$</span>${value.price}
                    </div>
                    <div class="buttons">
                    <button class="addToCart" onclick="addToCard(${key})">Add to cart</button>
                    <i class="ri-heart-line" id="heart"></i>
                    <i class='bx bx-dots-vertical-rounded options' onclick="option(${key})"></i>
                    <div class="inOption">
                        <i class='bx bx-pencil' onclick="renameItem(${key})"></i>
                        <i class="fa-solid fa-trash" onclick="removeItem(this)"></i>
                    </div>
                    </div>
                </div>
            </div>
        `;
  });
});
