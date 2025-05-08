{
  // Problem

  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper == false) {
      return input;
    } else {
      return input.toUpperCase();
    }
  }
  console.log(formatString("pronob", false));
  // Problem 2

  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    let arr: { title: string; rating: number }[] = [];
    for (let x = 0; x < items.length; x++) {
      if (items[x].rating >= 4) {
        arr.push(items[x]);
      }
    }
    return arr;
  }

  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
    { title: "Book C", rating: 6.0 },
    { title: "Book C", rating: 1.0 },
  ];
  console.log(filterByRating(books));

  // Problem 3

  function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
  }

  console.log(concatenateArrays<number>([1, 2], [3, 4], [5]));

  // Problem 4

  class Vehicle {
    make: string;
    year: number;
    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
    getInfo() {
      console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
  }

  class Car extends Vehicle {
    private model: string;
    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }
    getModel() {
      console.log(`Model: ${this.model}`);
    }
  }

  const vehicle = new Vehicle("vanish", 1990);
  vehicle.getInfo();
  const toyotaCar = new Car("toyota", 2020, "Coralla");
  toyotaCar.getModel();

  //   Problem 5

  function processValue(value: string | number): number {
    if (typeof value === "number") {
      return value * 2;
    } else if (typeof value === "string") {
      return value.length;
    }
    return 0
  }

  console.log(processValue("roy"));

  // Problem 6

  interface Product {
    name: string;
    price: number;
  }
  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (!products) {
      return null;
    }
    const maxProceProduct = products.reduce(function (prev, current) {
      return prev && prev.price > current.price ? prev : current;
    });

    return maxProceProduct;
  }

  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
  ];

  getMostExpensiveProduct(products);

  //   Problem 7

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    if (day == Day.Sunday) {
      return "Weekend";
    } else {
      return "Weekday";
    }
  }

  console.log(getDayType(Day.Friday));

  // Problem 8

  async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      if (typeof n == "number" && n > 0)
        setTimeout(() => {
          resolve(n * n);
        }, 300);
      else {
        reject("Negative number not allowed");
      }
    });
  }

  squareAsync(-4).then(console.log);
}
