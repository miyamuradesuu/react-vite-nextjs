import { useState } from "react"; // use => hook

interface IProps {
    abc?: string
    ericFunction: (value: string) => void;
    listTodo: string [];
    setListTodo: (value: string []) => void;
}

const InputTodo = (props: IProps) => {

    const { ericFunction, listTodo, setListTodo } = props;

    const title = "Add new todo";

    // state có 2 thành phần -> tên và function cập nhật giá trị biến
    const [todo, setTodo] = useState("");
    

    const handleClick = () => {
        // ericFunction(todo);
        // alert("Click me")
        if (!todo) {
            alert("empty todo");
            return;
        }
        setListTodo([...listTodo, todo])
        setTodo("")
    }


    return (
        <div style={{ border: "1px solid red" }}>
            <h1>{title}</h1>
            <input
                value={todo}
                type="text"
                onChange={(event) => {
                    setTodo(event.target.value)
                }}
            />
            &nbsp; &nbsp;
            <button onClick={() => handleClick()}>Save</button>
            
        </div>
    )
}
export default InputTodo;