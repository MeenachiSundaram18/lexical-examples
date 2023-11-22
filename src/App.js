import "./styles.css";
import Editor from "./Editor";
import EditorWithHTML from "./editors/EditorWithHTML";

export default function App() {
  return (
    <div className="App">
      <h1>Rich Text Example</h1>
      {/* <Editor /> */}
      <EditorWithHTML />
    </div>
  );
}
