const readline = require("readline");

const projects = [
  "AI-Powered Code Review Platform",
  "Hyperlocal News Platform",
  "Remote Job Interview Practice Room",
  "Personal AI Lawyer for Daily Life",
  "AI-Powered Custom Story Generator",
  "AI-Powered 'What Should I Watch?' Decision Maker",
  "'Predict My Future' Tarot Card Reader (AI + Fun)",
  "AI-Generated Pickup Lines Rating App",
  "Dynamic Recipe Generator",
  "Real-Time Multiplayer Quiz War",
  "AI-Powered Custom Story Generator"
];

function shuffleProjects() {
  for (let i = projects.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [projects[i], projects[j]] = [projects[j], projects[i]];
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function assignProjects() {
  shuffleProjects();
  let assigned = [];

  console.log("🚀 Projects ready! Type student names one by one. Leave blank and press Enter to stop.\n");

  while (projects.length > 0) {
    const studentName = await askQuestion("Enter student name (or leave blank to stop): ");

    if (!studentName.trim()) {
      console.log("\n👋 Assignment stopped by user.");
      break;
    }

    const randomProject = projects.pop();
    assigned.push({ student: studentName, project: randomProject });

    console.log(`🎉 ${studentName} got: ${randomProject}`);
    console.log(`📝 Remaining projects: ${projects.length}\n`);
  }

  if (projects.length === 0) {
    console.log("✅ All projects have been assigned!\n");
  }

  console.log("📋 Final Assignments:");
  assigned.forEach(({ student, project }, index) => {
    console.log(`${index + 1}. ${student} → ${project}`);
  });

  rl.close();
}

assignProjects();
