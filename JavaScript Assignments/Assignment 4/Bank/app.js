const users = [
    { name: "Jawwad", balance: 1000 },
    { name: "Ali", balance: 800 },
    { name: "Sami", balance: 1200 }
];

function performAction(action, userName, amount = 0, targetUserName = null) {
    const user = users.find(u => u.name === userName);

    if (!user) {
        return `User "${userName}" not found.`;
    }

    switch (action) {
        case "deposit":
            user.balance += amount;
            return `${user.name}'s new balance is $${user.balance}`;

        case "withdraw":
            if (user.balance >= amount) {
                user.balance -= amount;
                return `${user.name} withdrew $${amount}. New balance: $${user.balance}`;
            } else {
                return `Insufficient funds for ${user.name}.`;
            }

        case "transfer":
            const targetUser = users.find(u => u.name === targetUserName);
            if (!targetUser) return `Target user "${targetUserName}" not found.`;

            if (user.balance >= amount) {
                user.balance -= amount;
                targetUser.balance += amount;
                return `${user.name} transferred $${amount} to ${targetUser.name}. ${user.name}'s new balance: $${user.balance}`;
            } else {
                return `Insufficient funds for ${user.name} to transfer.`;
            }

        case "checkBalance":
            return `${user.name}'s current balance is $${user.balance}`;

        default:
            return `Invalid action: "${action}"`;
    }
}

const action = prompt("Enter action (deposit, withdraw, transfer, checkBalance):");
const userName = prompt("Enter your name (Jawwad, Ali, Sami):");

let result;

if (action === "deposit" || action === "withdraw") {
    const amount = parseFloat(prompt("Enter amount:"));
    result = performAction(action, userName, amount);
} else if (action === "transfer") {
    const amount = parseFloat(prompt("Enter amount to transfer:"));
    const targetUser = prompt("Enter the name of the user to transfer to:");
    result = performAction("transfer", userName, amount, targetUser);
} else if (action === "checkBalance") {
    result = performAction("checkBalance", userName);
} else {
    result = "Invalid action.";
}

alert(result);
console.log(result);