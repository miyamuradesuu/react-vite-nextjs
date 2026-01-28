import { useState } from "react"; // use => hook

interface IProps {
    abc?: string
    ericFunction: (value: string) => void;
}

const InputTodo = (props: IProps) => {

    const { ericFunction } = props;

    const title = "Add new todo";

    // state có 2 thành phần -> tên và function cập nhật giá trị biến
    const [todo, setTodo] = useState("");
    const [listTodo, setListTodo] = useState(
        ["todo 1", "todo 2", "todo 3"]
    )

    const handleClick = () => {
        ericFunction(todo);
        // alert("Click me")
        // if (!todo) {
        //     alert("empty todo");
        //     return;
        // }
        // setListTodo([...listTodo, todo])
        // setTodo("")
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
            <br />
            <ul>
                {listTodo.map((item, index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                })}
            </ul>
        </div>
    )
}
export default InputTodo;