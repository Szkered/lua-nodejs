## Goal
Minimal expressjs app that calls lua scripts in the server side. Idea is to let nodejs to call compiled lua directly via child process.

## Get-started

Install Nodejs stuff:
```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
npm install
```

Install Lua tools:
```
sudo apt-get install lua5.2 liblua5.2 luarockt
sudo luarocks install luastatic
```

To compile your lua scripts into executable (for file `main.lua`):
```
luastatic main.lua /usr/lib/x86_64-linux-gnu/liblua5.2.a -I/usr/include/lua5.2
```

Now, serve your file by simply do:
```
node app.js
```

And you can visit your app via port 3000.
