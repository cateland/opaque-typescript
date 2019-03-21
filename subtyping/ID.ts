import { Opaque } from './opaque';

export type UserID = Opaque<"UserID", string>;
export type RoomID = Opaque<"RoomID", string>;

export function createUserID(userId: string): UserID {
  return userId as UserID;
}
export function createRoomID(roomId: string): RoomID {
  return roomId as RoomID;
}
