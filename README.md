## memojiAPI
<img width="100%" src="https://a.top4top.io/p_24172rvrf1.png">
<br />
an API provides more than 1500 emoji faces to use maybe as avatars in you next project :)

### Docs
Those are all the available at the moment endpoint to fetch data
`https://memoji.tareqdev.repl.co/api/...`

| endpoint |description  |
|--|--|
|`/api/allProperties`|where you can find all the memojis' properties|
|`/api/random`|get a random memoji|
|`/api/[Person][Skintone][Mood]`|get a specified memoji, e.g: `AlfredWhiteHappy`|

I created a little demo where you can see all the properties in nice web view (src: `./web` folder), you can find it [here](https://memoji.tareqdev.repl.co)

### Installation
I guess everyone knows how to clone a repo, we are just lazy to type commands
```
git clone https://github.com/Txreq/memoji .
```
configure server port by editing the `.env` file.
before starting the application you have to install `concurrently` package to run the server and the web view at the same time, unless you like the classic method.
```
npm i -g concurrently
npm run startDev
```
