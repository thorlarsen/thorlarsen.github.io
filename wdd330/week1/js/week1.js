function loadStory(){
    let storyName = document.getElementById('name-input').value;
    let storyHTML = localStorage.getItem(storyName);
    document.getElementById('story-editor').value = storyHTML;
}

function saveStory(){
    let storyName = document.getElementById('name-input').value;
    let storyHTML = document.getElementById('story-editor').value;
    localStorage.setItem(storyName,storyHTML);
}

function displayStory(){
    let storyName = document.getElementById('name-input').value;
    let storyHTML = document.getElementById('story-editor').value;
    document.getElementById('name-display').innerHTML = storyName;
    document.getElementById('story-display').innerHTML = storyHTML;
}