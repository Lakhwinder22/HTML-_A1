// Event Loop
// Its mechansim  that handles asynchronous operations like handing the inputs and fetching data , waiting for timers.

//  Its help to blocking the main threads.

console.log("Start Feteching data");

function fetchData(studentId) {
  console.log(`Fetching data for students : ${studentId}`);
  setTimeout(() => {
    console.log(`Data for Students ${studentId} Fetched `);
  }, 2000);
}

function processStudentData(studentId) {
  console.log(`Processing the Student data ${studentId}`);
  setTimeout(() => {
    console.log(`Student ${studentId} data is processed`);
  }, 1000);
}

fetchData(1);
fetchData(2);

console.log("Event Ended");
