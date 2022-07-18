import React, { useState } from "react";

const Card = ({ post, deletePost, index }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="card mb-5" style={{ width: "470px" }}>
        <div className="d-flex justify-content-between p-3">
          <span className="d-flex justify-content-between">
            <i className="fa-solid fa-circle-user pe-2 fa-2x"></i>
            <h5 className="card-title">{post.username}</h5>
          </span>

          <span
            type="button"
            data-bs-toggle="modal"
            data-bs-target={post.title}
          >
            <i className="fa-solid fa-ellipsis"></i>
          </span>
        </div>

        <img
          src={post.imageUrl}
          className="card-img-top"
          alt="..."
          style={{ height: "470px" }}
        />
        <div className="card-body text-start">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.description}</p>
        </div>

        <div className="d-flex justify-content-between p-3">
          <input
            type="text"
            placeholder="Add a comment..."
            className="flex-fill border border-1 border-end-0 border-bottom-0 border-start-0 pt-3 app__comment"
          />
        </div>
      </div>

      <div
        className="modal fade"
        id={post.title}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" onSubmit={handleSubmit}>
          {isEdit ? (
            <form className="mt-3">
              <div className="modal-content">
                <div className="modal-header text-center">
                  <span
                    type="button"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setIsEdit(false)}
                  >
                    Cancel
                  </span>
                  <h5
                    className="modal-title mx-auto fw-bold"
                    id="exampleModalLabel"
                  >
                    Edit Post
                  </h5>
                  <span
                    type="submit"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    className="text-primary fw-bold"
                    onClick={() => setIsEdit(false)}
                  >
                    Done
                  </span>
                </div>
                <div className="modal-body">
                  <div className="container">
                    <div className="row">
                      <div className="col-6">
                        <img
                          src={post.imageUrl}
                          alt=""
                          style={{ width: "100%", height: "auto" }}
                        />{" "}
                      </div>
                      <div className="col-6">
                        <span className="d-flex align-items-center">
                          <i className="fa-solid fa-circle-user pe-2 fa-2x"></i>
                          <h5 className="card-title">{post.username}</h5>
                        </span>

                        <textarea
                          className="form-control border-0 app__description"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          placeholder="Write a description"
                          defaultValue={post.description}
                        ></textarea>
                        <hr />
                        <input
                          type="text"
                          className="form-control border-0 app__description"
                          placeholder="Add a title"
                          defaultValue={post.title}
                        />
                        <hr />
                        <input
                          type="text"
                          className="form-control border-0 app__description"
                          placeholder="Add an image URL"
                          defaultValue={post.imageUrl}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          ) : (
            <div className="modal-content">
              <div className="modal-body text-center pb-0">
                <span
                  type="button"
                  className="text-danger fw-bold text-decoration-none"
                  onClick={() => deletePost(post._id)}
                >
                  Delete
                </span>
                <hr />
                <span
                  type="button"
                  className="text-decoration-none"
                  onClick={() => setIsEdit(true)}
                >
                  Edit
                </span>
                <hr />
                <span type="button" data-bs-dismiss="modal" aria-label="Close">
                  <p>Cancel</p>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
