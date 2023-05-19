<a name="readme-top"></a>

[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/webdevtut/firecnc">
    <img src="screenshots/logo.jpg" alt="Logo" width="50" height="50">
  </a>

  <h3 align="center">FireC&C</h3>

  <p align="center">
    Rent places with us
    <br />
    <a href="https://github.com/webdevtut/firecnc/blob/master/README.md"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/webdevtut/firecnc/files/11513724/firecandc.zip">Install & View Demo</a>
    ·
    <a href="https://github.com/webdevtut/firecnc/issues">Report Bug</a>
    ·
    <a href="https://github.com/webdevtut/firecnc/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![firecnc Screen Shot][product-screenshot]]

Basic House Rent App created for self-learning and showcase purpose.

Features :

- Foolproof authentication and responsive for multiple screens :smile:

- Scalable image upload functionality (Cloudinary)

- Hybrid App (one codebase for Android / ios / Web )

- Infinite scrolling (Experimental)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

Following Frameworks are used to make this project

- [![Ionic][Ionic.io]][Ionic-url]
- [![Angular][Angular.io]][Angular-url]
- [![Typescript][Typescript.io]][Typescript-url]
- [![RXJS][RXJS.io]][RXJS-url]
- [![Capacitor][Capacitor.io]][Capacitor-url]
- [![Node][Node.io]][Node-url]
- [![NPM][NPM.io]][NPM-url]
- [![Firebase][Firebase.io]][Firebase-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these steps.

### Prerequisites

Install Node v14+

- npm

  ```sh
  npm install npm@latest -g
  ```

- Ionic CLI

  ```sh
  npm install -g @ionic/cli
  ```

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/webdevtut/firecnc.git
   ```

2. Install NPM packages

   ```sh
   npm install
   ```

3. Get Firebase Authentication Keys _&rarr; [here](https://firebase.google.com/docs/auth)_

4. Get Cloudinary Keys for image upload _&rarr; [here](https://cloudinary.com/developers)_

5. In base folder run the command

   ```sh
   ionic serve
   ```

6. To generate android build

- First generate Angular Ionic build

  ```sh
  ionic build
  ```
- Then generate Andoid build

  ```sh
  npx cap add android
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Install apk provided in zip file _&rarr; [here](https://github.com/webdevtut/firecnc/files/11513724/firecandc.zip)_ Create account and login to see the example🤗.

_For more examples, please refer to the [Documentation](https://github.com/webdevtut/firecnc/blob/master/README.md)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Create place to list for rent Functionality
- [x] Firebase Authentication Integration.
- [x] Image upload scalable with cloudinary.
- [x] Implement State management using RXJS (Reactive Login / Logout Functions)
- [x] Real time Firebase JSON Database integration
- [x] Multiple device support Camera Integration
- [x] Cancel Booking Functionality
- [x] Create Android Bundle (.APK) and upload as release
- [ ] Add Features for User Accessibility
  - [ ] Google / Mapbox Map for place to rent location.
  - [ ] Contact and chat with Landlord

See the [open issues](https://github.com/webdevtut/firecnc/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Your Name - [@tushar-web-dev](https://linkedin.com/in/tushar-web-dev/) - tusharlookingforjob@gmail.com

Zipped APK Link: [https://github.com/webdevtut/firecnc/files/11513724/firecandc.zip](https://github.com/webdevtut/firecnc/files/11513724/firecandc.zip)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Useful links

- [Deployment platform (used for image-upload NodeJS API deployment)](https://www.cyclic.sh/)
- [Angular Cheat Sheet](https://angular.io/guide/cheatsheet)
- [Ionic Docs](https://ionicframework.com/docs)
- [Capacitor Android deployment Docs](https://capacitorjs.com/docs/android)
- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Img Shields](https://shields.io)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[issues-shield]: https://img.shields.io/github/issues/webdevtut/firecnc.svg?style=for-the-badge
[issues-url]: https://github.com/webdevtut/firecnc/issues
[license-shield]: https://img.shields.io/github/license/webdevtut/firecnc.svg?style=for-the-badge
[license-url]: https://github.com/webdevtut/firecnc/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/tushar-web-dev/
[product-screenshot]: screenshots/product_screenshot.JPG
[Node.io]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org/
[Ionic.io]: https://img.shields.io/badge/Ionic-3880FF?style=for-the-badge&logo=ionic&logoColor=white
[Ionic-url]: https://ionicframework.com/
[Angular.io]: https://img.shields.io/badge/angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Typescript.io]: https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org/
[Capacitor.io]: https://img.shields.io/badge/capacitor-119EFF?style=for-the-badge&logo=capacitor&logoColor=white
[Capacitor-url]: https://capacitorjs.com/
[RXJS.io]: https://img.shields.io/badge/RXJS-B7178C?style=for-the-badge&logo=reactivex&logoColor=white
[RXJS-url]: https://rxjs.dev/
[NPM.io]: https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white
[NPM-url]: https://www.npmjs.com/
[Firebase.io]: https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white
[Firebase-url]: https://firebase.google.com/
