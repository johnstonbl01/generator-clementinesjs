# generator-clementinejs

A [Yeoman](http://yeoman.io/) generator for the Clementine.js boilerplate.

Clementine.js started as a personal project to create a boilerplate that would help me easily stand up a new project using the MEAN stack (MongoDB, Express, Angular.js & Node.js). As a novice, I found that other boilerplates were often too feature-rich and contained a lot of moving pieces that were difficult to untangle. Additionally, I wanted to ensure that each piece of the application was well-documented and easy to grasp for new developers.

Clementine.js provides a lightweight boilerplate for projects where the developer wishes to perform most of the integration him or herself without having to remove many (or any) features.

## Installation

Installation is simple, but requires Yeoman and NPM as pre-requesites. For information on installing NPM, see [this document](https://github.com/johnstonbl01/clementinejs-beginner#nodejs--npm).

```bash
$ npm install -g yo
$ mkdir your-project
$ cd your-project
$ yo clementinejs
```

To install different versions of the app, simply append the version name:

- Beginner: `$ yo clementinejs:beginner`
- Bare: `$ yo clementinejs:bare`
- FCC: `$ yo clementinejs:fcc`

**Note** - the standard version is the default version.

To start the application, simply type `$ gulp` into the terminal (Note that this is only for the standard version. Instructions for starting the application differ by version. See documentation below.)

## Source Code

- [Clementine.js Standard](https://github.com/johnstonbl01/clementinejs)
- [Clementine.js Bare](https://github.com/johnstonbl01/clementinejs-bare)
- [Clementine.js Beginner](https://github.com/johnstonbl01/clementinejs-beginner)
- [Clementine.js FCC](https://github.com/johnstonbl01/clementinejs-fcc)

### Version Features

| Features 				| Beginner 	| Standard 	| Bare 		| FCC 		|
|:---------				|:--------:	|:--------:	|:---------:|:---------:|
| Commented Code		| _Yes_ 	| _No_ 		| _No_		| _No_		|
| Example Controller 	| _Yes_ 	| _Yes_		| _Yes_		| _Yes_		|
| Example Directive 	| _No_ 		| _Yes_		| _No_		| _No_		|
| Jade					| _No_ 		| _Yes_ 	| _Yes_	 	| _No_		|
| Mongoose				| _No_		| _Yes_		| _Yes_		| _Yes_		|
| Gulp				 	| _No_		| _Yes_		| _Yes_		| _No_		|
| Sass					| _No_		| _Yes_		| _Yes_		| _No_		|
| Bower					| _Yes_		| _Yes_		| _Yes_		| _No_		|
| Authentication		| _No_		| _No_		| _No_		| _Yes_		|

## Documentation

Documentation for the application can be [found here](http://johnstonbl01.github.io/clementinejs/).

## Contributing

This is an open-source project, and contributions are always welcome! To see ways to contribute, please review the [contribution guidelines](http://johnstonbl01.github.io/clementinejs/developers/contributing.html).

## License

MIT License. [Click here for more information.](LICENSE.md)