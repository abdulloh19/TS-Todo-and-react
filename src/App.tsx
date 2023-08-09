import styles from "./home.module.css";
import { ChangeEvent, useState } from "react";
import { Idata } from "./interfaces";
import { data } from "./constants";

const App = (): JSX.Element => {
  const [title, setTitle] = useState<string>();
  const [arr, setArr] = useState<Idata[]>(data);

  const changeHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
    setTitle(evt.target.value);
  };

  const handlerSubmit = (): void => {
    if (!title?.length) return;

    const newData = {
      name: title,
      id: new Date().getTime(),
      description: "description",
    };
    setArr([...arr, newData]);
    setTitle("");
    console.log(title);
  };

  const delBtn = (id: number): void => {
    const newDa = arr.filter((c) => c.id != id);
    setArr(newDa);
  };
  return (
    <div className={styles.todo}>
      <h1 className={styles.title}>App Todo</h1>
      <input
        type="text"
        value={title}
        placeholder="Enter todo"
        onChange={changeHandler}
        className={styles.input}
      />
      <button onClick={handlerSubmit} className={styles.button}>
        Add Todo
      </button>
      <div className={styles.card}>
        {arr.map((c) => (
          <div key={c.id} className={styles.cardItem}>
            {c.name}
            <div className={styles.cardBtn}>
              <button onClick={() => delBtn(c.id)} className={styles.btn}>
                Del
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
