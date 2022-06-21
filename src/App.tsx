import { gql, useQuery } from "@apollo/client";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      slug
      title
      teacher {
        name
        bio
        avatarURL
      }
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery<{lessons: Lesson[]}>(GET_LESSONS_QUERY);

  return (
    <>
      <h1 className="text-2xl font-bold text-violet-500">Hello World</h1>
      {data?.lessons.map((lesson) => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </>
  );
}

export default App;
