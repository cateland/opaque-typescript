type Opaque<K, T> = T & { __TYPE__: K };

export type UserJID = Opaque<"UserJID", string>;
export type RoomJID = Opaque<"RoomJID", string>;
export type MessageContent = string;

export function createUserJID(userId: string): UserJID {
  return userId as UserJID;
}
export function createRoomJID(roomId: string): RoomJID {
  return roomId as RoomJID;
}
