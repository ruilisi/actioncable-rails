# ActionCable Rails

`Rails 5` brings a beautiful thing to rails developers, which is `Action Cable`. For a long time, rails developers handle `websocket` through `socket.io`, which requires a separate server running `Node` and tedious code handling connections between the node and rails.

Action Cable resolves this by seamlessly integrating WebSockets with your Rails application, which allows for real-time connection to be written in Ruby, while still being performant and scalable. 

While the official implementation of `actioncable.js` 
This project offers several things which the official implementation of [actioncable.js](https://github.com/rails/rails/tree/master/actioncable/app/javascript/action_cable] does not offer:

* Configurations for compiling the `official` implementation is provided, so that any developer can fork this repo and tweak the code, finally create their own version of `actioncable.js`.
* The official implementation and other implementations searching from `npm` have a common issue that integrating them with SSR(server side rendering) is hard, simply because the server bothers with `'window is not defined'`. This project offers a quick and clean solution, which is by inserting one line of code into `output` section of `webpack` config as:
```
  output: {
    ...
    globalObject: "typeof self !== 'undefined' ? self : this",
    ...
  },
```
* [Jwt](https://jwt.io/) authentication  
* Quick updates of optimizations and bug fixes of the official one since this project stays standalone

## Usage

`yarn add actioncable-rails`

## License

actioncable-rails is released under the MIT license:
http://www.opensource.org/licenses/MIT


