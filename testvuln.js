/*
 WARNING ⚠️
 This is INTENTIONALLY VULNERABLE pure JavaScript code
 Use ONLY for Semgrep / AppSec learning
 Do NOT deploy in production
*/

// ================================
// Global unsafe variables
// ================================

var users = [
  { id: 1, username: "admin", password: "admin123", role: "admin" },
  { id: 2, username: "user", password: "user123", role: "user" }
];

var API_KEY = "HARDCODED_SECRET_KEY_ABC123";

// ================================
// DOM XSS – innerHTML
// ================================

function reflectedXSS() {
  var name = new URLSearchParams(window.location.search).get("name");
  document.getElementById("output").innerHTML = "Hello " + name;
}

// ================================
// DOM XSS – document.write
// ================================

function documentWriteXSS() {
  var msg = location.hash.substring(1);
  document.write(msg);
}

// ================================
// DOM XSS – setTimeout string eval
// ================================

function timeoutEvalXSS() {
  var payload = location.search.split("=")[1];
  setTimeout(payload, 1000);
}

// ================================
// Eval Injection
// ================================

function evalInjection() {
  var expr = prompt("Enter JS expression:");
  eval(expr);
}

// ================================
// Function Constructor Injection
// ================================

function functionInjection() {
  var code = location.hash.replace("#", "");
  var fn = new Function(code);
  fn();
}

// ================================
// Insecure LocalStorage Usage
// ================================

function storeToken() {
  var token = new URLSearchParams(location.search).get("token");
  localStorage.setItem("auth_token", token);
}

// ================================
// Insecure PostMessage
// ================================

window.addEventListener("message", function (event) {
  document.getElementById("msg").innerHTML = event.data;
});

// ================================
// IDOR – Client-side Authorization
// ================================

function getUserById() {
  var id = parseInt(new URLSearchParams(location.search).get("id"));
  var user = users.find(u => u.id === id);
  document.getElementById("user").innerHTML = JSON.stringify(user);
}

// ================================
// Hardcoded Credential Usage
// ================================

function checkApiKey() {
  if (API_KEY === "HARDCODED_SECRET_KEY_ABC123") {
    console.log("Authenticated");
  }
}

// ================================
// Open Redirect
// ================================

function openRedirect() {
  var next = new URLSearchParams(location.search).get("next");
  window.location.href = next;
}

// ================================
// Prototype Pollution
// ================================

function prototypePollution() {
  var obj = JSON.parse('{"__proto__": {"isAdmin": true}}');
  console.log({}.isAdmin);
}

// ================================
// Unsafe JSON.parse on user input
// ================================

function unsafeJSONParse() {
  var data = location.search.substring(1);
  var obj = JSON.parse(data);
  console.log(obj);
}

// ================================
// DOM-based SQLi simulation (logic flaw)
// ================================

function fakeSQLi() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var query = "SELECT * FROM users WHERE username='" + username + "' AND password='" + password + "'";
  console.log(query);
}

// ================================
// Unsafe Dynamic Script Loading
// ================================

function loadScript() {
  var src = new URLSearchParams(location.search).get("src");
  var s = document.createElement("script");
  s.src = src;
  document.body.appendChild(s);
}

// ================================
// Clickjacking vulnerable iframe
// ================================

function loadFrame() {
  var url = location.search.split("=")[1];
  document.getElementById("frame").src = url;
}

// ================================
// Insecure Regex (ReDoS)
// ================================

function regexDos() {
  var evil = /(a+)+$/;
  evil.test("aaaaaaaaaaaaaaaaaaaaaaaa!");
}

// ================================
// Excessive console logging
// ================================

function logSensitiveData() {
  console.log(users);
}

// ================================
// Unsafe Event Handler Injection
// ================================

function handlerInjection() {
  var code = location.hash.substring(1);
  document.body.setAttribute("onclick", code);
}

// ================================
// Repeated unsafe sinks for Semgrep coverage
// ================================

function repeat1() { document.getElementById("a").innerHTML = location.search; }
function repeat2() { document.getElementById("b").innerHTML = location.hash; }
function repeat3() { document.write(location.search); }
function repeat4() { eval(location.hash); }
function repeat5() { new Function(location.search)(); }
function repeat6() { window.location = location.search; }
function repeat7() { localStorage.setItem("data", location.search); }
function repeat8() { sessionStorage.setItem("data", location.hash); }
function repeat9() { document.body.innerHTML = location.search; }
function repeat10() { setInterval(location.hash, 1000); }

// ================================
// Auto trigger for demo
// ================================

reflectedXSS();
