import { useEffect, useRef, useState } from "react";
import "./App.css";

import { db } from "./firebase";
import { onValue, push, ref, set } from "firebase/database";

//  "Chốt lại 4 bước: Lấy nội dung -> Kiểm tra -> Gửi -> Xóa ô nhập. AI Coder xin phép bắt đầu code!"

function App() {
  const inputRef = useRef("");
  const [conversation, setConversation] = useState([]);

  const onClick = async () => {
    const message = inputRef.current.value;

    if (message) {
      console.log(message);

      await set(push(ref(db, "messages/")), {
        message,
      });

      // logic handle server
      inputRef.current.value = "";
    }
  };

  const handleData = (data) => {
    let arr = [];

    for (const key in data) {
      arr.push({
        _id: key,
        ...data[key],
      });
    }

    setConversation(arr);
  };

  const renderData = () => {
    return conversation.map((item) => {
      return (
        <div key={item._id}>
          <p>{item.message}</p>
        </div>
      );
    });
  };

  useEffect(() => {
    const starCountRef = ref(db, "messages/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();

      handleData(data);
      // updateStarCount(postElement, data);
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="conversation">{renderData()}</div>

        <div className="footer">
          <input type="text" placeholder="Typing..." ref={inputRef} />
          <button onClick={onClick}>Send</button>
        </div>
      </div>
    </>
  );
}

export default App;
