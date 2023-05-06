const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/568/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/568/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/568/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/568/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/568/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const container = document.getElementById("container");

for (let i = 0; i < posts.length; i++) {
    const postCorrente = posts[i];
    const template = renderPost(postCorrente);
}


function renderPost(post) {
    
    const { author, created, content, media, likes, id } = post;


    // classe post
    const postss = document.createElement("div");
    postss.classList.add("post");
    
    // classe post__header
    const postHeader = document.createElement("div");
    postHeader.classList.add("post__header");
    
    // classe post-meta
    const postMeta = document.createElement("div");
    postMeta.classList.add("post-meta");
    
    // classe post-meta__icon
    const postMetaIcon = document.createElement("div");
    postMetaIcon.classList.add("post-meta__icon");
    
    // classe profile-pic
    const profilePic = document.createElement("img");
    profilePic.classList.add("profile-pic");
    profilePic.src = author.image;
    profilePic.alt = author.name;
    
    // classe post-meta__data
    const postMetaData = document.createElement("div");
    postMetaData.classList.add("post-meta__data");
    
    // classe post-meta__author
    const postMetaAutor = document.createElement("div");
    postMetaAutor.classList.add("post-meta__author");
    postMetaAutor.innerText = author.name;
    
    // classe post-meta__time
    const postMetaTime = document.createElement("div");
    postMetaTime.classList.add("post-meta__time");
    postMetaTime.innerText = created;
    
    // classe post__text
    const postText = document.createElement("div");
    postText.classList.add("post__text");
    postText.innerText = content;
    
    // classe post__image
    const postImage = document.createElement("img");
    postImage.classList.add("post__image");
    postImage.src = media;
    
    // classe post__footer
    const postFooter = document.createElement("div");
    postFooter.classList.add("post__footer");
    
    // classe likes
    const mipiace = document.createElement("div");
    mipiace.classList.add("likes", "js-likes");
    
    // classe likes__cta
    const likesCta = document.createElement("div");
    likesCta.classList.add("likes__cta");
    
    // classe like-button
    const likesButton = document.createElement("a");
    likesButton.classList.add("like-button", "js-like-button");
    likesButton.href = "#";
    likesButton.setAttribute('data-postid', id);

    
    // classe like-button__icon
    const likesButtonIcon = document.createElement("i");
    likesButtonIcon.classList.add("like-button__icon","fas", "fa-thumbs-up");
    likesButtonIcon.ariaHidden = "true";
    
    
    // classe like-button__label
    const likesButtonLabel = document.createElement("span");
    likesButtonLabel.classList.add("like-button__label");
    likesButtonLabel.innerText = "Mi Piace";
    
    // classe likes__counter
    const likesCounter = document.createElement("div");
    likesCounter.classList.add("likes__counter");
    likesCounter.innerHTML = `Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone`
    
    const iniziali = document.createElement("div");
    iniziali.innerText = getIniziali(author.name)

    if(author.image != null) {
        postMetaIcon.appendChild(profilePic);
    } else {
        postMetaIcon.appendChild(iniziali);
    }

    container.appendChild(postss);
    postss.appendChild(postHeader);
    postHeader.appendChild(postMeta);
    postMeta.appendChild(postMetaIcon);
    postMeta.appendChild(postMetaData);
    postMetaData.appendChild(postMetaAutor);
    postMetaData.appendChild(postMetaTime);
    postHeader.appendChild(postText);
    postHeader.appendChild(postImage);
    postHeader.appendChild(postFooter);
    postFooter.appendChild(mipiace);
    mipiace.appendChild(likesCta);
    likesCta.appendChild(likesButton);
    likesButton.appendChild(likesButtonIcon);
    likesButton.appendChild(likesButtonLabel);
    mipiace.appendChild(likesCounter);


}

function getIniziali(autore) {
    return autore[0] + autore.split(" ")[1][0];
}







