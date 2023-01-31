const allCarsBrands = [
  {
    id: 9583,
    year: 2019,
    brand: "Volkswagen",
    model: "Passat Variant 1.5 TSI Comfortline",
    type: "Convertible",
    Transmission: "Automatic",
    fuel: "Gasoline",
    price: 40.335,
    image:
      "https://res.cloudinary.com/diyopzdxb/image/upload/v1674940554/cars-images/vw-1_qv0yve.jpg",
  },

  {
    id: 9584,
    year: 2020,
    brand: "Volkswagen",
    model: "Polo -1.0 TSI Highline",
    type: "Hatchback",
    Transmission: "Automatic",
    fuel: "Gasoline",
    price: 20.455,
    image:
      " https://res.cloudinary.com/diyopzdxb/image/upload/v1674942037/cars-images/vm-2_xkgjyg.png",
  },

  {
    id: 9585,
    year: 2020,
    brand: "Volkswagen",
    model: "Tiguan - 1.4 TSI eHybrid Life",
    type: "SUV",
    Transmission: "Automatic",
    fuel: "Hybrid - Gasoline",
    price: 43.955,
    image:
      " https://res.cloudinary.com/diyopzdxb/image/upload/v1674942591/cars-images/vw-3_nyjhwf.jpg",
  },

  {
    id: 9586,
    year: 2020,
    brand: "Volkswagen",
    model: "ID.4 - First 77 kWh",
    type: "SUV",
    Transmission: "Automatic",
    fuel: "Electric",
    price: 45.855,
    image:
      " https://res.cloudinary.com/diyopzdxb/image/upload/v1674942847/cars-images/vw-4_wmuiuy.jpg",
  },

  {
    id: 9587,
    year: 2021,
    brand: "Volkswagen",
    model: "T-Roc Cabrio - 1.5 TSI Style",
    type: "Convertible",
    Transmission: "Manual",
    fuel: "Gasoline",
    price: 33.855,
    image:
      " https://res.cloudinary.com/diyopzdxb/image/upload/v1674943381/cars-images/vw-5_rpvujo.jpg",
  },
  {
    id: 9582,
    year: 2021,
    brand: "Audi",
    model: "Q3 Sportback- - 35 TFSI S-line Edition ",
    type: "SUV",
    Transmission: "Automatic",
    fuel: "Gasoline",
    price: 62.955,
    image:
      "https://res.cloudinary.com/diyopzdxb/image/upload/v1674940176/cars-images/Adui-1_abeq6v.jpg",
  },
  {
    id: 9588,
    year: 2020,
    brand: "Audi",
    model: "Q7 - 60 TFSI e quattro Pro Line S Competition",
    type: "SUV",
    Transmission: "Automatic",
    fuel: "Hybrid - Gasoline",
    price: 94.955,
    image:
      " https://res.cloudinary.com/diyopzdxb/image/upload/v1674943841/cars-images/audi-2_znzgmq.jpg",
  },

  {
    id: 9589,
    year: 2020,
    brand: "Audi",
    model: "A1 - Sportback 25 TFSI Pro Line",
    type: "Hatchback",
    Transmission: "Manual",
    fuel: "Gasoline",
    price: 20.455,
    image:
      " https://res.cloudinary.com/diyopzdxb/image/upload/v1674945201/cars-images/audi-3_xm2kpu.png",
  },

  {
    id: 9590,
    year: 2019,
    brand: "Audi",
    model: " A3 - Limousine 35 TFSI CoD Design",
    type: "Sedan",
    Transmission: "Automatic",
    fuel: "Gasoline",
    price: 26.955,
    image:
      " https://res.cloudinary.com/diyopzdxb/image/upload/v1674982502/cars-images/audi-4_ni8siv.png",
  },

  {
    id: 9591,
    year: 2020,
    brand: "Audi",
    model: "RS Q8 - 4.0 TFSI RS Q8 quattro",
    type: "SUV",
    Transmission: "Automatic",
    fuel: "Gasoline",
    price: 169.95,
    image:
      " https://res.cloudinary.com/diyopzdxb/image/upload/v1674983459/cars-images/audi-5_jwcehi.png",
  },

  {
    id: 9592,
    year: 2021,
    brand: "SEAT",
    model: "Tarraco - 1.4 TSI e-Hybrid PHEV FR",
    type: "SUV",
    Transmission: "Automatic",
    fuel: "Hybrid - Gasoline",
    price: 43.955,
    image:
      " https://res.cloudinary.com/diyopzdxb/image/upload/v1674984205/cars-images/seat-1_niohbd.png",
  },

  {
    id: 9593,
    year: 2021,
    brand: "SEAT",
    model: "Ibiza - 1.0 TSI Style Business Intense",
    type: "SUV",
    Transmission: "Manual",
    fuel: "Gasoline",
    price: 18.455,
    image:
      " https://res.cloudinary.com/diyopzdxb/image/upload/v1674984406/cars-images/seat-2_uwbp40.png",
  },

  {
    id: 9594,
    year: 2020,
    brand: "SEAT",
    model: "Ibiza - 1.0 TSI Style Business Intense",
    type: "Hatchback",
    Transmission: "Automatic ",
    fuel: " Hybrid - Gasoline ",
    price: 28.955,
    image:
      " https://res.cloudinary.com/diyopzdxb/image/upload/v1674984740/cars-images/seat-3_xthrez.png",
  },

  {
    id: 9595,
    year: 2020,
    brand: "SEAT",
    model: "Leon Sportstourer - 1.5 eTSI FR",
    type: "SUV",
    Transmission: "Automatic ",
    fuel: "Gasoline ",
    price: 29.455,
    image:
      " https://res.cloudinary.com/diyopzdxb/image/upload/v1674985068/cars-images/seat-4_tagsfe.png",
  },

  {
    id: 9596,
    year: 2020,
    brand: "ŠKODA",
    model: "Superb - Combi 1.4 TSI iV Sportline Business",
    type: "Hatchback",
    Transmission: "Automatic ",
    fuel: "Hybrid - Gasoline",
    price: 41.455,
    image:
      " https://res.cloudinary.com/diyopzdxb/image/upload/v1674985467/cars-images/skoda-1_e6j9pf.webp",
  },

  {
    id: 9597,
    year: 2019,
    brand: "ŠKODA",
    model: "Fabia - Combi 1.0 TSI Ambition",
    type: "Hatchback",
    Transmission: "Manual",
    fuel: "Gasoline",
    price: 14.955,
    image:
      " https://res.cloudinary.com/diyopzdxb/image/upload/v1674985748/cars-images/skoda-2_xnbgou.webp",
  },

  {
    id: 9598,
    year: 2021,
    brand: "ŠKODA",
    model: "SCALA - 1.5 TSI Sport Business",
    type: "Hatchback",
    Transmission: " Automatic",
    fuel: "Gasoline",
    price: 26.455,
    image:
      " https://res.cloudinary.com/diyopzdxb/image/upload/v1674986012/cars-images/skoda-3_fnr0q2.webp",
  },

  {
    id: 9599,
    year: 2021,
    brand: "ŠKODA",
    model: "Karoq - 1.5 TSI ACT Sportline Business",
    type: "SUV",
    Transmission: " Automatic",
    fuel: "Gasoline",
    price: 34.855,
    image:
      " https://res.cloudinary.com/diyopzdxb/image/upload/v1674986776/cars-images/skoda-4_gldg8w.webp",
  },
];
export default allCarsBrands;
