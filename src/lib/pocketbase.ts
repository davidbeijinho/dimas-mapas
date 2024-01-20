import { TypedPocketBase, PlacesRecord, PostsRecord, PlacesResponse } from "@/../pocketbase-types"
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://pocketbase.hive.thebeijinho.com') as TypedPocketBase;


export const getPoints = async ()=>{
const result = await pb.collection('places').getList()

return result
}
//:Promise<PlacesRecord>
export const getPointByPostId = async ({id}:{id:string}) =>{
const result = await pb.collection('places').getFirstListItem(`post="${id}"`);

return result
}
// :Promise<PostsRecord>
export const getPost = async ({id}:{id:string})=>{
const result = await pb.collection('posts').getOne(id)

return result
}

export const getPosts = async ()=>{
const result = await pb.collection('posts').getList()

return result
}

