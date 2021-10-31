class Comments {
  constructor(type, elementId) {
    this.type = type;
    this.elementId = elementId;
    this.model = new CommentModel(this.type);
  }
  
  addSubmitListener(hikeName) {
      document.getElementById('submit-comment').onclick = () => {
        this.model.addComment(hikeName, document.getElementById('new-comment').value);
        document.getElementById('new-comment').value = '';
        this.model.showCommentsList(hikeName);
      };
  }
  
  showCommentsList(q = null) {
    try{
      const parent = document.getElementById(this.elementId);
      if (!parent) throw new Error('comment parent not found');
      // check to see if the commentUI code has been added yet
      if (parent.innerHTML === '') {
        parent.innerHTML = commentListUi;
      }
      if (q !== null) {
        // looking at one post, show comments and new comment button
        document.querySelector('.add-comment').style.display = 'block';
        this.addSubmitListener(q);
      } else {
        // no post name provided, hide comment entry
        document.querySelector('.add-comment').style.display = 'none';
      }
      // get the comments from the model
      let comments = this.model.getComments(q);
      if (comments === null) {
        // avoid an error if there are no comments yet.
        comments = [];
      }
      renderCommentList(parent.lastChild, comments);
    } catch (error) {
        console.log(error);
    }
  }

}
   

class CommentModel {
    constructor(type) {
        this.type = type;
        this.comments = readFromLocalStore(this.type) || [];
    }

    getComments(q = null) {
      if (q === null) {
        return this.comments;
      } else {
        return this.comments.filter(entry => entry.name === q);
      }
    }

    addComment(hikeName, comment) {
        const newComment = {
            name: hikeName,
            date: new Date(),
            content: comment
        };
        this.comments.push(newComment);
        writeToLocalStore(this.type, this.comments);
    }


} //end CommentModel class

function writeToLocalStore(key, data) {
    window.localStorage.setItem(key, JSON.stringify(data));
}

function readFromLocalStore(key) {
    return JSON.parse(window.localStorage.getItem(key));
}

const commentListUi = `<div class="add-comment">
    <h2>Add a Comment</h2>
    <input type="text" id="new-comment" />
    <button id="submit-comment">Add Comment</button>
    </div>
    <h2>Comments</h2>
    <ul>class="comments"</ul>`; 

function renderCommentList(element, comments) {
    element.innerHTML = '';
    comments.forEach(entry => {
      let item = document.createElement('li');
      item.innerHTML = `
        ${entry.name}: ${entry.content}
        `;
      element.appendChild(item);
    });
  }

export default Comments;
