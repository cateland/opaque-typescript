import {
  UserID,
  RoomID,
  MessageContent,
  createUserID,
  createRoomID
} from "./ID";


type Message = {
  user: UserID;
  message: MessageContent;
};

type Room = {
  room: RoomID,
  messages: Message[]
};

export function addMessage(
  roomId: RoomID,
  userId: UserID,
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
  const userID = createUserID(userId);
  const roomID = createRoomID(roomId);
  addMessage(userID, roomID, messageContent);
}
