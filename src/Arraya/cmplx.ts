type TestCase = {
    id: number;
    title: string;
    priority: "High" | "Medium" | "Low";
    status: "Pass" | "Fail" | "Skip";
    owner: string;
};

let testCases: TestCase[] = [
    {
        id: 1,
        title: "Login with valid user",
        priority: "High",
        status: "Pass",
        owner: "John"
    },
    {
        id: 2,
        title: "Login with invalid password",
        priority: "High",
        status: "Fail",
        owner: "John"
    },
    {
        id: 3,
        title: "Registration",
        priority: "Medium",
        status: "Pass",
        owner: "Mary"
    }
];

const grouped = testCases.reduce(
    (acc: Record<string, TestCase[]>, tc: TestCase) => {

        if (!acc[tc.owner]) {
            acc[tc.owner] = [];
        }

        // Use !
        acc[tc.owner]!.push(tc);

        return acc;
    },
    {}
);

console.log(grouped);
