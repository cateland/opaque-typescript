type Opaque<K, T> = T & { __TYPE__: K };

export type UserID = Opaque<"UserID", string>;
export type RoomID = Opaque<"RoomID", string>;
export type MessageContent = string;

export function createUserID(userId: string): UserID {
  return userId as UserID;
}
export function createRoomID(roomId: string): RoomID {
  return roomId as RoomID;
}
