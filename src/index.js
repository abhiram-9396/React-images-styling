import React from "react";
import ReactDOM from "react-dom";

var imge = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="false" spellcheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img src={imge + "?grayscale"} alt="random-images" />
    </div>
    <div>
      <img
        alt="images"
        src="https://tse2.mm.bing.net/th?id=OIP.elD6QtEngl7ogUcRqxkH8gHaEo&pid=Api&P=0&w=271&h=169"
      />
      <img
        alt="images"
        src="https://tse2.mm.bing.net/th?id=OIP.Dh7pFto7YSJM6dRwII-EGQHaE8&pid=Api&P=0&w=264&h=176"
      />
      <img
        alt="images"
        src="https://tse2.mm.bing.net/th?id=OIP.lEa60MoPEz7kNWZQBc_a3wHaEo&pid=Api&P=0&w=271&h=169"
      />
    </div>
  </div>,
  document.getElementById("root")
);
