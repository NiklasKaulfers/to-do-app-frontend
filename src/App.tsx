import './App.css'
import Navbar from "./components/navbar.tsx";
import {type AuthContextProps, useAuth} from "react-oidc-context";
import AuthHandler from "./services/auth-service.tsx";
import {Route, Routes} from "react-router-dom";
import CreateTodo from "./components/todos/create-todo.tsx";
import Lists from "./components/lists/lists.tsx";
import MainArea from "./components/main-area.tsx";
import TodoMain from "./components/todos/todo-main.tsx";
import GetTodos from "./components/todos/get-todos.tsx";
import TodoDetails from "./components/todos/todo-details.tsx";
import CreateList from "./components/lists/create-list.tsx";
import ViewList from "./components/lists/view-lists.tsx";
import ListDetails from "./components/lists/list-details.tsx";

function App() {

    const auth: AuthContextProps = useAuth();
    AuthHandler.setAuthContext(auth);

    if (auth.isLoading) {
        return <div>Loading...</div>;
    }

    if (auth.error) {
        return <div>Encountering error... {auth.error.message}</div>;
    }

    if (auth.isAuthenticated) {
        return (
            <>
                <Navbar />
                <Routes>
                    <Route path="/" element={<MainArea/>}/>
                    <Route path="/todos" element={<TodoMain/>}/>
                    <Route path="/todos/new" element={<CreateTodo/>}></Route>
                    <Route path="/todos/view" element={<GetTodos/>}></Route>
                    <Route path="/todos/:id" element={<TodoDetails/>}></Route>
                    <Route path="/lists" element={<Lists/>}/>
                    <Route path="/lists/new" element={<CreateList/>}/>
                    <Route path="/lists/view" element={<ViewList/>}/>
                    <Route path="/lists/:id" element={<ListDetails/>}/>
                </Routes>
            </>
        );
    }
    return (
        <div>
            <button onClick={() => auth.signinRedirect()}>Sign in</button>
            <button onClick={() => AuthHandler.signOut()}>Sign out</button>
        </div>
    );
}

export default App
