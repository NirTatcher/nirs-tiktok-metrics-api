const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const baseUrl = "https://tiktok-metrics-flask-app.herokuapp.com/"



async function get_author(author_name){
   let urlAddition = "tiktok-author?author="+author_name
   return await (await fetch(baseUrl+urlAddition)).json()
}

async function get_video(author_name,vid_id){
    let urlAddition = "tiktok-video?author="+author_name + "&video_id="+vid_id
    return await (await fetch(baseUrl+urlAddition)).json()
 }

module.exports = {
    author: async (author_name) =>await get_author(author_name),
    video: async (author_name,vid_id)=> await get_video(author_name,vid_id)
}