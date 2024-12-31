function updatePreview(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    document.getElementById('namePreview').textContent = name || '[Your name will appear here]';
    document.getElementById('emailPreview').textContent = email || '[your email will appear here]';
    document.getElementById('messagePreview').textContent = message || '[your message will appear here]';
   

}
