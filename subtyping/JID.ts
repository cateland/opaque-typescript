import { Opaque } from './opaque';

export type UserJID = Opaque<"UserJID", string>;
export type RoomJID = Opaque<"RoomJID", string>;

export function createUserJID(userId: string): UserJID {
  return userId as UserJID;
}
export function createRoomJID(roomId: string): RoomJID {
  return roomId as RoomJID;
}
