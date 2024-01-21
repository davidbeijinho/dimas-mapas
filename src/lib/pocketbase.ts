import {
  TypedPocketBase,
  PlacesRecord,
  PostsRecord,
  LocationsResponse,
  TagsResponse,
  PlacesResponse,
  AuthorsResponse,
  Collections,
} from "@/../pocketbase-types";
import PocketBase from "pocketbase";

const URL = "https://pocketbase.hive.thebeijinho.com";
const pb = new PocketBase(URL) as TypedPocketBase;

export const getPlaces = async () => {
  const result = await pb.collection(Collections.Places).getList(1, 50, {
    expand: "tags,location.country,author",
  });

  return result;
};
export const getPlacesWithPosts = async () => {
  const result = await pb.collection(Collections.Places).getList(1, 50, {
    filter: "post!=null",
    expand: "tags,location,post,author",
  });

  return result;
};
//:Promise<PlacesRecord>

type Texpand = {
  tags: TagsResponse;
  location: LocationsResponse;
  author: AuthorsResponse;
};

export const getPlacesByPostId = async ({ id }: { id: string }) => {
  const result = await pb
    .collection(Collections.Places)
    .getFirstListItem<PlacesResponse<Texpand>>(`post="${id}"`, {
      expand: "tags,location.country,author",
    });

  return result;
};
// :Promise<PostsRecord>
export const getPost = async ({ id }: { id: string }) => {
  const result = await pb.collection(Collections.Posts).getOne(id);

  return result;
};
export const getPlace = async ({ id }: { id: string }) => {
  const result = await pb
    .collection(Collections.Places)
    .getOne(id, { expand: "post" });

  return result;
};

export const getPosts = async () => {
  const result = await pb
    .collection(Collections.Posts)
    .getList(undefined, undefined, {
      expand: "author",
    });

  return result;
};
export const getAuthors = async () => {
  const result = await pb.collection(Collections.Authors).getList();

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
