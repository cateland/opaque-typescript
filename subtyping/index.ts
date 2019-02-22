import {
  UserJID,
  RoomJID,
  createUserJID,
  createRoomJID
} from "./JID";

import {
  Message,
  MessageContent,
  createMessage,
} from './message';


type Room = {
  room: RoomJID,
  messages: Message[]
};

export function addMessage(
  roomId: RoomJID,
  userId: UserJID,
  messageContent: MessageContent
) {
  const room : Room = { room: roomId, messages: [] };
  // const message = { user: userId, message: messageContent } as Message;
  // const message : Message = createMessage(userId, messageContent);
  room.messages.push({ user: userId, message: messageContent });
}
type Request = {
  body: {
    roomId: string;
    userId: string;
    messageContent: MessageContent;
  };
};

export default function handleRequest(req: Request) {
  const { roomId, userId, messageContent } = req.body;
  const userJID = createUserJID(userId);
  const roomJID = createRoomJID(roomId);
  addMessage(roomJID, userJID , messageContent);
}
