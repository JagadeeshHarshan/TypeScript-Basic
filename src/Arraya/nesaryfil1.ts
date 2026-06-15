type flight= {
    flightNo: string;
    destination: string;
    seats: { seatNo: string; booked: boolean}[];
};

let flights: flight[] = [
    { flightNo: "AI101", destination: "New York", seats:[{ seatNo: "1A", booked: true}, {seatNo: "18", booked: false}]},
    { flightNo: "AI202", destination: "London", seats: [{ seatNo: "2A", booked: false }, { seatNo: "2B", booked: false }] },
    { flightNo: "AI303", destination: "Paris", seats: [{ seatNo: "3A", booked: true }, { seatNo: "3B", booked: true }] }
];

let availableFlights = flights.filter(f => f.seats.some(s => !s.booked));

console.log("=== Available Flights ===");
console.log(availableFlights);



