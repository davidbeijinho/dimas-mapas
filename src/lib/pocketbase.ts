import {
  TypedPocketBase,
  PlacesRecord,
  PostsRecord,
  PlacesResponse,
} from "@/../pocketbase-types";
import PocketBase from "pocketbase";

const URL = "https://pocketbase.hive.thebeijinho.com"
const pb = new PocketBase(
  URL,
) as TypedPocketBase;

export const getPoints = async () => {
  const result = await pb.collection("places").getList();

  return result;
};
//:Promise<PlacesRecord>
export const getPointByPostId = async ({ id }: { id: string }) => {
  const result = await pb.collection("places").getFirstListItem(`post="${id}"`);

  return result;
};
// :Promise<PostsRecord>
export const getPost = async ({ id }: { id: string }) => {
  const result = await pb.collection("posts").getOne(id);

  return result;
};

export const getPosts = async () => {
  const result = await pb.collection("posts").getList();

  return result;
};

export const getImageUrl = ({
  collection,
  record,
  filename,
}: {
  collection: string;
  record: string;
  filename: string;
}) => {
  //http://127.0.0.1:8090/api/files/COLLECTION_ID_OR_NAME/RECORD_ID/FILENAME


  // const url = pb.files.getUrl(record, firstFilename, {'thumb': '100x250'});
  // return url
  // ?token=
  return `${URL}/api/files/${collection}/${record}/${filename}`;
};
