// Event Emitter - will be shared across the application
const eventEmitter=require("events");
const bus=new eventEmitter();
module.exports=bus;

// Make single instance of Event Emitter
// const myEmitter=new eventEmitter();

// export the event emitter to be used in the application
// default export
// export default myEmitter;

// named or object export
// export const myEmitter = new eventEmitter();
