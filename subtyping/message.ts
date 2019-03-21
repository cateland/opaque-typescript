import { Opaque } from './opaque';
import {
    UserID,
} from "./ID";

export type MessageContent = string;

export type Message = Opaque<"Message", {
    user: UserID;
    message: MessageContent;
}>;

// type $Message = Message & {
//     user: UserID;
//     message: MessageContent;
// }

// export function createMessage(user: UserID, message: MessageContent){
//     return ({
//         user,
//         message
//     } as $Message) as Message;
// }

// export function getMessageContent(message: Message): string {
//     const privateMessage = message as $Message;
//     return privateMessage.message;
// }