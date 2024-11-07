
//for placeholder in chat
const textarea = document.querySelector('.chat-input');
const sendMessageButton = document.querySelector('.send-message');
const messagesContainer = document.querySelector('.messages-container');
const helloMessage = document.querySelector('.hello-message');

// add message to chat
function addMessage(content, className) {
    const message = document.createElement('div');
    message.classList.add('message', className);
    message.innerHTML = `<p>${content}</p>`;
    messagesContainer.appendChild(message);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// send message
sendMessageButton.addEventListener('click', function () {
    const messageText = textarea.value.trim();
    
    if (messageText !== '') {
        // hide hello-message
        helloMessage.style.display = 'none';
        
        // add user message
        addMessage(messageText, 'message-user');      
        // block send message button
        sendMessageButton.disabled = true;
        textarea.disabled = true;

        // imitate of typing
        simulateTyping();
    }
});

// imitation of typing
function simulateTyping() {
    // imitate typing
    const typingMessage = document.createElement('div');
    typingMessage.classList.add('message', 'message-other', 'typing');
    typingMessage.innerHTML = `<p>...</p>`;
    messagesContainer.appendChild(typingMessage);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    setTimeout(() => {
        typingMessage.remove(); //remove imitation of typing
        addMessage('Hello. Can I help you?', 'message-other');
        
        // unblock send message button
        sendMessageButton.disabled = false;
        textarea.disabled = false;
        textarea.focus(); 

    }, 2000); //timeout for 2 seconds
}
textarea.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = `${Math.min(this.scrollHeight, 100)}px`;
});
sendMessageButton.addEventListener('click', function () {
    textarea.value = '';
    textarea.style.height = '';
});