const profile = {
    name: "Priyal",
    city: "Bangalore",
    phoneNumber: 99999,
    isActive: true,
    hobbies: ["music", "travel", "food"],
    metadata: {
        isStudent: true,
        subjects: ["maths", "compiler", "AI"],
    },
    getName: function () {
        return this.name;
    },
    10: "yes",
    20: "No",
};

console.log(Object.values(profile.metadata.subjects));