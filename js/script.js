import dishes from "./dishes.js";

const selectedDishes = {
  soup: null,
  main: null,
  drink: null,
  salad: null,
  dessert: null,
};

const kindMap = {
  рыбный: "fish",
  рыбное: "fish",
  мясной: "meat",
  мясное: "meat",
  вегетарианский: "veg",
  вегетарианское: "veg",
  холодный: "cold",
  горячий: "hot",
  "маленькая порция": "small",
  "средняя порция": "medium",
  "большая порция": "large",
};

const activeFilters = {
  soup: null,
  main: null,
  drink: null,
  salad: null,
  dessert: null,
};

function sortDishesByName(dishes) {
  return dishes.sort((a, b) => a.name.localeCompare(b.name));
}

function renderOrderSummary() {
  const summary = document.getElementById("order-summary");
  const totalElement = document.getElementById("total");

  const categoryNames = {
    soup: "Суп",
    main: "Главное блюдо",
    drink: "Напиток",
    salad: "Салат",
    dessert: "Десерт",
  };

  const selectedCategories = Object.keys(selectedDishes).filter(
    (category) => selectedDishes[category]
  );

  if (selectedCategories.length === 0) {
    summary.innerHTML = "<p>Ничего не выбрано</p>";
    totalElement.style.fontWeight = "bold";
  } else {
    summary.innerHTML = "";
    Object.keys(selectedDishes).forEach((category) => {
      const dish = selectedDishes[category];
      const categoryElement = document.createElement("div");

      const categoryTitle = document.createElement("p");
      categoryTitle.style.fontWeight = "bold";
      categoryTitle.textContent = categoryNames[category];

      const dishText = document.createElement("p");
      dishText.style.marginLeft = "10px";
      dishText.textContent = dish
        ? `${dish.name} ${dish.price}₽`
        : `${categoryNames[category]} не выбрано`;

      categoryElement.appendChild(categoryTitle);
      categoryElement.appendChild(dishText);

      summary.appendChild(categoryElement);
    });

    const total = Object.values(selectedDishes)
      .filter(Boolean)
      .reduce((sum, dish) => sum + dish.price, 0);

    totalElement.textContent = `Стоимость закакза ${total}₽`;
    totalElement.style.fontWeight = "bold";
  }
}

function displayDishes() {
  const categories = {
    soup: document.getElementById("soup-grid"),
    main: document.getElementById("main-grid"),
    drink: document.getElementById("drink-grid"),
    salad: document.getElementById("salad-grid"),
    dessert: document.getElementById("dessert-grid"),
  };

  Object.values(categories).forEach((grid) => (grid.innerHTML = ""));

  const sortedDishes = sortDishesByName(dishes);

  Object.keys(categories).forEach((category) => {
    const filter = activeFilters[category];
    const filtered = sortedDishes.filter(
      (d) => d.category === category && (!filter || d.kind === filter)
    );

    filtered.forEach((dish) => {
      const dishCard = document.createElement("div");
      dishCard.className = "dish-card";
      dishCard.innerHTML = `
                <img src="${dish.image}" alt="${dish.name}">
                <div class="dish-info">
                    <p class="dish-name">${dish.name}</p>
                    <p class="dish-count">${dish.count}</p>
                    <p class="dish-price">${dish.price} ₽</p>
                </div>
                <button>Добавить</button>
            `;

      dishCard.querySelector("button").addEventListener("click", () => {
        selectedDishes[category] = dish;
        renderOrderSummary();
      });

      categories[category].appendChild(dishCard);
    });
  });
}

function initializeFilters() {
  const filterOptions = {
    soup: ["рыбный", "мясной", "вегетарианский"],
    main: ["рыбное", "мясное", "вегетарианское"],
    drink: ["холодный", "горячий"],
    salad: ["рыбный", "мясной", "вегетарианский"],
    dessert: ["маленькая порция", "средняя порция", "большая порция"],
  };

  Object.keys(filterOptions).forEach((category) => {
    const container = document.getElementById(`${category}-filters`);

    filterOptions[category].forEach((kind) => {
      const button = document.createElement("button");
      button.textContent = kind.charAt(0).toUpperCase() + kind.slice(1);
      button.classList.add("filter-button");
      button.setAttribute("data-kind", kind);

      button.addEventListener("click", () => {
        const isActive = button.classList.contains("active");
        document
          .querySelectorAll(`#${category}-filters .filter-button`)
          .forEach((btn) => btn.classList.remove("active"));

        if (isActive) {
          button.classList.remove("active");
          activeFilters[category] = null;
        } else {
          button.classList.add("active");
          activeFilters[category] = kindMap[kind];
        }
        displayDishes();
      });

      container.appendChild(button);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initializeFilters();
  displayDishes();
  renderOrderSummary();
});

const resetButton = document.getElementById("reset-order");
const orderForm = document.getElementById("order-form");

resetButton.addEventListener("click", () => {
  Object.keys(selectedDishes).forEach((key) => (selectedDishes[key] = null));
  Object.keys(activeFilters).forEach((key) => (activeFilters[key] = null));

  orderForm.reset();

  displayDishes();
  renderOrderSummary();
});
