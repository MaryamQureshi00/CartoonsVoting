let likes = {
    option1: 0,
    option2: 0,
    option3: 0,
    option4: 0
};

function like(option) {
    likes[option]++;
    updateLikeCount(option);
}

function updateLikeCount(option) {
    const voteCountElement = document.getElementById(`voteCount_${option}`);
    voteCountElement.innerText = `${likes[option]} likes `;
}
