var questions = [{ type: "choose", question: "<h3>3+4����</h3>", answers: ["+7", "8", "2", "9"], correct: [] },
    { type: "choose", question: "<h3>5+5</h3>", answers: ["11", "0", "9", "+10"], correct: [] },
    { type: "choose", question: "<h3>20-2</h3>", answers: ["22", "21", "+18", "4"], correct: [] },
    { type: "choose", question: "<h3>3+(-4)</h3>", answers: ["+3", "4"], correct: [] },
    { type: "choose", question: "<h3>7+4</h3>", answers: ["7", "12", "27", "+11"], correct: [] }, { type: "choose", question: "<h3>6+4</h3>", answers: ["+10", "4", "11", "2"], correct: [] }];
$("document").ready(function () { $("#jQuizler").jQuizler(questions); });