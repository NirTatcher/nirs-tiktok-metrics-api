# nirs-tiktok-metrics-api


##### _Get public data from tiktok videos and authors_


- Get author metrics such as likes, followers etc. 
- Get video metrics such as likes, shares, comments etc.


### Installation

```npm install nirs-tiktok-metrics-api ```

### Usauge

 - ```author_name``` - author name from account url (https://www.tiktok.com/@ ```author_name``` )
 - ```video_id``` - video id from video url (https://www.tiktok.com/@ ```author_name``` /video/ ```video_id``` )
#### Get author

```
const tiktok = require('nirs-tiktok-metrics-api');

tiktok.author('author_name')
.then(authorStats=>authorStats.json())
.then(authorStatsFinal=>console.log(authorStatsFinal));
```

#### Get video
```
const tiktok = require('nirs-tiktok-metrics-api');

tiktok.video('author_name','video_id')
.then(videoStats=>videoStats.json())
.then(videoStatsFinal=>console.log(videoStatsFinal));
```

### Examples

#### Get author response
```
{
  message: "{'followerCount': 1400000, 'followingCount': 246, 'heart': 47800000, 'heartCount': 47800000, 'videoCount': 1276, 'diggCount': 6632}",
  status: 200
}
```
#### Get video response
```
{
  message: "{'diggCount': 16500, 'shareCount': 36, 'commentCount': 161, 'playCount': 199500}",
  status: 200
}
```
> NOTE:
> The package relies on fetch calls to my tiktok api app hosted on heroku (currently a private repo)


