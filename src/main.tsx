
  import { createRoot } from "react-dom/client";
  import App from "./app/App";
  import "./styles/index.css";
  import { analytics } from './firebaseConfig'; // 导入analytics，确保初始化

  createRoot(document.getElementById("root")!).render(<App />);
  