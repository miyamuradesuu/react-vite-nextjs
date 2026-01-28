import { useState } from "react"; // use => hook

let count = 1;

const InputTodo = () => {

    const title = "Add new todo";

    // state có 2 thành phần -> tên và function cập nhật giá trị biến
    const [fullName, setFullName] = useState("")

    const handleClick = () => {
        alert("Click me")
    }

    return (
        <div>
            <div> new count = {count}</div>
            <h1>{title}</h1>
            <input type="text"
                onChange={(event) => {
                    setFullName(event.target.value)
                }}
            />
            &nbsp; &nbsp;
            <div>My todo is {fullName}</div>
            <button onClick={() => handleClick()}>Save</button>
        </div>
    )
}
export default InputTodo;