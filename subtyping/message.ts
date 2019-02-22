import { Opaque } from './opaque';
import {
    UserJID,
} from "./JID";

export type MessageContent = string;

export type Message = Opaque<"Message", {
    user: UserJID;
    message: MessageContent;
}>;

// type $Message = Message & {
//     user: UserJID;
//     message: MessageContent;
// }

// export function createMessage(user: UserJID, message: MessageContent){
//     return ({
//         user,
//         message
//     } as $Message) as Message;
// }

// export function getMessageContent(message: Message): string {
//     const privateMessage = message as $Message;
//     return privateMessage.message;
// }