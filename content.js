function getArticleText() {
    const article = document.querySelector("article");
    if (article) return article.innerText;

    const paragraphs = Array.from(documet.querySelectorAll("p"));
    return paragraphs.map((p) => p.innerText).join("\n");
}


chrome.runtime.onMessage.addListener((req, _sender, sendResponse) => {
    if ((req.type = "GET_ARTICLE")) {
        const text = getArticleText();
        sendResponse({ text});
    }
});