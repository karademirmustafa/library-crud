import React from "react";

export default function AddBook({book,handleChange,addBook}) {
  return (
    <div>
      <div className="container w-50 mt-5 border border-secondary">
        <form style={{ padding: "20px 20px 10px 20px" }}>
          <div className="form-floating mb-3">
            <input
              type="text"
              value={book.bookName}
              onChange={handleChange}
              className="form-control"
              name="bookName"
              id="floatingInput"
              placeholder="bookName"
            />
            <label for="floatingInput">Book Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              value={book.author}
              onChange={handleChange}
              className="form-control"
              name="author"
              id="floatingInput"
              placeholder="author"
            />
            <label for="floatingInput">Author</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              value={book.quantity}
              onChange={handleChange}
              className="form-control"
              name="quantity"
              id="floatingInput"
              placeholder="Quantity"
            />
            <label for="floatingInput">Quantity</label>
          </div>
          <div className="form-floating">
            <select
              className="form-select mb-3"
              value={book.department}
              onChange={handleChange}
              name="department"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option selected>Department</option>
              <option value="History & Criticism">History & Criticism</option>
              <option value="Religious">Religious</option>
              <option value="Music">Music</option>
              <option value="Study & Teaching">Study & Teaching</option>
              <option value="Ağır Engelliler">Ağır Engelliler</option>
            </select>
            <label for="floatingSelect">Select Book Department</label>
          </div>
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              value={book.comments}
              name ="comments"
              onChange={handleChange}
              id="floatingTextarea"
            ></textarea>
            <label for="floatingTextarea">Comments</label>
          </div>
          <button type="button" onClick={addBook} className="btn btn-primary">Add Book</button>
        </form>
        
      </div>
      
    </div>
  );
}
