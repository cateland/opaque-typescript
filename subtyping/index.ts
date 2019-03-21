import {
  UserID,
  RoomID,
  createUserID,
  createRoomID
} from "./ID";

import {
  Message,
  MessageContent,
  createMessage,
} from './message';


type Room = {
  room: RoomID,
  messages: Message[]
};

export function addMessage(
  roomId: RoomID,
  userId: UserID,
  messageContent: MessageContent
) {
  const room : Room = { room: roomId, messages: [] };
  // const message = { user: userId, message: messageContent } as Message;
  // const message : Message = createMessage(userId, messageContent);
  room.messages.push(message);
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
  const userID = createUserID(userId);
  const roomID = createRoomID(roomId);
  addMessage(roomID, userID , messageContent);
}
