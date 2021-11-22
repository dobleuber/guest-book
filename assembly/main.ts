import { context } from "near-sdk-as";
import { PostedMessage, messages } from './model';

// --- contract code goes below

/**
 * Adds a new message under the name of the sender's account id.\
 * NOTE: This is a change method. Which means it will modify the state.\
 * But right now we don't distinguish them with annotations yet.
 */
export function addMessage(text: string): void {
  let sender = context.sender;
  const numMessages = messages.length;
  for(let i = 0; i < numMessages; i++) {
    if(messages[i].sender == sender) {
      throw new Error("already-signed");
    }
  }
  // Creating a new message and populating fields with our data
  const message = new PostedMessage(text);
  // Adding the message to end of the the persistent collection
  messages.push(message);
}

/**
 * Returns an array of last N messages.\
 * NOTE: This is a view method. Which means it should NOT modify the state.
 */
export function getMessages(): PostedMessage[] {
  const numMessages = messages.length;
  const result = new Array<PostedMessage>(numMessages);
  for(let i = 0; i < numMessages; i++) {
    result[i] = messages[i];
  }
  return result;
}
