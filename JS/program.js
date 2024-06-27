var messages = ["Join Hong Kong Industrial University's College of Science for world-class education and research opportunities in science and technology! 20 QUOTAS LEFT!",
"Join the future of engineering with Hong Kong Industrial University's College of Engineering, offering innovative programs and world-class faculty to prepare you for success in the field! 40 QUOTAS LEFT!",
"Join the future of interdisciplinary studies with Hong Kong Industrial University's College of Interdisciplinary Studies, offering innovative programs and world-class faculty to prepare you for success in various fields! 30 QUOTAS LEFT!"
];

function randomMessage(){
    const messageInfo = document.getElementById("infoblock");
    const currentMessage = messageInfo.textContent;
    let index = messages.indexOf(currentMessage);
    if (index === messages.length - 1) {
        index = 0;
    } else {
        index++;
    }
    messageInfo.textContent = messages[index];
};

function MessageOnLoad() {
    const messageInfo = document.getElementById("infoblock");
    messageInfo.textContent =
        messages[Math.floor(Math.random() * messages.length)];
    setInterval(randomMessage, 3000);
}

window.addEventListener("load", MessageOnLoad);
