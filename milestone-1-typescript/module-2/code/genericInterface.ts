interface Developer<T,X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: number;
  };
  smartWatch: T;
  bike?: X;
}

type NonBrandedW = {
  heartRate: string;
  calling: boolean;
};

interface AppleW {
  heartRate: string;
  calling: boolean;
  calculator: boolean;
  aiFeature: boolean;
}

interface Bike{
  brand: string;
  engineCapacity: string;
}

const poorDev: Developer<NonBrandedW,Bike> = {
  name: "Raihan",
  salary: 20000,
  device: {
    brand: "Samsung",
    model: "A71",
    releasedYear: 2023,
  },

  smartWatch: {
    heartRate: 'Yes',
    calling: false,
  },
  bike: {
    brand: 'Yamaha',
  engineCapacity: '200cc',
  }

};


const richDev: Developer<AppleW> = {
  name: "Kabir",
  salary: 200000,
  device: {
    brand: "Apple",
    model: "17",
    releasedYear: 2026,
  },

  smartWatch: {
    heartRate: 'Yes',
    calling: false,
    calculator: true,
    aiFeature: true,
  },
  bike: null,

};
