// Task 01
// Voting Eligibility

const age = 18;
const isCitizen = false;

if (age >= 18) {
  if (isCitizen) {
    console.log("You can vote.");
  } else {
    console.log("You must be citizen to vote.");
  }
} else {
  console.log("You are too young to vote.");
}

// Task 02
// ATM withdrawal
let balance = 100;
let withdraw = 2000;

if (balance >= 1000) {
  //   console.log("Balance is more at least 1000");
  if (withdraw <= balance) {
    console.log("Withdrawal is successful");
  } else {
    console.log("Insufficient Balance.");
  }
} else {
  console.log("Minimum balance is not maintained.");
}

// Task 03
// Login system

const username = "Adolf_Hitler";
const password = 112244;

if (username === "Adolf_Hitler") {
  if (password === 112244) {
    console.log("Login successful");
  } else {
    console.log("Password Incorrect");
  }
} else {
  console.log("User not found");
}

// Task 04
// Movie Ticket
const personAge = 15;
const hasTicket = true;

if (personAge >= 13) {
  if (hasTicket) {
    console.log("Enjoy the movie.");
  } else {
    console.log("Please buy ticket.");
  }
} else {
  console.log("You are too young for this movie.");
}

// Task 05
// Online shopping

let cardTotal = 1400;
let premiumMember = true;

if (cardTotal >= 5000) {
  //   console.log("I am over ");
  if (premiumMember) {
    let discount = (cardTotal * 20) / 100;

    cardTotal = cardTotal - discount;
    console.log("You got 20% discount, and your final amount is: " + cardTotal);
  } else {
    // console.log("I don't have membership card");
    discount = (cardTotal * 10) / 100;

    cardTotal = cardTotal - discount;
    console.log(
      "You got 10% discount, and your discounted price is: " + cardTotal,
    );
  }
} else {
  //   console.log("I am  not over");
  if (cardTotal >= 3000) {
    console.log("You qualify for free shipping.");
  } else {
    console.log("No discount or free shipping, you have to pay: " + cardTotal);
  }
}

// Task 06
// University Admission

const studentGpa = 4;
const testScore = 50;

if (studentGpa >= 5) {
  if (testScore >= 80 && testScore <= 100) {
    console.log("Admission Successful.");
  } else {
    console.log("GPA is good but test score is too low.");
  }
} else {
  if (studentGpa >= 4.5) {
    console.log("Eligible for waiting list.");
  } else {
    console.log("Admission Denied");
  }
}

// Task 07
// Bank Loan Approval

let applicantAge = 23;
let monthlyIncome = 60000;
let creditScore = 900;

if (applicantAge >= 22) {
  if (monthlyIncome >= 50000) {
    if (creditScore >= 700) {
      console.log("Loan approved.");
    } else {
      console.log("Loan denied due to low credit score.");
    }
  } else {
    console.log("Income is too low.");
  }
} else {
  console.log("Applicant must be at least 21 years old");
}

// Task 08
// Student Final Result

let attendance = 89;
let examScore = 78;
let assignmentComplete = true;

if (attendance >= 80) {
  if (examScore >= 78) {
    if (assignmentComplete) {
      console.log("Passed with distinction.");
    } else {
      console.log("Assignment must be completed.");
    }
  } else {
    console.log("Failed due to low exam score");
  }
} else {
  console.log("Failed due to low attendance");
}
