#!/usr/bin/env pwsh
# Start mongodb server
$database_process = Start-Process -PassThru -NoNewWindow -FilePath "mongod"
echo $database_process
# Start DwenguinoBlockly backend server
cd C:\Users\tomne\Documents\Blockly-for-Dwenguino-dwenguinoblockly-standalone\backend\
$server_process = Start-Process -PassThru -NoNewWindow -FilePath "node" -ArgumentList "--experimental-modules index.js"
echo $server_process
cd ..
$frontend_process = Start-Process -PassThru -WindowStyle Hidden -FilePath "powershell" -ArgumentList "electron","C:\Users\tomne\Documents\Blockly-for-Dwenguino-dwenguinoblockly-standalone\Blockly-for-Dwenguino\index.html","--no-sandbox"
echo $frontend_process
echo "waiting for frontend process to finish"
Wait-Process -Id $frontend_process.id
# Stop server and database server
"echo Stopping servers"
Stop-Process $server_process
Stop-Process $database_process
