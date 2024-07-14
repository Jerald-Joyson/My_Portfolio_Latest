const projectData = [
  /// collabration projects
  {
    image: "/work/collabration/2.png",
    category: "next js",
    name: "Alumni Website",
    description:
      "Mini Project - The Alumni Management System is a project that helps a certain university/college school manages its alumni data. This project has 2 sides of users UI (user interface), which are the admin side/school management and the alumnus/alumna's side. The admin side can manage all the list of job posted, alumni list, events, forum topics, and the gallery. The alumni site can create an account (to be verified by admin), post a job opportunity, create a forum topic, and join to other forums, commit to participate in an upcoming event such as homecoming. This website built with Next js, and powered by Firebase as the backend. ",
    link: "https://alumniweb-viswajith2003s-projects.vercel.app/",
    github: "https://github.com/Viswajith2003/Alumni_Website",
  },
  {
    image: "/work/collabration/1.png",
    category: "react js",
    name: "Blog Website",
    description:
      "Blog website built with Vite, ReactJS, Tailwind CSS, and powered by Firebase as the backend. This project aims to revolutionize the blogging experience, offering a seamless blend of performance, aesthetics, and ease of use. Dive into a world where content creation meets modern web technologies!",
    link: "https://devscript-stackup-xi.vercel.app/",
    github: "https://github.com/Jerald-Joyson/devscript-stackup",
  },
  {
    image: "/work/nextjs/1.png",
    category: "next js",
    name: "Text To Voice",
    description:
      "This is a simple Next.js project that converts text input to speech using the browser's speech synthesis API.",
    link: "https://text-to-voice-alpha.vercel.app/",
    github: "https://github.com/Jerald-Joyson/Text-To-Voice",
  },
  /// Flutter Projects
  {
    image: "/work/flutter/6.png",
    category: "flutter",
    name: "Timer App",
    description:
      "An ultimate timer app created using Flutter, offering a comprehensive solution for various timing needs. The app features: 📌 Stopwatch: Start, stop, resume, and reset functionality for tracking elapsed time with precision. 📌 Countdown: Set a custom time duration and let the countdown begin! Start, pause, and reset options available. 📌 Intuitive UI: Designed with a clean and user-friendly interface for seamless navigation. 📌 Cross-platform: Thanks to Flutter, the app runs smoothly on both iOS and Android devices.",
    link: "https://www.linkedin.com/posts/jerald-joyson_flutterdev-mobileappdevelopment-stopwatchapp-activity-7203628264920158209-smbc?utm_source=share&utm_medium=member_desktop",
    github: "https://github.com/Jerald-Joyson/PRODIGY_AD_03",
  },
  {
    image: "/work/flutter/3.png",
    category: "flutter",
    name: "Doctor Appointment App",
    description:
      "Discover the Doctor Appointment App, a seamless and efficient UI design for booking doctor appointments. With this Flutter app, patients can easily find and schedule appointments with their preferred doctors. The app offers a user-friendly interface, allowing patients to search for doctors based on their location, specialty, and availability. Patients can also view appointment details, track their progress, and receive notifications about their upcoming appointments. Whether you're looking for a primary care physician or a specialist, the Doctor Appointment App has you covered. Experience the convenience and peace of mind that comes with smoothly managing your healthcare needs with this powerful Flutter app.",
    github: "https://github.com/Jerald-Joyson/doctor-appointment-app-ui",
  },
  {
    image: "/work/flutter/2.png",
    category: "flutter",
    name: "Tic Tac Toe App",
    description:
      "Play Tic Tac Toe with our Flutter app! Choose from 1v1 or 2v2 game modes. Players can play against each other or against the computer. The app keeps track of scores and announces the winner at the end of each game.",
    link: "https://www.linkedin.com/posts/jerald-joyson_flutter-mobileappdevelopment-tictactoe-activity-7068635281909764096-e0L-?utm_source=share&utm_medium=member_desktop",
    github: "https://github.com/Jerald-Joyson/flutter_tic_tac_toe_game",
  },
  {
    image: "/work/flutter/5.png",
    category: "flutter",
    name: "Todo App",
    description:
      "This is a feature-rich to-do app using Flutter, capable of adding, deleting, editing, and finding tasks effortlessly.",
    link: "https://www.linkedin.com/posts/jerald-joyson_flutter-appdevelopment-productivity-activity-7203236470415904768-tbtg?utm_source=share&utm_medium=member_desktop",
    github: "https://github.com/Jerald-Joyson/PRODIGY_AD_02",
  },
  {
    image: "/work/flutter/4.png",
    category: "flutter",
    name: "Calculator App",
    description:
      "Calculator App is a simple yet powerful calculator app built with Flutter. It offers a user-friendly interface that allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. The app also supports decimal numbers and parentheses for more complex calculations. With Calculator App, you can solve equations and crunch numbers with ease.",
    link: "https://www.linkedin.com/posts/jerald-joyson_flutter-mobileappdevelopment-techinnovation-activity-7202878708771151872-QCCy?utm_source=share&utm_medium=member_desktop",
    github: "https://github.com/Jerald-Joyson/PRODIGY_AD_01",
  },

  {
    image: "/work/flutter/1.png",
    category: "flutter",
    name: "Bingo App",
    description:
      "Play classic Bingo with our Flutter app! Choose from classic Bingo games or customize your game to suit your needs. Players can join or create a room to compete against other players. The app keeps track of scores and announces the winner at the end of each round.",
    github: "https://github.com/Jerald-Joyson/Flutter_Bingo_App",
  },

  /// Android App projects
  {
    image: "/work/android/1.png",
    category: "Android",
    name: "Arithmetic Table Generator",
    description:
      "With Arithmetic Table Generator app, you can generate addition, multiplication, subtraction and division tables for any number. This app is a valuable tool for students and professionals who need to quickly generate calculations tables for specific numbers.This app is created using Android Studio(java).",
    github: "https://github.com/Jerald-Joyson/Arithmetic-Tables",
  },
  {
    image: "/work/android/2.png",
    category: "Android",
    name: "Notepad App",
    description:
      "The Notepad App is a simple app that allows users to create, read, update and delete notes. This app is created using Android Studio(java) and follows the Material Design guidelines. It allows users to create notes by typing in the title and description fields and save it to the internal storage of the device. The app also allows users to view and edit existing notes by clicking on them.",
    github: "https://github.com/Jerald-Joyson/Simple_Notes_App",
  },
  {
    image: "/work/android/3.png",
    category: "Android",
    name: "My Diary App",
    description:
      "A simple diary app that allows users to record their thoughts, feelings, or any other ideas they want to write down. It provides a user-friendly interface that allows users to easily create new entries, view existing entries, and organize them by date or category.",
    github: "https://github.com/Jerald-Joyson/Simple_Diary_App_2",
  },
  {
    image: "/work/android/4.png",
    category: "Android",
    name: "Secret Chat App",
    description:
      "Secret Chat App is a mobile application that allows users to send encrypted messages to each other. The app uses Android Studio (Java) and Firebase to store and manage user data and messages. It also uses encryption algorithms to ensure that only the sender and receiver can read the messages. The app is designed to be user-friendly and provides a secure way for users to communicate with each other.",
    github: "https://github.com/Jerald-Joyson/Secret_Chat_Application",
  },
  {
    image: "/work/android/5.png",
    category: "Android",
    name: "Trend Cart App",
    description:
      "Trend Cart App is a shopping application that allows users to browse and purchase items from various categories. It uses Android Studio (Java) and Firebase to store and manage user data and items. The app provides a user-friendly interface that allows users to browse products by category, add items to their cart, view their cart details, and place orders. Firebase is used to securely store user and order data, manage inventory, and process payments. The app also provides features such as account management, order tracking, and wishlist functionality.",
    github: "https://github.com/Jerald-Joyson/Trend_Cart_Mini_Project",
  },
  {
    image: "/work/android/6.png",
    category: "Android",
    name: "Hostel Debt Book",
    description:
      "This is just an app for students who where staying as hostellers. It is easy to calcuate mess bill There is a inbuild calculator for simple Calculations.. There is a notepad for writing important notes.. This app also contains data saving in a txt file",
    github: "https://github.com/Jerald-Joyson/Hostel-Debt-Book",
  },

  //// web based projects
  {
    image: "/work/web/1.png",
    category: "Web",
    name: "Calender Web App",
    description:
      "A web application that displays a calendar for every month in a year using HTML, CSS, and JavaScript.",
    link: "https://jerald-joyson.github.io/calender",
    github: "https://github.com/Jerald-Joyson/calender",
  },
  {
    image: "/work/web/2.png",
    category: "Web",
    name: "Snake Game",
    description:
      "A classic game of Snake where you control a snake that eats food and grows in length while avoiding collisions with the walls or itself.",
    link: "https://jerald-joyson.github.io/Snake_Game",
    github: "https://github.com/Jerald-Joyson/Snake_Game",
  },
  {
    image: "/work/web/3.png",
    category: "Web",
    name: "QR code Generator",
    description:
      "A web application that generates QR codes for any text or link you want, making it easy to share information or navigate to a website on the go.",
    link: "https://jerald-joyson.github.io/QR-Code-Handling/",
    github: "https://github.com/Jerald-Joyson/QR-Code-Handling",
  },
  {
    image: "/work/web/4.png",
    category: "Web",
    name: "Text To Speech",
    description:
      "A web application that allows users to input text and listen to it being spoken aloud using HTML, CSS, and JavaScript. The text is converted to speech using the Web Speech API and played back to the user.",
    link: "https://jerald-joyson.github.io/Text_To_Speech-",
    github: "https://github.com/Jerald-Joyson/Text_To_Speech-",
  },
  {
    image: "/work/web/5.png",
    category: "Web",
    name: "Tic-Tac-Toe (XO)",
    description:
      "A simple game of Tic-Tac-Toe (XO) implemented using HTML, CSS, and JavaScript. Players take turns marking squares on a grid and the first player to get three in a row wins.",
    link: "https://jerald-joyson.github.io/Simple-XO-Game",
    github: "https://github.com/Jerald-Joyson/Simple-XO-Game",
  },
];
export default projectData;
