import {
  UserJID,
  RoomJID,
  MessageContent,
  createUserJID,
  createRoomJID
} from "./JID";


type Message = {
  user: UserJID;
  message: MessageContent;
};

type Room = {
  room: RoomJID,
  messages: Message[]
};

export function addMessage(
  roomId: RoomJID,
  userId: UserJID,
  messageContent: MessageContent
) {
  const room = { room: roomId, messages: [] };
  room.messages.push({ userId, messageContent });
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
  addMessage(userJID, roomJID, messageContent);
}
