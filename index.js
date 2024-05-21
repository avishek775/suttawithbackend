require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

const githubData={
    
        "login": "avishek775",
        "id": 147587554,
        "node_id": "U_kgDOCMwB4g",
        "avatar_url": "https://avatars.githubusercontent.com/u/147587554?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/avishek775",
        "html_url": "https://github.com/avishek775",
        "followers_url": "https://api.github.com/users/avishek775/followers",
        "following_url": "https://api.github.com/users/avishek775/following{/other_user}",
        "gists_url": "https://api.github.com/users/avishek775/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/avishek775/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/avishek775/subscriptions",
        "organizations_url": "https://api.github.com/users/avishek775/orgs",
        "repos_url": "https://api.github.com/users/avishek775/repos",
        "events_url": "https://api.github.com/users/avishek775/events{/privacy}",
        "received_events_url": "https://api.github.com/users/avishek775/received_events",
        "type": "User",
        "site_admin": false,
        "name": "abhishek singh",
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 24,
        "public_gists": 0,
        "followers": 1,
        "following": 1,
        "created_at": "2023-10-11T06:24:47Z",
        "updated_at": "2024-05-21T09:29:55Z"
      
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res)=>{
    res.send('abhishek')
})

app.get('/login', (req, res)=>{
    res.send('<h1>please login at chai aur code</h1>')
})
app.get('/github',(req,res)=>{
    res.json(githubData)
})

app.get('/sutta',(req, res)=>{
    res.send('<h2>code with  abhi</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
}) 