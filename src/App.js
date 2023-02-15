import { useGetAllPostsQuery } from './services/post';
import PostList from './components/PostList';
import Details from './components/Details';
function App() {
  const { data, error, isLoading } = useGetAllPostsQuery();
  console.log(data);
  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          {data.map((post, i) => (
            <PostList key={post.id} post={post} />
          ))}
        </>
      ) : null}

      <Details />
    </>
  );
}

export default App;
