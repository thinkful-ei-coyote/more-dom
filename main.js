window.addEventListener("DOMContentLoaded", main);
const blogEntries = [{title: 'Title', subtitle: 'Sub Title', content: 'Coding is great'}];

function main(){
    document.querySelector('.blog').addEventListener('submit',handleBlogSubmit);
    let listGroup = document.querySelector('.list-group');
    function handleBlogSubmit(evt){
        evt.preventDefault();
        let formData = new FormData(evt.target);
        let blogObj = Object.fromEntries(formData);
        blogEntries.push(blogObj);
        render();
    }

    function render(){
        let blogHTML = blogEntries.map(blog=>generateTemplate(blog));
        console.log(blogHTML);
        listGroup.innerHTML = blogHTML.join('');
    }

    function generateTemplate(blogEntry){    
        console.log(blogEntry);
        return ` 
        <a href="#" class="list-group-item list-group-item-action" aria-current="true">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">${blogEntry.title}</h5>
          <small>3 days ago</small>
        </div>
        <p class="mb-1">${blogEntry.subtitle}</p>
        <small>${blogEntry.content}</small>
      </a>`;
    }

    render();
}