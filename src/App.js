//사용
import React from "react";
import DropdownMenu from "./DropdownMenu";

function App() {
  return (
    <div>
      <DropdownMenu buttonText="메뉴">
        <li>메뉴 항목 1</li>
        <li>메뉴 항목 2</li>
        <li>메뉴 항목 3</li>
      </DropdownMenu>
    </div>
  );
}

export default App;
