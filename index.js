const { getItems, getInfo, getChoices, getQuestions } = require('@alheimsins/b5-johnson-120-ipip-neo-pi-r')
const fs = require('fs');

const questions = JSON.stringify(getItems('no'));

fs.writeFile('no.json', questions);

// document.body.innerHTML = '<ol>' + data.map(q=>`<li>${q.text}<ul>${q.choices.map(c=>`<li>${c.text}`).join('')}</ul></li>`).join('') + '</ol>'