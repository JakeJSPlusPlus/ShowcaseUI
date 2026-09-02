export async function GET() {
  //Set dummy questions
  const question = [
    {
      question: "What is the capital of Ohio",
      answers: ["Columbus", "Cleveland", "Cincinnati", "Indianapolis"],
      correctAnswer: 1,
    },
    {
      question: "Which bird can't fly?",
      answers: ["sparrow", "chicken", "eagle", "penguin"],
      correctAnswer: 3,
    },
  ];
  //get a random question index that is in the length of the list
  const index = Math.floor(Math.random() * question.length);
  //get the question at the random index
  const selectedQuestion = question[index];
  //return the selected question as a JSON response
  return new Response(JSON.stringify(selectedQuestion), { status: 200 });
}
