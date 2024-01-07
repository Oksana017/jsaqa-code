const sorting = require("../../app");

describe("Books names test suit", () => {
    it("Books names should't be sorted without parametrs", () => {
        expect(() => sorting.sortByName()).toThrow();
      });
    
      
      it("Books names should't be sorted with only one parametr of two", () => {
        expect(() => sorting.sortByName("Гарри Поттер")).toThrow()
      });
  
    it("Books names should't be sorted with the same values", () => {
    expect(
      sorting.sortByName([
        "Парфюмер",
        "Парфюмер",
        "Парфюмер",
      ])
    ).toEqual([
      "Парфюмер",
      "Парфюмер",
      "Парфюмер",
    ]);
  });

});