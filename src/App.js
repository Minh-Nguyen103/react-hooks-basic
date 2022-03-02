import { useEffect, useState } from "react";
import queryString from "query-string";
import Pagination from "./components/Pagination";
import PostList from "./components/PostList";
import TodoForm from "./components/TodoForm";
// import "./App.css";
import TodoList from "./components/TodoList";
import PostFilterForm from "./components/PostFilterForm";
import Clock from "./components/Clock";
import MagicBox from "./components/MagicBox";

function App() {
  const [todoList, setTodoList] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("todoList")) || [
        { id: 1, title: "Hôm nay là một ngày rất tuyệt" },
        { id: 2, title: "Ngày ba mẹ tớ cưới nhau" },
        { id: 3, title: "Kỉ niệm 29 năm bên cạnh nhau" },
      ]
    );
  });

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 1,
    title_like:'',
  });

  useEffect(() => {
    async function fetchPostList() {
      const paramsString = queryString.stringify(filter);
      const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();

      console.log("Yeah");
      const { data, pagination } = responseJSON;
      setPostList(data);
      setPagination(pagination);
    }

    fetchPostList();
  }, [filter]);

  function handlePageChange(newPage) {
    console.log("hahahaah", newPage);
    setFilter({
      ...filter,
      _page: newPage,
    });
  }

  const handleTodoClick = (todo) => {
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
  };

  const handleSubmit = (value) => {
    const todo = {
      id: todoList.length + 1,
      ...value,
    };

    const newTodoList = [...todoList];
    newTodoList.push(todo);
    setTodoList(newTodoList);
  };

  function handleFilterChange(newFilters) {
    console.log("New filter", newFilters);
    setFilter({
      ...filter,
      _page: 1,
      title_like: newFilters.searchTerm,
    });
  }

  const [showClock, setShowClock] = useState(false);

  return (
    <div className="App">
      <h1>WELCOME TO REACT HOOKS</h1>

      <MagicBox />
      {showClock && <Clock />}
      <button onClick={()=> showClock === false ? setShowClock(true) : setShowClock(false)}>HideClock</button>
      {/* <PostFilterForm onSubmit={handleFilterChange} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPgaeChange={handlePageChange} /> */}
      {/* <TodoForm onSubmit={handleSubmit} />
      <TodoList todoList={todoList} onTodoList={handleTodoClick} /> */}
    </div>
  );
}

export default App;

// firstname -> '  laM'
//lastName -> '  ngUyen  '

// console.log("nguyEn".toUpperCase(0));
