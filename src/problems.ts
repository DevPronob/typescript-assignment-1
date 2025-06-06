{
  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper == false) {
      return input;
    } else {
      return input.toUpperCase();
    }
  }
  formatString("Hello");
  formatString("Hello", true);
  formatString("Hello", false);




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
  filterByRating(books);




  function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
  }

  concatenateArrays(["a", "b"], ["c"]);
  concatenateArrays([1, 2], [3, 4], [5]);




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

  const myCar = new Car("Toyota", 2020, "Corolla");
  myCar.getInfo();
  myCar.getModel();





  function processValue(value: string | number): number {
    if (typeof value === "number") {
      return value * 2;
    } else if (typeof value === "string") {
      return value.length;
    }
    return 0;
  }

  processValue("hello");
  processValue(10);




  interface Product {
    name: string;
    price: number;
  }
  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (!products || products.length===0) {
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
    if (day === Day.Sunday ||day === Day.Saturday) {
      return "Weekend";
    } else {
      return "Weekday";
    }
  }

  getDayType(Day.Monday);
  getDayType(Day.Sunday);




  async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      if (typeof n == "number" && n > 0)
        setTimeout(() => {
          resolve(n * n);
        }, 1000);
      else {
        reject("Negative number not allowed");
      }
    });
  }

  squareAsync(4).then(console.log);
  squareAsync(-3).catch(console.error);



}
