import React, { Component } from "react";
import { initState } from "../initState";

class MainComponent extends Component {
  render() {
    return (
      <main style={{ padding: "20px" }}>
        <h2>Books List</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
          }}
        >
          {initState.books.map((book) => (
            <div
              key={book.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>ISBN: {book.isbn}</p>
            </div>
          ))}
        </div>
      </main>
    );
  }
}

export default MainComponent;
