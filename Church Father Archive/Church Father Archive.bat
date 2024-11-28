@echo off
java -jar myapp-1.0-SNAPSHOT.jar
start "chrome.exe" http://localhost:5000
