// TERMINAL (code by sylviapap at https://github.com/sylviapap/chatbot)

    document.addEventListener("DOMContentLoaded", () => {
        const inputField = document.getElementById("input");
        const gitOpen = document.getElementById("git");
        inputField.addEventListener("keydown", (e) => {
        if (e.code === "Enter") {
            let input = inputField.value;
            inputField.value = "";
            output(input);
        }
        });
    });
    
    function output(input) {
        let product;
        // Regex remove non word/space chars
        // Trim trailing whitespce
        // Remove digits - not sure if this is best
        // But solves problem of entering something like 'hi1'
        
        let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
        text = text
        .replace(/ a /g, " ")   // 'tell me a story' -> 'tell me story'
        .replace(/i feel /g, "")
        .replace(/whats/g, "what is")
        .replace(/please /g, "")
        .replace(/ please/g, "")
        .replace(/r u/g, "are you");
    
        if (compare(prompts, replies, text)) { 
        // Search for exact match in `prompts`
        product = compare(prompts, replies, text);
        } else if (text.match(/thank/gi)) {
        product = "You're welcome!"
        } else if ((compare(gitprompts, gitreplies, text)) && (document.getElementById("git"))) {
            console.log("found");
            product = compare(gitprompts, gitreplies, text);
         } else {
        // If all else fails: random alternative
        product = alternative[Math.floor(Math.random() * alternative.length)];
        }
    
        // Update DOM
        addChat(input, product);
    }
    
    function compare(promptsArray, repliesArray, string) {
        let reply;
        let replyFound = false;
        for (let x = 0; x < promptsArray.length; x++) {
        for (let y = 0; y < promptsArray[x].length; y++) {
            if (promptsArray[x][y] === string) {
            let replies = repliesArray[x];
            reply = replies[Math.floor(Math.random() * replies.length)];
            replyFound = true;
            // Stop inner loop when input value matches prompts
            break;
            }
        }
        if (replyFound) {
            // Stop outer loop when reply is found instead of interating through the entire array
            break;
        }
        }
        return reply;
    }
    function compare(gitpromptsArray, gitrepliesArray, string) {
        let reply;
        let replyFound = false;
        for (let x = 0; x < gitpromptsArray.length; x++) {
        for (let y = 0; y < gitpromptsArray[x].length; y++) {
            if (gitpromptsArray[x][y] === string) {
            let gitreplies = gitrepliesArray[x];
            reply = gitreplies[Math.floor(Math.random() * gitreplies.length)];
            replyFound = true;
            // Stop inner loop when input value matches prompts
            break;
            }
        }
        if (replyFound) {
            // Stop outer loop when reply is found instead of interating through the entire array
            break;
        }
        }
        return reply;
    }
    
    function addChat(input, product) {
        const messagesContainer = document.getElementById("messages");
    
        let userDiv = document.createElement("div");
        userDiv.id = "user";
        userDiv.className = "user response";
        userDiv.innerHTML = `> <span>${input}</span>`;
        messagesContainer.appendChild(userDiv);
    
        let botDiv = document.createElement("div");
        //let botImg = document.createElement("img");
        let botText = document.createElement("span");
        botDiv.id = "bot";
        //botImg.src = "bot-mini.png";
        //botImg.className = "avatar";
        botDiv.className = "bot response";
        botText.innerText = "...";
        botDiv.appendChild(botText);
        //botDiv.appendChild(botImg);
        messagesContainer.appendChild(botDiv);
        // Keep messages at most recent
        messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
    
        // Fake delay to seem "real"
        setTimeout(() => {
        botText.innerText = `${product}`;
        }, 100
        )
    }

// FIREFOX
var browserPages = document.getElementsByClassName("webpage");
var browserTabs = document.getElementsByClassName("tab");

function toggleTab(sectionname) {
    $(browserPages).removeClass("show");
    $(document.getElementById(sectionname)).addClass("show");
    $(browserTabs).removeClass("active");
    $(document.getElementById(sectionname + "tab")).addClass("active");
}

function closeTab(sectionname) {
    $(document.getElementById(sectionname)).removeClass("show");
    $(document.getElementById(sectionname + "tab")).addClass("hidden");
}

var browserFrame = top.document.getElementById('firefoxframe');
var browserVideoPages = browserFrame.contentWindow.document.getElementsByClassName("webpage");
var browserVideoTabs = browserFrame.contentWindow.document.getElementsByClassName("tab");

function openTab(sectionname) {
    //console.log("loads?", browserFrame, browserVideoPages, browserVideoTabs);
     $(browserVideoPages).removeClass("show");
    $(browserVideoTabs).removeClass("active");
    $(browserFrame.contentWindow.document.getElementById(sectionname)).addClass("show");
    $(browserFrame.contentWindow.document.getElementById(sectionname + "tab")).removeClass("hidden");
    $(browserFrame.contentWindow.document.getElementById(sectionname + "tab")).addClass("active");
}
