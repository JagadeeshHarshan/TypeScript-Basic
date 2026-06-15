type Patient = {
  id: number;
  name: string;
  age: number;
  ward: string;
  vitals: { date: string; heartRate: number; temp: number }[];
};

let patients: Patient[] = [
  {
    id: 1,
    name: "Alice",
    age: 45,
    ward: "ICU",
    vitals: [
      { date: "2025-09-28", heartRate: 88, temp: 98.7 },
      { date: "2025-09-29", heartRate: 120, temp: 101.3 },
    ]
  },
  {
    id: 2,
    name: "Bob",
    age: 52,
    ward: "General",
    vitals: [
      { date: "2025-09-28", heartRate: 75, temp: 97.9 },
      { date: "2025-09-29", heartRate: 80, temp: 98.2 },
    ]
  }
];

let criticalPatients = patients.filter(p =>
  p.vitals.some(v => v.heartRate > 110 || v.temp > 100)
);


let wardSummary = patients.reduce<Record<string, string[]>>(
  (acc, p) => {
    if (!acc[p.ward]) {
      acc[p.ward] = [];
    }

    acc[p.ward]!.push(p.name);

    return acc;
  },
  {}
);



console.log("=== Critical Patients ===");
console.log(criticalPatients);

console.log("\n=== Ward Summary ===");
console.log(wardSummary);