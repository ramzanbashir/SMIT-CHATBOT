var chatBox = document.getElementById('chat-box');
var userInput = document.getElementById('user-input');

var faqs = [
    { question: "Web development course details", answer: "Saylani SMIT web development course mein HTML, CSS, JavaScript, React, Node.js cover hota hai." },
    { question: "App development course details", answer: "Saylani SMIT app development course mein Java, Kotlin, Android Development aur iOS Development cover hota hai." },
    { question: "Course duration", answer: "Har course ki duration takriban 6 months hai." },
    { question: "Fee structure", answer: "Saylani SMIT ke tamam courses bilkul free hain." },
    { question: "Admission process", answer: "Admission ke liye aapko online form fill karna hoga aur phir ek aptitude test dena hoga." },
    { question: "Class timings", answer: "Classes weekday evenings mein hoti hain 6 PM se 9 PM tak." },
    { question: "Campus locations", answer: "Saylani SMIT ke Karachi mein mukhtalif campuses hain jese North Nazimabad, Saddar, aur Gulshan." },
    { question: "Certification", answer: "Course complete hone par aapko certification milta hai jo aapke career growth mein madadgar sabit hota hai." },
    { question: "Online classes", answer: "Haan, kuch courses online bhi offer kiye jate hain." },
    { question: "Eligibility criteria", answer: "Har course ke liye minimum qualification intermediate hai aur aapko basic computer knowledge hona chahiye." }
];

var suggestions = [
    "Aap web development seekhna chahte hain ya app development?",
    "Kya aapko programming languages ka pehle se experience hai?",
    "Aap apne interest ke mutabiq course choose karein.",
    "Agar aapko future mein freelance karna hai to web development behtareen choice hai.",
    "Agar aap mobile apps banana chahte hain to app development course karein.",
    "Agar aapki math achi hai to aap data science course bhi consider kar sakte hain.",
    "Web development aur app development courses ka content aur projects dono mein different hote hain, is liye aapko apna interest dekh kar course choose karna chahiye."
];

function getResponse(message) {
    const response = faqs.find(faq => message.toLowerCase().includes(faq.question.toLowerCase()));
    return response ? response.answer : "Mujhe aapki baat samajh nahi aayi. Kya aap zara specific ho sakte hain?";
}

function sendMessage() {
    const message = userInput.value.trim();
    if (message === "") return;

    appendMessage(message, "user");
    const response = getResponse(message);
    setTimeout(() => appendMessage(response, "bot"), 500);

    userInput.value = "";
}

function appendMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function showFAQs() {
    faqs.forEach(faq => {
        appendMessage(faq.question, "user");
        setTimeout(() => appendMessage(faq.answer, "bot"), 500);
    });
}

function showSuggestions() {
    suggestions.forEach(suggestion => appendMessage(suggestion, "bot"));
}
