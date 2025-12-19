import "../Styles/SideBar.css";
import axios from "axios";
import { useRef, useState } from "react";
import "../Styles/Hero.css";
import Card from "./Card";
import delBtn from '../assets/delete.png';

function SideBar({ref, hideOnClick}) {
    const textArea = useRef(null);
    const slectLevel = useRef(null);
    const selectCount = useRef(null);
    const [data, setData] = useState([]);

    const fetchQuiz = async (query, level, count) => {
        try {
            const api = import.meta.env.VITE_APP_URL;
            console.log(api);
            const response = await axios.post(`${api}/api/`, {
                query: query,
                level: level,
                count: count,
            });
            const array = JSON.parse(response.data.message);
            // console.log(JSON.parse(response.data.message));
            setData(array);
        } catch (err) {
            console.log(err);
        }
    };

    const handleQuery = () => {
        const query = textArea.current.value;
        const level = slectLevel.current.value;
        let count = Number(selectCount.current.value);
        if (count < 1) {
            selectCount.current.value = 1;
            count = 1;
        }
        if (!(query && level && count)) return alert("All fields are required.");
        fetchQuiz(query, level, count);
    };


    return (
        <>
            <aside ref={ref} className="sidebar-side">
                <div className="side-del"><img onClick={hideOnClick} src={delBtn} alt="del-btn" /></div>
                <div className="sidebar-topic container">
                    <p>Explain Topic</p>
                    <textarea ref={textArea}></textarea>
                </div>
                <div className="sidebar-select-level container">
                    <p>Select Level</p>
                    <select ref={slectLevel}>
                        <option value="Easy" key="">
                            Easy
                        </option>
                        <option value="Medium" key="">
                            Medium
                        </option>
                        <option value="Hard" key="">
                            Hard
                        </option>
                    </select>
                </div>
                <div className="container">
                    <p>Number of questions</p>
                    <input ref={selectCount} type="number" className="sidebar-count" />
                </div>
                <div className="sidebar-genrate-btn container">
                    <button
                        onClick={() => {
                            handleQuery();
                        }}
                    >
                        Genarate Quiz
                    </button>
                </div>
            </aside>
            <main className="hero-hero">
                {data.map((item, index) => (
                    <Card
                        key={index}
                        qno={index + 1}
                        question={item.question}
                        option={item.options}
                        answer={item.answer}
                    />
                ))}
            </main>
        </>
    );
}

export { SideBar };
