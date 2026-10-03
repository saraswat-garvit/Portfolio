export type ChatbotAnswer = {
  keywords: string[]
  answer: string
}

export const chatbotAnswers: ChatbotAnswer[] = [
  {
    keywords: ['experience', 'years', 'how long', 'work'],
    answer: 'Garvit has 3.5+ years of experience as a Software Engineer, working across backend, full stack, cloud and DevOps.' ,
  },
  {
    keywords: ['current company', 'arabyads', 'company'],
    answer: 'He currently works at ArabyAds as a Software Engineer / Full Stack Developer in the AdTech domain.',
  },
  {
    keywords: ['skills', 'stack', 'tech', 'technologies'],
    answer: 'His core stack includes C#, .NET / ASP.NET Core, React.js, Node.js, SQL Server, PostgreSQL, MongoDB, AWS, Azure, Docker, Kubernetes and CI/CD.',
  },
  {
    keywords: ['project', 'projects', 'work'],
    answer: 'Notable work includes cloud deployment, dockerized microservices, Python automation and an AdTech platform built with Node.js and ASP.NET Core.',
  },
  {
    keywords: ['education', 'college', 'aktu'],
    answer: 'He completed B.Tech in Computer Science & Engineering from Dr. A.P.J. Abdul Kalam Technical University (AKTU) in 2023.',
  },
  {
    keywords: ['adtech'],
    answer: 'His current domain focus is AdTech, where he works on scalable APIs, backend services and delivery workflows.',
  },
]