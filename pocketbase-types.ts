/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Authors = "authors",
	Places = "places",
	Posts = "posts",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type AuthorsRecord = {
	name?: string
}

export type PlacesRecord = {
	author?: RecordIdString[]
	cordenadas?: string
	place_name: string
	post?: RecordIdString
	year_begin?: number
	year_end?: number
}

export type PostsRecord = {
	content?: HTMLString
	image?: string
	title?: string
}

export type UsersRecord = {
	avatar?: string
	name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type AuthorsResponse<Texpand = unknown> = Required<AuthorsRecord> & BaseSystemFields<Texpand>
export type PlacesResponse<Texpand = unknown> = Required<PlacesRecord> & BaseSystemFields<Texpand>
export type PostsResponse<Texpand = unknown> = Required<PostsRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	authors: AuthorsRecord
	places: PlacesRecord
	posts: PostsRecord
	users: UsersRecord
}

export type CollectionResponses = {
	authors: AuthorsResponse
	places: PlacesResponse
	posts: PostsResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'authors'): RecordService<AuthorsResponse>
	collection(idOrName: 'places'): RecordService<PlacesResponse>
	collection(idOrName: 'posts'): RecordService<PostsResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
