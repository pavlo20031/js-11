// Bank
const bankAccount = {
  ownerName: "Pavlo",
  acoountNumber: "100-345-234-676",
  balance: 35000,
  deposit(newAmount) {
    this.balance += newAmount;
    alert(`Ваш рахунок поповнено на ${newAmount} ваш баланс ${this.balance}`);
  },
  withdraw(newAmount) {
    if (newAmount <= this.balance) {
      this.balance -= newAmount;
      alert(`З вашого рахунку знято ${newAmount} ваш баланс ${this.balance}`);
    } else {
      alert("Недостатньо коштів і перестаньте тринькати гроші!");
    }
  },
};

const res = confirm("бажаєте поповнити гроші?");
if (res) {
  const amount = Number(prompt("Внесіть кількість"));
  bankAccount.deposit(amount);
} else {
  const amount = Number(prompt("Бажаєте зняти?"));
  bankAccount.withdraw(amount);
}

// Weather
const weather = {
  temperature: Number(prompt("Яка температура у вас надворі?")),
  humidity: 1,
  windSpeed: 67,
  logTemperature() {
      if (this.temperature < 0) {
          return true;
      } else if (this.temperature >= 0) {
          return false;
      }
    }
};
if (weather.logTemperature()) {
    alert("температура нижче 0 градусів Цельсія");
} else {
    alert("температура вище або дорівнює 0 градусів Цельсія");
}

// User data
const user = {
    name: prompt("Введіть своє ім'я"),
    email: prompt("Введіть свій email").toLowerCase(),
    password: Number(prompt("Введіть свій пароль").trim()),
    login(email, password) {
        if (email === this.email && password === this.password) {
            alert("Це правильний email і пароль");
        } else {
            alert("Це неправильний email і пароль");
        }
    }
};
user.login("lesivs@gmail.com", 6767);

// Movie
const movie = {
    title: "Stiven Universe",
    director: "Pavlo Lesiv",
    year: 2013,
    rating: 5,
    controlRating() {
        if (this.rating > 8) {
            return true;
        } else if (this.rating <= 8) {
            return false;
        }
    },
    allThings() {
        console.log(`title: ${this.title}
diretor: ${this.director}
year: ${this.year}
rating: ${this.rating}
controlRating: ${this.controlRating()}
`);   
    },
};
movie.allThings();
