var name = prompt("Как Вас зовут?");
name = name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
for (i = 1; i <= 10; i++) {
	document.write("Добрый день, <div style = \"color: green; display: inline-block\">" + name + "</div>!<br>");
}