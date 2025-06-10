// script.js

// Συνάρτηση για fetch των posts και εμφάνιση λίστας
async function getPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts'); 
    const posts = await response.json();
    
    // Εμφάνιση πρώτων 10 posts στο #posts div
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = ''; // Καθαρίζουμε το container
    
    // Περνάμε μόνο τα πρώτα 10 posts
    const first10Posts = posts.slice(0, 10);
    
    first10Posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.textContent = post.title;
      postElement.classList.add('post-item');
      
      // Προσθήκη event listener για click
      postElement.addEventListener('click', () => showDetails(post.id));
      
      postsContainer.appendChild(postElement);
    });

  } catch (error) {
    document.getElementById('posts').innerText = 'Σφάλμα φόρτωσης δεδομένων'; 
    console.error('Error:', error);
  }
}

// Συνάρτηση για εμφάνιση λεπτομερειών και σχολίων για ένα post
async function showDetails(id) {
  const detailsDiv = document.getElementById('details');
  detailsDiv.innerHTML = 'Φόρτωση...'; // Προσωρινό μήνυμα
  
  try {
    const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await postRes.json();
    
    const commentsRes = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
    const comments = await commentsRes.json();
    
    // Εμφάνιση post details και comments
    detailsDiv.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
      <h3>Σχόλια:</h3>
      <ul>
        ${comments.map(comment => `<li>${comment.body}</li>`).join('')}
      </ul>
    `;

  } catch (error) {
    detailsDiv.innerText = 'Σφάλμα φόρτωσης λεπτομερειών';
    console.error('Error:', error);
  }
}

document.addEventListener('DOMContentLoaded', getPosts);