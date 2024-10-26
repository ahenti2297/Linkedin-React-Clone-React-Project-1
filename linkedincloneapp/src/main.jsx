import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import PostContext from "./components/context/PostContext.jsx";
import LikePostContext from "./components/context/LikePostContext.jsx";
import SearchItemsContext from "./components/context/SearchItemsContext.jsx";
import AccessTokenContext from "./components/context/AccessTokenContext.jsx";
import UserContext from "./components/context/UserContext.jsx";
import ThemeContext from "./components/context/ThemeContext.jsx"; // Import your ThemeContext

// Main rendering
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PostContext>
      <LikePostContext>
        <AccessTokenContext>
          <SearchItemsContext>
            <UserContext>
              <ThemeContext> {/* Wrap everything in ThemeContext */}
                <App />
              </ThemeContext>
            </UserContext>
          </SearchItemsContext>
        </AccessTokenContext>
      </LikePostContext>
    </PostContext>
  </BrowserRouter>
);
