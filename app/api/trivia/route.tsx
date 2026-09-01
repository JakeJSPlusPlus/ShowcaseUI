export async function GET() {

  const question = [{
        question: 'What is the capital of Ohio',
        answers: ['Columbus', 'Cleveland', 'Cincinnati', 'Indianapolis'],
        correctAnswer: 1
    },
    {
        question: "Which bird can't fly?",
        answers: ["sparrow", "chicken", "eagle", "penguin"],
        correctAnswer: 3
    }]
  const index = Math.floor(Math.random() * question.length);
  const selectedQuestion = question[index];
  return new Response(JSON.stringify(selectedQuestion), { status: 200 });



}
