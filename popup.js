document.getElementById("summarize").addEventListener("click", () => {
    const result = document.getElementById("result");
    result.textContent = "Extracting text...";

    chrome.tabe.query({ active : true, currentWindow: true }, ([tab])  => {
        chrome.tabs.sendMessage(
            tab.id,
            { type: GET_ARTICLE_TEXT},
            ({ text}) => {
                result.textContent = text 
                ? text.slice(0, 300)+ "_"
                : "no article text found.";
            }
        );
    });
});